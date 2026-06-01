"use client"
import './style.css'
import CheckoutProgress from './components/checkout_progress/CheckoutProgress'

export default function CheckoutLayout({children}){
  return(
    <div id="checkout">
      <header className="header">
        <span>Comprar material</span>
        <div>Por 50% OFF</div>
      </header>

      <CheckoutProgress />

      <div className="checkout-content">
        {children}
      </div>
    </div>
  )
}