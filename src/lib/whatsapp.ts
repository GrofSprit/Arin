const WHATSAPP_NUMBER = '491733795779'

export const DEFAULT_WHATSAPP_MESSAGE =
  'Hallo TeilePilot24, ich benötige ein Ersatzteil für mein Fahrzeug. Ich sende Ihnen gleich ein Foto vom Fahrzeugschein.'

export function createWhatsAppUrl(message = DEFAULT_WHATSAPP_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const WHATSAPP_URL = createWhatsAppUrl()
