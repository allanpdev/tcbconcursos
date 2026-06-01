"use client"
import './style.css'
import {useState} from 'react'
import ProductCard from '../components/product_card/ProductCard'
import Button from '../components/button/Button'

export default function Step1(){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  console.log(name, email, phone)

  return(
    <div id="first-step" className="checkout-step">
      <ProductCard/>
  
      <div className="identification">
        <span className="slide-down">Insira suas informações</span>
        <div className="input-container slide-down" id="input-name-container">
          <div className="input-field">
            <i className="fa-regular fa-user"></i>
            <input type="text" placeholder="Nome e sobrenome" name="step1-name" id="name-input" className="identification-input" onChange={(e) => setName(e.target.value)}/>
          </div>
          <div className="input-error-message">
            <span></span>
          </div>
        </div>
        <div className="input-container slide-down" id="input-email-container">
          <div className="input-field">
            <i className="fa-regular fa-envelope"></i>
            <input type="email" placeholder="Email" name="step1-email" id="email-input" className="identification-input" onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className="input-error-message">
            <span></span>
          </div>
        </div>
        <div className="input-container slide-down" id="input-phone-container">
          <div className="input-field">
            <i className="fa-solid fa-phone"></i>
            <input type="tel" placeholder="(00) 00000-0000" name="step1-phone" id="phone-input" className="identification-input" onChange={(e) => setPhone(e.target.value)}/>
          </div>
          <div className="input-error-message">
            <span></span>
          </div>
        </div>
        <Button route="/checkout/pagamento" click={() => console.log('teste')}/>
      </div>
    </div>
  )
}