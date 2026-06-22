import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Success from './pages/Success'
import Impressum from './pages/Impressum'
import Datenschutz from './pages/Datenschutz'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/success" element={<Success />} />
      <Route path="/impressum" element={<Impressum />} />
      <Route path="/datenschutz" element={<Datenschutz />} />
    </Routes>
  )
}
