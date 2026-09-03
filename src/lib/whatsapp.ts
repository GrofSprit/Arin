import type { MouseEvent } from 'react'

const WHATSAPP_NUMBER = '491773773486'
const CONSENT_STORAGE_KEY = 'teilepilot24-cookie-choice'
const WHATSAPP_CONVERSION_SEND_TO = 'AW-10808738065/QhxPCJCkre0cEJGCgaIo'
const WHATSAPP_CONVERSION_TIMEOUT_MS = 800

interface ConversionParameters {
  send_to: string
  event_callback?: () => void
  event_timeout?: number
}

type GoogleTag = (command: 'event', eventName: 'conversion', parameters: ConversionParameters) => void

declare global {
  interface Window {
    gtag?: GoogleTag
  }
}

export const DEFAULT_WHATSAPP_MESSAGE =
  'Hallo TeilePilot24, ich benötige ein Ersatzteil für mein Fahrzeug. Ich sende Ihnen gleich ein Foto vom Fahrzeugschein.'

export function createWhatsAppUrl(message = DEFAULT_WHATSAPP_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const WHATSAPP_URL = createWhatsAppUrl()

function hasTrackingConsent() {
  try {
    return window.localStorage.getItem(CONSENT_STORAGE_KEY) === 'accepted'
  } catch {
    return false
  }
}

function preparePendingWhatsAppWindow() {
  const pendingWindow = window.open('about:blank', '_blank')
  if (!pendingWindow) return null

  try {
    pendingWindow.opener = null
    const referrerPolicy = pendingWindow.document.createElement('meta')
    referrerPolicy.name = 'referrer'
    referrerPolicy.content = 'no-referrer'
    pendingWindow.document.head.appendChild(referrerPolicy)
  } catch {
    // The destination still opens safely if the temporary document is inaccessible.
  }

  return pendingWindow
}

function sendWhatsAppConversion(gtag: GoogleTag, eventCallback?: () => void) {
  const parameters: ConversionParameters = {
    send_to: WHATSAPP_CONVERSION_SEND_TO,
    event_timeout: WHATSAPP_CONVERSION_TIMEOUT_MS,
  }
  if (eventCallback) parameters.event_callback = eventCallback

  try {
    gtag('event', 'conversion', parameters)
    return true
  } catch {
    return false
  }
}

export function trackWhatsAppConversion(event: MouseEvent<HTMLAnchorElement>) {
  if (typeof window === 'undefined' || !hasTrackingConsent() || typeof window.gtag !== 'function') {
    return
  }

  const gtag = window.gtag
  const isModifiedClick = event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey

  if (isModifiedClick) {
    sendWhatsAppConversion(gtag)
    return
  }

  const destinationUrl = event.currentTarget.href
  const pendingWindow = preparePendingWhatsAppWindow()

  if (!pendingWindow) {
    sendWhatsAppConversion(gtag)
    return
  }

  event.preventDefault()

  let destinationOpened = false

  const openDestinationOnce = () => {
    if (destinationOpened) return
    destinationOpened = true
    window.clearTimeout(fallbackTimer)

    try {
      pendingWindow.location.replace(destinationUrl)
    } catch {
      window.location.assign(destinationUrl)
    }
  }

  const fallbackTimer = window.setTimeout(openDestinationOnce, WHATSAPP_CONVERSION_TIMEOUT_MS)

  if (!sendWhatsAppConversion(gtag, openDestinationOnce)) openDestinationOnce()
}
