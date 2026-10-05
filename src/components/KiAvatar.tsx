export default function KiAvatar({ thinking = false }: { thinking?: boolean }) {
  return (
    <span className={`tp-avatar ${thinking ? 'tp-avatar-thinking' : ''}`} aria-hidden="true">
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M24 8V4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="24" cy="4" r="2" fill="currentColor" />
        <rect x="7" y="11" width="34" height="29" rx="11" fill="currentColor" fillOpacity=".15" stroke="currentColor" strokeWidth="2" />
        <rect x="12" y="17" width="24" height="13" rx="6.5" fill="#14213D" />
        <path className="tp-avatar-eyes" d="M18 22v3m12-3v3" stroke="#8EE6FF" strokeWidth="3" strokeLinecap="round" />
        <path d="M20 34h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </span>
  )
}
