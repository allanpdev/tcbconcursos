"use client"
import './style.css'
import Button from '../components/button/Button'
import ProductCard from '../components/product_card/ProductCard'

export default function Step2(){
  return(
    <div id="second-step" className="checkout-step">
      <ProductCard/>
      <div className="payment-options">
        <span className="slide-down">Faça o pagamento com:</span>
        
        <div className="payment-option" id="pix-option">
          <label htmlFor="pix-radio" id="pix-label">
            <img src="/icons/payment-pix.webp" width="26" height="24" alt=""/>
            <span>Pix</span>
            <input type="radio" id="pix-radio" name="payment-option"/>
          </label>

          <div className="expand">
          </div>
        </div>

        <div className="payment-option" id="credit-card-option">
          <label htmlFor="credit-card-radio">
            <img src="/icons/credit-card.svg" width="27" height="27"/>
            <span>Cartão</span>
            <input type="radio" width="30" id="credit-card-radio" name="payment-option"/>
          </label>

          <div className="expand">
          </div>
        </div>

        <div className="payment-option">
          <label htmlFor="bill-radio">
            <img src="/icons/payment-bill-white.webp" width="26" alt=""/>
            <span>Boleto</span>
            <input type="radio" id="bill-radio" name="payment-option"/>
          </label>

          <div className="expand">
          </div>
        </div>
        <Button route="/checkout/download" click={() => console.log('teste')}/>
      </div>
    </div>
  )
}