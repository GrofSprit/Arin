import { useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { MessageCircle, X, ArrowUpRight } from 'lucide-react'
import { KiChat } from '../pages/KiAssistent'
import { getRouteSeoState } from '../lib/routeSeo'
import './KiHelpWidget.css'

export default function KiHelpWidget() {
  const { pathname } = useLocation()
  if (pathname.replace(/\/$/, '') === '/ki-assistent' || (!getRouteSeoState(pathname) && pathname !== '/katalog-vorschau')) return null
  return <HelpWidget key={pathname} />
}

function HelpWidget() {
  const navigate = useNavigate()
  const [ready, setReady] = useState(false)
  const [invite, setInvite] = useState(false)
  const [open, setOpen] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [cookieVisible, setCookieVisible] = useState(false)
  const trigger = useRef<HTMLButtonElement>(null)
  const closeButton = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setReady(true)
      try {
        if (!sessionStorage.getItem('tp24_ki_invite_seen')) {
          setInvite(true)
          sessionStorage.setItem('tp24_ki_invite_seen', '1')
        }
      } catch { setInvite(true) }
    }, 4000)
    const cookie = (event: Event) => setCookieVisible((event as CustomEvent<boolean>).detail)
    window.addEventListener('tp24:cookie-banner-visibility', cookie)
    const frame = requestAnimationFrame(() => setCookieVisible(!!document.querySelector('[aria-label="Cookie-Hinweis"]')))
    return () => { clearTimeout(timer); cancelAnimationFrame(frame); window.removeEventListener('tp24:cookie-banner-visibility', cookie) }
  }, [])

  useEffect(() => {
    if (!open) return
    closeButton.current?.focus()
    const close = () => { setOpen(false); trigger.current?.focus() }
    const escape = (event: KeyboardEvent) => { if (event.key === 'Escape') close() }
    const resize = () => { if (window.innerWidth < 1024) close() }
    window.addEventListener('keydown', escape)
    window.addEventListener('resize', resize)
    return () => { window.removeEventListener('keydown', escape); window.removeEventListener('resize', resize) }
  }, [open])

  function start() {
    setInvite(false)
    if (window.innerWidth < 1024) { navigate('/ki-assistent'); return }
    setLoaded(true)
    setOpen(true)
  }

  return <aside className="ki-help" hidden={!ready || cookieVisible} aria-label="KI-Hilfe">
    {invite && !open && <div className="ki-help-invite"><button onClick={() => setInvite(false)} aria-label="Hinweis schließen"><X size={16} /></button><strong>Brauchst du Hilfe?</strong><p>Frag den TeilePilot KI-Assistenten.</p><button onClick={start} className="ki-help-invite-action">Frag mich</button></div>}
    {loaded && <section className="ki-help-panel" hidden={!open} role="dialog" aria-modal="false" aria-label="TeilePilot KI-Assistent"><div className="ki-help-toolbar"><Link to="/ki-assistent">Groß öffnen <ArrowUpRight size={15} /></Link><button ref={closeButton} onClick={() => { setOpen(false); trigger.current?.focus() }} aria-label="KI-Chat schließen"><X size={20} /></button></div><KiChat /><p className="ki-help-disclaimer">KI kann Fehler machen. Verbindliche Teileprüfung durch unser Team.</p></section>}
    <button ref={trigger} className="ki-help-trigger" onClick={() => open ? setOpen(false) : start()} aria-label={open ? 'KI-Chat minimieren' : 'KI-Assistent öffnen'} aria-expanded={open}><MessageCircle size={22} /><span>KI-Hilfe</span></button>
  </aside>
}
