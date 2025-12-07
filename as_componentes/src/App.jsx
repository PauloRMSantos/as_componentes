import './App.css'
import ProductsListPage from './pages/ProductsListPage'
import MainLayout from './layouts/MainLayout'
import { HomePage } from './pages/HomePage'
import NotFound from './pages/NotFoundPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ContactPage } from './pages/ContactPage'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route path='/' element={<HomePage />}/>
          <Route path='/contact' element={<ContactPage />}/>
          {/* <Route path='/sobre/:id' element={<SobrePage />}/> */}
          <Route path='/products' element={<ProductsListPage />}/>
          {/* <Route path='/produtos/form' element={<FormProdutoPage />}/> */}
          {/* <Route path='/produtos/form/:id' element={<FormProdutoPage />}/> */}
        </Route>
        <Route path='*' element={<NotFound />}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
