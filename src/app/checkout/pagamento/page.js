"use client"
import './style.css'
import {useState, useEffect} from 'react'
import {initMercadoPago} from '@mercadopago/sdk-react'
import Button from '../components/button/Button'
import ProductCard from '../components/product_card/ProductCard'
import pix from './pix'

initMercadoPago('APP_USR-35cc4167-0914-4ac9-9900-defefbd12680')

export default function Step2(){
  const [paymentMethod, setPaymentMethod] = useState("")
  const [pixData, setPixData] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = async (e) => {
    const inputId = e.target.id
    setPaymentMethod(inputId)
    
    if(inputId === "pix"){
      setLoading(true)
      try{
        const response = await pix()
        setPixData(response.transactions.payments[0].payment_method)
      }catch(err){
        console.log('deu erro')
      }finally{
        setLoading(false)
      }
    }
  }
  return(
    <div id="second-step" className="checkout-step">
    
      <ProductCard/>
      <div className="payment-options">
        <span className="slide-down">Faça o pagamento com:</span>
        
        <div className="payment-option">
          <label htmlFor="pix">
            <img src="/icons/payment-pix.webp" width="26" height="24" alt=""/>
            <span>Pix</span>
            <input type="radio" id="pix" name="payment-option" onChange={handleChange}/>
          </label>

          <div className={`expand ${paymentMethod === "pix" ? 'open' : ""}`}>
            <div className="expand-content">
              <div>
                {loading ? (<div id="loading">Gerando QR Code...</div>) : pixData && (
                <div className="pix-content">
                  <div className="pix-image">
                    <img src={`data:image/png;base64,${pixData.qr_code_base64}`} alt="QR Code Pix" id="qrcode_image" width="120" height="120"/>
                    <span>Copie o código Pix abaixo ou escaneie o QR Code para fazer o pagamento</span>
                  </div>

                  <button className="pix-copy">
                    <span id="pix-copy-text">{pixData.qr_code}</span>
                    <img src="/icons/fa-copy.svg" width="20"/>
                  </button>
                </div>
              )}
              </div>
            </div>
          </div>
        </div>

        <div className="payment-option" id="credit-card-option">
          <label htmlFor="credit-card">
            <img src="/icons/credit-card.svg" width="27" height="27"/>
            <span>Cartão</span>
            <input type="radio" width="30" id="credit-card" name="payment-option" onChange={handleChange}/>
          </label>

          {paymentMethod === "credit-card" && (
            <div className="expand" style={{height: 'fit-content'}}>
              asdf
            </div>
          )}
        </div>

        <div className="payment-option">
          <label htmlFor="bill">
            <img src="/icons/payment-bill-white.webp" width="26" alt=""/>
            <span>Boleto</span>
            <input type="radio" id="bill" name="payment-option" onChange={handleChange}/>
          </label>

          {paymentMethod === "bill" && (
            <div className="expand" style={{height: 'fit-content'}}>
              asdf
            </div>
          )}
        </div>
        <Button type="button" click={() => console.log('teste')}/>
      </div>
    </div>
  )
}