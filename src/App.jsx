import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import Catalog from './pages/Catalog'
import Manual from './pages/Manual'
import Chapter from './pages/Chapter'
import BreakRoom from './pages/BreakRoom'

export default function App() {
  return (
    <BrowserRouter basename="/Pathwise">
      <Nav />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/manuals" element={<Catalog />} />
          <Route path="/manuals/:id" element={<Manual />} />
          <Route path="/manuals/:id/chapters/:chapterId" element={<Chapter />} />
          <Route path="/break" element={<BreakRoom />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
