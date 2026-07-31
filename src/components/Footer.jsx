import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <Link to="/" className="brand">
          Pathwise
        </Link>
        <p>From zero to craft — manuals you can keep adding forever.</p>
      </div>
    </footer>
  )
}
