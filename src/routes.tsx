import { Route, Routes } from 'react-router-dom'
import { Home } from './Pages/Home/Index'
import { Categories } from './Pages/Categories/Index'

export const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categorias" element={<Categories />} />
  </Routes>
)
