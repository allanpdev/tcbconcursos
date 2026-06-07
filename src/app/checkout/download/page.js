"use client"
import './style.css'
import {initMercadoPago, StatusScreen} from '@mercadopago/sdk-react'
import {useEffect, useState} from 'react'
import Skeleton from '../components/Skeleton'

initMercadoPago('TEST-5af2094b-0f07-4c2a-9b1d-9b084c88073d', {locale: 'pt-BR'})

export default function Step3(){
  const [isLoading, setIsLoading] = useState(true)
  const [paymentId, setPaymentId] = useState(null)

  useEffect(() => {
    if(!paymentId) return

    const interval = setInterval(async () => {
      const res = await fetch(`/api/payment/${paymentId}`)
      const data = await res.json()
      if(data.status === 'approved'){
        clearInterval(interval)
        router.push('/obrigado')
      }
      if(data.status === 'rejected'){
        clearInterval(interval)
        localStorage.removeItem('paymentId')
        router.push('/checkout/pagamento')
      }
    }, 5000)
  }, [paymentId])

  useEffect(() => {
    const id = localStorage.getItem('paymentId')
    console.log(id)
    setPaymentId(id)
  }, [])

  const customization = {
    visual: {
      style: {
        customVariables: {
          textPrimaryColor: 'gray',
        }
      }
    },
    backUrls: {
      
    }
  }
  const onError = (error) => console.error(error)
  const onReady = () => {
    console.log('statuscreen onready chamado')
    setIsLoading(false)
  }
  return(
    <div className="step" id="step-3" style={{padding: '40px 32px 32px 32px'}}>
      {isLoading && (
        <Skeleton/>
      )}
      <div style={{display: isLoading ? 'none': 'block'}}>
        <StatusScreen customization={customization} initialization={{paymentId}} onError={onError} onReady={onReady}/>
      </div>
    </div>
  )
}