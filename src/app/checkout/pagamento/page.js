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
            <img src="./static/icons/ui/payment-pix.webp" width="24" alt=""/>
            <span>Pix</span>
            <input type="radio" id="pix-radio" name="payment-option"/>
          </label>

          <div className="expand">
          </div>
        </div>

        <div className="payment-option" id="credit-card-option">
          <label htmlFor="credit-card-radio">
            <svg width="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="rgb(255,255,255)" d="M512 176C520.8 176 528 183.2 528 192L528 224L112 224L112 192C112 183.2 119.2 176 128 176L512 176zM528 288L528 448C528 456.8 520.8 464 512 464L128 464C119.2 464 112 456.8 112 448L112 288L528 288zM128 128C92.7 128 64 156.7 64 192L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 192C576 156.7 547.3 128 512 128L128 128zM144 408C144 421.3 154.7 432 168 432L216 432C229.3 432 240 421.3 240 408C240 394.7 229.3 384 216 384L168 384C154.7 384 144 394.7 144 408zM288 408C288 421.3 298.7 432 312 432L376 432C389.3 432 400 421.3 400 408C400 394.7 389.3 384 376 384L312 384C298.7 384 288 394.7 288 408z"/></svg>
            <span>Cartão</span>
            <input type="radio" width="30" id="credit-card-radio" name="payment-option"/>
          </label>

          <div className="expand">
          </div>
        </div>

        <div className="payment-option">
          <label htmlFor="bill-radio">
            <img src="./static/icons/ui/payment-bill-white.webp" width="24" alt=""/>
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