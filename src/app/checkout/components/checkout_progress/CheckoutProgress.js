"use client"
import {usePathname} from 'next/navigation'
import './checkout-progress.css'

export default function CheckoutProgress(){
  const pathname = usePathname()
  let currentStep = 1
  if(pathname === '/checkout/pagamento') currentStep = 2
  else if(pathname === '/checkout/download') currentStep = 3
  const progressWidth = `${((currentStep - 1) / 2) * 100}%`

  return(
    <div className="checkout-indexes">
      <div className="checkout-indexes-container">
        <div className={`checkout-index ${currentStep >= 1 ? 'active' : ''}`}>
          <div>1</div>
          <span>Identificação</span>
        </div>
        <div className={`checkout-index ${currentStep >= 2 ? 'active' : ''}`}>
          <div>2</div>
          <span>Pagamento</span>
        </div>
        <div className={`checkout-index ${currentStep >= 3 ? 'active' : ''}`}>
          <div>3</div>
          <span>Download</span>
        </div>

        <div className="bar progress-bar" style={{ width: progressWidth}}></div>
        <div className="bar progress-track"></div>
      </div>
    </div>
  )
}