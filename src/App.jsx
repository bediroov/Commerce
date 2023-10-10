import React from 'react'
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ProductProvider } from './context/ProductContext'

const App = () => {
  return (
    <BrowserRouter>
      <ProductProvider>
        <Routes>
          <Route path='' element={<Home />}  >
          
         
            
          </Route>
        </Routes>
      </ProductProvider>
    </BrowserRouter>
  )
}

export default App
