import './App.css'
import ProductsListPage from './pages/ProductsListPage'
import MainLayout from './layouts/MainLayout'
import { HomePage } from './pages/HomePage'
import NotFound from './pages/NotFoundPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ContactPage } from './pages/ContactPage'
import { SeeMorePage } from "./pages/SeeMorePage"
import { NewProductPage } from './pages/NewProductPage'
import { EditProductPage } from './pages/EditProductPage'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route path='/' element={<HomePage />}/>
          <Route path='/contact' element={<ContactPage />}/>
          <Route path='/products/:id' element={<SeeMorePage />}/>
          <Route path='/products' element={<ProductsListPage />}/>
          <Route path='/products/new' element={<NewProductPage />}/>
          <Route path='/products/edit/:id' element={<EditProductPage />}/>
        </Route>
        <Route path='*' element={<NotFound />}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
