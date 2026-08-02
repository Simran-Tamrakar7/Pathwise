import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <Link to="/" className="brand">
          Pathwise
        </Link>
        <p>
          From zero to craft —{' '}
          <Link to="/manuals">manuals</Link>
          {' · '}
          <Link to="/break">Break Room</Link>
          {' · '}
          <Link to="/cookbook">Cookbook</Link>.
        </p>
      </div>
    </footer>
  )
}
