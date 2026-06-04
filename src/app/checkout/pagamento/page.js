"use client"
import './style.css'
import {Payment, initMercadoPago} from '@mercadopago/sdk-react'
import ProductCard from '../components/product_card/ProductCard'

initMercadoPago('APP_USR-35cc4167-0914-4ac9-9900-defefbd12680', {locale: 'pt-BR'})
console.log(Payment)
export default function Step2(){
  const initialization = {
    amount: 19.90,
    payer: {
      firstName: 'Allan',
      lastName: 'Pires',
      email: 'aa@gmail.com'
    }
  }

  const customization = {
    visual: {
      hideFormTitle: true,
      style: {
        theme: "default",
        customVariables:{
          textPrimaryColor: '#ffffff',
          formBackgroundColor: "#fffff00",
          outlinePrimaryColor: '',
          outlineSecondaryColor: 'rgba(255,255,255,0.1)',
          baseColor: 'darkcyan',
          formPadding: ''
        }
      },
    },
    paymentMethods: {
      creditCard: 'all',
      ticket: 'all',
      bankTransfer: 'all',
      maxInstallments: 1
    }
  }

  const onSubmit = async ({selectedPaymentMethod, formData}) => {
    const response = await fetch('/api/process-payment', {
      method: 'POST',
      header: {'Content-Type': 'application/json'},
      body: JSON.stringify(formData)
    })
    return response.json()
  }
  const onError = (error) => {console.error(error)}
  const onReady = () => {}
  return(
    <div id="second-step" className="checkout-step">
      <div style={{padding: '24px 24px 0 24px'}}>
        <ProductCard/>
        <span className="slide-down">Faça o pagamento com:</span>
      </div>
        
      <Payment initialization={initialization} customization={customization} onSubmit={onSubmit} onError={onError} onReady={onReady}/>
    </div>
  )
}