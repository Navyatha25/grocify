import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CartProvider } from './components/CartContext/CartContext.jsx'
import { AuthProvider } from './components/AuthContext/AuthContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
        <CartProvider>
          <App/>
        </CartProvider>
    </AuthProvider>
  </StrictMode>  
)
