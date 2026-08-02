import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer footer-v2">
      <div className="footer-inner">
        <Link to="/" className="brand">
          Pathwise
        </Link>
        <p>
          Show up today —{' '}
          <Link to="/today">Today</Link>
          {' · '}
          <Link to="/manuals">manuals</Link>
          {' · '}
          <Link to="/tags">tags</Link>
          {' · '}
          <Link to="/sparks">Sparks</Link>
          {' · '}
          <Link to="/break">Break</Link>
          {' · '}
          <Link to="/cookbook">Cookbook</Link>
          {' · '}
          <Link to="/kits">Kits</Link>
          {' · '}
          <Link to="/insights">Insights</Link>.
        </p>
      </div>
    </footer>
  )
}
