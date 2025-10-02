import Image from 'next/image'
import styled from 'styled-components'
import {useState, useEffect} from 'react'

const TimerSection = styled.section`
   &{
      background-color: #000;
      color: #fff;
   }
   & > #offer-ending-container{
      padding: 64px 24px;
      position: relative;
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 32px;
   }
   & > #offer-ending-container > #offer-ending-divider{
      position: absolute;
      width: 100%;
      top: 0;
   }
   & > #offer-ending-container > h3{
      font-size: 20px;
      font-weight: 600;
      text-transform: uppercase;
   }
   & > #offer-ending-container #timer-container{
      display: flex;
      gap: 12px;
      width: 100%;
      justify-content: center;
   }
   .timer{
      width: 75px;
      height: 75px;
      background: conic-gradient(from 0deg, #F7AF00 0% 25%, #211D12 25% 100%);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
   }
   
   .black-circle{
      background: #000;
      position: absolute;
      width: 71px;
      height: 71px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
   }
   .black-circle > span{
      font-size: 32px;
      font-weight: 250;   
   }

   #progress{
      width: 220px;
      height: 2px;
      background: #211D12;
      border-radius: 500px;
   }
   #progress-bar{
      background-color: #F7AF00;
      width: 80%;
      height: 2px;
   }

   #section-divider{
      width: 40px;
      height: 40px;
      position: absolute;
      bottom: -15px;
      z-index: 99;
   }
`

export default function OfferEnding(){
   const data = new Date()

   const day = data.getDate()
   const hour = data.getHours()
   const minutes = data.getMinutes()
   const seconds = data.getSeconds()

   const [count, setCount] = useState(60)
   
   useEffect(() => {
      const intervalId = setInterval(() => {
         setCount(prevCount => {
            if(prevCount <= 0){
               clearInterval(intervalId)
               return 0
            }
            return prevCount - 1
         })
      }, 1000)

      return () => clearInterval(intervalId)
   })

   return(
      <TimerSection>
         <div id='offer-ending-container'>
            <Image src={"/images/divisor.png"} width={500} height={20} id='offer-ending-divider' alt='Divisor de seções'/>
            <h3>Oferta acabando em breve</h3>

            <div id='timer-container'>
               <div className="timer">
                  <div className='black-circle'>
                     <span id='day'>02</span>
                  </div>
               </div>

               <div className="timer">
                  <div className='black-circle'>
                      <span>08</span>
                  </div>
               </div>

               <div className="timer">
                  <div className='black-circle'>
                     <span>44</span>
                  </div>
               </div>

               <div className="timer">
                  <div className='black-circle'>
                     <span>{count.toString().padStart(2, '0')}</span>
                  </div>
               </div>
            </div>

            <div id="progress">
               <div id='progress-bar'></div>
            </div>
         </div>
      </TimerSection>
   )
}