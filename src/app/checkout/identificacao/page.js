"use client"
import './style.css'
import {useState} from 'react'
import {useRouter} from 'next/navigation'
import ProductCard from '../components/product_card/ProductCard'
import Button from '../components/button/Button'
import sendUserData from './userInfo'

function maskPhone(v){
  const digits = v.replace(/\D/g, "").slice(0, 11)
  if(digits.length <= 2) return digits.length ? `(${digits}` : ""
  if(digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2, 3)}${digits.slice(3)}`
  if(digits.length <= 11) return `(${digits.slice(0, 2)}) ${digits.slice(2, 3)}${digits.slice(3, 7)}-${digits.slice(7)}`
}
function validateName(v){
  if(!v.trim()) return "Campo obrigatório"
  if(v.trim().length < 3) return "Nome muito curto"
  if(!/^[a-zA-ZÀ-ÿ\s]+$/.test(v)) return "Apenas letras e espaços"
  return null
}
function validateEmail(v){
  if(!v.trim()) return "Campo obrigatório"
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) return "Email inválido"
  return null
}
function validatePhone(v){
  const digits = v.replace(/\D/g, "")
  if(!digits) return "Campo obrigatório"
  if(digits.length < 11) return "Telefone inválido"
  return null
}

export default function Step1(){
  const router = useRouter()
  const [values, setValues] = useState({name: "", email: "", phone: ""})
  const [touched, setTouched] = useState({})

  const errors = {
    name: validateName(values.name),
    email: validateEmail(values.email),
    phone: validatePhone(values.phone)
  }

  const isValid = !errors.name && !errors.email && !errors.phone

  const handleChange = (e) => {
    const {name, value} = e.target
    setValues((prev) => ({
      ...prev,
      [name]: name === 'phone' ? maskPhone(value) : value
    }))
  }
  const handleFocus = (e) => {
    setTouched((prev) => ({
      ...prev,
      [e.target.name]: false
    }))
  }
  const handleBlur = (e) => {
    setTouched((prev) => ({
      ...prev,
      [e.target.name]: true
    }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setTouched({name: true, email: true, phone: true})
    if(!isValid) return
    sendUserData(values)
    router.push('/checkout/pagamento')
  }

  return(
    <div id="first-step" className="checkout-step">
      <ProductCard/>
  
      <form onSubmit={handleSubmit} className="identification">
        <span className="slide-down">Insira suas informações</span>
        <div className="input-container slide-down" id="input-name-container">
          <div className="input-field">
            <img src="/icons/fa-user.svg"/>
            <input type="text" value={values["name"]} placeholder="Nome / Sobrenome" name="name" id="name-input" className={`identification-input ${touched["name"] && errors.name ? "red-border" : ""}`} onChange={handleChange} onBlur={handleBlur} onFocus={handleFocus}/>
          </div>
          {touched["name"] && errors.name && (
            <div className="input-error-message">
              <span>{errors.name}</span>
            </div>
          )}
        </div>
        <div className="input-container slide-down" id="input-email-container">
          <div className="input-field">
            <img src="/icons/fa-envelope.svg"/>
            <input type="email" value={values["email"]} placeholder="Email" name="email" id="email-input" className={`identification-input ${touched["email"] && errors.email ? "red-border" : ""}`} onChange={handleChange} onBlur={handleBlur} onFocus={handleFocus}/>
          </div>
          {touched["email"] && errors.email && (
            <div className="input-error-message">
              <span>{errors.email}</span>
            </div>
          )}
        </div>
        <div className="input-container slide-down" id="input-phone-container">
          <div className="input-field">
            <img src="/icons/fa-phone.svg"/>
            <input type="tel" value={values["phone"]} placeholder="Telefone" name="phone" id="phone-input" className={`identification-input ${touched["phone"] && errors.phone ? "red-border" : ""}`} onChange={handleChange} onBlur={handleBlur} onFocus={handleFocus}/>
          </div>
          {touched["phone"] && errors.phone && (
            <div className="input-error-message">
              <span>{errors.phone}</span>
            </div>
          )}
        </div>
        <Button type='submit'/>
      </form>
    </div>
  )
}