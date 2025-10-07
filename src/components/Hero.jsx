import Image from 'next/image'
import styled from 'styled-components'

const MainTag = styled.main`
   &{
      padding: 36px 24px 0 24px;
      background-image: url('/images/backgrounds/bg-mobile.webp');
      background-repeat: no-repeat;
      background-position: center;
      background-size:cover;
      position: relative;
      color: #fff;
   }
   &::after{
      content: "";
      position: absolute;
      background: linear-gradient(to bottom, #0009261e, rgba(0,0,0,1) 100%);
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      z-index: 1;
   }
   & > #hero-container{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      position: relative;
      z-index: 2;
   }
   & > #hero-container > #hero-content{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
   }
   & > #hero-container > #hero-content > img{
      width: 200px;
      height: auto;
   }
   & > #hero-container > #hero-content > h1{
      font-weight: 600;
      font-size: 20.5px;
      margin: 18px 0 20px 0;
      line-height: 32px;
   }
   & > #hero-container > #hero-content > p{
      font-weight: 300;
      font-size: 17px;
      line-height: 27px;
   }
   & > #hero-container > #hero-price{
      display: flex;
      flex-direction: column;
      margin: 28px 0;
   }
   & > #hero-container > #hero-price > span{
      text-transform: uppercase;
      font-weight: 400;
      font-size: 17px;
   }
   & > #hero-container > #hero-price > span > s{
      color: var(--destaque)
   }
   & > #hero-container > #hero-price > strong{
      margin-top: 0px;
      font-weight: 850;
      font-size: 43px;
   } 
   & > #hero-container > #hero-cta{
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      gap: 24px;
   }
   & > #hero-container > #hero-cta > a{
      background: linear-gradient(to right, #00336E, var(--destaque), #003471);
      max-width: 330px;
   }
   & > #hero-container > #hero-cta > small{
      font-size: 14px;
      font-weight: 500;
      text-transform: uppercase;
   }
`

export default function Hero(){
   return(
      <MainTag>
         <div id="hero-container">
            <div id="hero-content">
               <Image aria-hidden src="/images/apostila.webp" alt="File icon" width={200} height={20}/>
               <h1>📱Apostila para Concurso INSS 2025: conquiste sua vaga de Técnico do Seguro Social.</h1>
               <p>Você sonha em conquistar estabilidade financeira, salário atrativo e benefícios garantidos no serviço público?
O concurso do INSS é uma das oportunidades mais disputadas do país — e quem começa a se preparar com antecedência larga na frente.</p>
            </div>

            <div id="hero-price">
               <span>De <s>R$34,90</s> por:</span>
               <strong>R$22,90</strong>
            </div>

            <div id='hero-cta'>
               <a href="/checkout" id="btn-1" className="btn" data-analytics-event>
                  <span>Comprar agora</span>
                  <Image src={"/icons/arrow-right-white.svg"} width={9} height={15} alt='Ilustrativo de botão'/>
               </a>

               <small>🚨 30% off até 15/07/2025 🚨</small>
            </div>
         </div>
      </MainTag>
   )
}