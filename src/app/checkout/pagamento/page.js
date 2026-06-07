"use client"
import './style.css'
import {useState} from 'react'
import {useRouter} from 'next/navigation'
import {initMercadoPago, Payment} from '@mercadopago/sdk-react'
import ProductCard from '../components/product_card/ProductCard'
import Skeleton from '../components/Skeleton'

initMercadoPago('APP_USR-76b08117-c6a6-4c50-b74e-bd5d309c58c1', {locale: 'pt-BR'})

export default function Step2(){
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

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
    return new Promise((resolve, reject) => {
      fetch('/api/process_payment', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData)
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res)
          localStorage.setItem('paymentId', res.id)
          router.push('/checkout/download')
          resolve()
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
  const onError = (error) => {console.error(error)}
  const onReady = () => setIsLoading(false)
  return(
    <div id="second-step" className="checkout-step">
      <div style={{padding: '24px 24px 0 24px'}}>
        <ProductCard/>
        <span className="slide-down">Escolha um método de pagamento:</span>
      </div>
      <div style={{padding: '24px'}}>
        {isLoading && (
          <Skeleton/>
        )}
        <div style={{display: isLoading ? 'none': 'block'}}>
          <Payment initialization={initialization} customization={customization} onSubmit={onSubmit} onError={onError} onReady={onReady}/>
        </div>
      </div>
    </div>
  )
}