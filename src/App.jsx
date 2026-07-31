import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import Catalog from './pages/Catalog'
import Manual from './pages/Manual'

export default function App() {
  return (
    <BrowserRouter basename="/Pathwise">
      <Nav />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/manuals" element={<Catalog />} />
          <Route path="/manuals/:id" element={<Manual />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
