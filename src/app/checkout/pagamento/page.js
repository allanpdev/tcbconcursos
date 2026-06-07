"use client"
import './style.css'
import {useState} from 'react'
import {useRouter} from 'next/navigation'
import {initMercadoPago, Payment, StatusScreen} from '@mercadopago/sdk-react'
import ProductCard from '../components/product_card/ProductCard'

initMercadoPago('TEST-5af2094b-0f07-4c2a-9b1d-9b084c88073d', {locale: 'pt-BR'})

export default function Step2(){
  const [paymentId, setPaymentId] = useState(null)

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
          
          
          
          baseColor: 'darkcyan',
          inputBackgroundColor: 'rgba(255,255,255,0.00)'
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
    const router = useRouter()
    return new Promise((resolve, reject) => {
      fetch('/api/process_payment', {
        method: 'POST',
        header: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData)
      })
        .then((res) => res.json())
        .then((res) => {
          resolve()
          router.push(`/checkout/download?paymentId=${res.id}`)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
  const onError = (error) => {console.error(error)}
  const onReady = () => {}
  return(
    <div id="second-step" className="checkout-step">
      <div style={{padding: '24px 24px 0 24px'}}>
        <ProductCard/>
        <span className="slide-down">Faça o pagamento com:</span>
      </div>
      <div style={{padding: '24px'}}>
        <Payment initialization={initialization} customization={customization} onSubmit={onSubmit} onError={onError} onReady={onReady}/>
      </div>
      {!paymentId ? (
        ""
      ) : (
        ""
      )}
    </div>
  )
}