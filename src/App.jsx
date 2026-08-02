import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useEffect } from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import Catalog from './pages/Catalog'
import Manual from './pages/Manual'
import Chapter from './pages/Chapter'
import BreakRoom from './pages/BreakRoom'
import Cookbook from './pages/Cookbook'
import Sparks from './pages/Sparks'
import Today from './pages/Today'
import Tags from './pages/Tags'
import Insights from './pages/Insights'
import Kits from './pages/Kits'
import { initAnalytics, track } from './lib/analytics'

export default function App() {
  useEffect(() => {
    initAnalytics()
    track('app_open')
  }, [])

  return (
    <BrowserRouter basename="/Pathwise">
      <Nav />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/today" element={<Today />} />
          <Route path="/manuals" element={<Catalog />} />
          <Route path="/manuals/:id" element={<Manual />} />
          <Route path="/manuals/:id/chapters/:chapterId" element={<Chapter />} />
          <Route path="/tags" element={<Tags />} />
          <Route path="/tags/:tagId" element={<Tags />} />
          <Route path="/kits" element={<Kits />} />
          <Route path="/break" element={<BreakRoom />} />
          <Route path="/cookbook" element={<Cookbook />} />
          <Route path="/sparks" element={<Sparks />} />
          <Route path="/insights" element={<Insights />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
