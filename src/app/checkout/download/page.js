"use client"
import './style.css'
import {initMercadoPago, StatusScreen} from '@mercadopago/sdk-react'
import {useState} from 'react'
import {useSearchParams} from 'next/navigation'
import Skeleton from '../components/Skeleton'

initMercadoPago('TEST-5af2094b-0f07-4c2a-9b1d-9b084c88073d', {locale: 'pt-BR'})

export default function Step3(){
  const [isLoading, setIsLoading] = useState(true)
  const searchParams = useSearchParams()
  const paymentId = searchParams.get('paymentId')

  const customization = {
    visual: {
      style: {
        customVariables: {
          textPrimaryColor: 'gray',
        }
      }
    }
  }
  const onError = (error) => console.error(error)
  const onReady = () => setIsLoading(false)
  return(
    <div className="step" id="step-3" style={{padding: '40px 32px 32px 32px'}}>
      {/* <div className="illustrative slide-left">
        <div className="circle"></div>
        <img src="/images/mobile.png" alt="" width="170"/>
      </div>
      
      <h3 className="slide-left">Seu pagamento foi recebido <br/> com sucesso!</h3>
      <p className="slide-left">O material já está disponível para download e uma cópia do acesso também foi enviada para seu email.</p>
      <button className="btn slide-left"><i className="fa-solid fa-download"></i> Fazer Download</button>
      <a href="" className="slide-left">
        <img src="/icons/ui/gmail.webp" alt="" width="20"/>
        Acessar Gmail
      </a> */}
      {isLoading && (
        <Skeleton/>
      )}
      <div style={{display: isLoading ? 'none': 'block'}}>
        <StatusScreen customization={customization} initialization={{paymentId}} onError={onError} onReady={onReady}/>
      </div>
    </div>
  )
}