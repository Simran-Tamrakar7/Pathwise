import { NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <NavLink to="/" className="brand" aria-label="Pathwise home">
          <svg className="brand-mark" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <rect width="32" height="32" rx="6" fill="#0B3D2E" />
            <path d="M8 22V10l8 4.5L24 10v12l-8 4.5L8 22z" stroke="#F2EFE6" strokeWidth="1.6" strokeLinejoin="round" />
            <path d="M16 14.5V26.5" stroke="#7CDBB0" strokeWidth="1.6" />
          </svg>
          Pathwise
        </NavLink>
        <nav className="nav-links" aria-label="Primary">
          <NavLink to="/manuals" className={({ isActive }) => (isActive ? 'active' : undefined)}>
            Manuals
          </NavLink>
          <NavLink to="/manuals" className="nav-cta">
            Start learning
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
