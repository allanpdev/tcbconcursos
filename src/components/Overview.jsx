import Image from "next/image";
import styled from 'styled-components'

const OverviewSection = styled.section`
   &{
      background: #ffffff;
   }
   #overview-container{
      padding: 32px 24px;
      display: flex;
      flex-direction: column;
      align-items: center;
   }
   #overview-container > button{
      background: linear-gradient(to right, #004ea7, var(--destaque), #004da5);
   }
   #overview-container > h3{
      font-size: 18.5px;
      text-transform: uppercase;
      font-weight: 650;
      background: linear-gradient(to bottom, #2f3cb5, #36afff);
      background-clip: text;
      color: transparent;
      margin: 24px 0 42px 0;
   }



   #checklist-container{
      display: flex;
      flex-direction: column;
      gap: 15px;
      width: 100%;
      margin-left: 22px;
   }
   .checklist{
      display: flex;
      align-items: center;
      gap: 8px;
   }
   .checklist > img{
      width: 22px;
      height: 22px;
   }
   .checklist > span{
      font-size: 17px;
      font-weight: 450;
      color: #1c1346;
   }

   
   #price{
      display: flex;
      align-items: center;
      gap: 6px;
   }
   #price > span{
      font-size: 20px;
      font-weight: 600;
   }
   #price > strong{
      font-size: 52px;
      margin-top: 4px;
      font-weight: 750;
   }




   #overview-pricing{
      border: 1px solid #0059ff;
      border-radius: 24px;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 32px 20px 42px 20px;
      margin: 40px 0 32px 0;
   }
   #overview-pricing > img{
      margin-bottom: 20px;
   }
   #overview-pricing > h4{
      font-size: 15px;
      font-weight: 500;
      margin: 6px 0 16px 0;
      color: #000;
      font-weight: 400;
      place-self: flex-start;
      margin-left: 20px;
   }
   #overview-pricing > h3{
      font-size: 16px;
      font-weight: 500;
      color: #000;
   }
   #overview-pricing > h3 > s{
      color: #006eff;
   }



   #payment-container{
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 12px;
   }
   .payment{
      border-bottom: 1px solid #dadada;
      padding: 24px 18px;
      display: flex;
      align-items: center;
      justify-content: space-between;
   }
   .payment-heading{
      display: flex;
      align-items: center;
      gap: 8px;
   }
`

export default function Overview(){
   return(
      <OverviewSection>
         <div id="overview-container">
            <Image src={'/images/apostila.webp'} width={190} height={190} alt="Foto da apostila Técnico do Seguro Social"/>

            <h3>Conteúdo da apostila:</h3>

            <div id="checklist-container">
               <div className="checklist">
                  <Image src={'/images/checked.png'} width={30} height={30} alt="Ícone checklist"/>
                  <span>Língua Portuguesa</span>
               </div>

               <div className="checklist">
                  <Image src={'/images/checked.png'} width={30} height={30} alt="Ícone checklist"/>
                  <span>Ética no Serviço Público</span>
               </div>

               <div className="checklist">
                  <Image src={'/images/checked.png'} width={30} height={30} alt="Ícone checklist"/>
                  <span>Noções de Direito Constitucional</span>
               </div>

               <div className="checklist">
                  <Image src={'/images/checked.png'} width={30} height={30} alt="Ícone checklist"/>
                  <span>Raciocínio Lógico-Matemático</span>
               </div>

               <div className="checklist">
                  <Image src={'/images/checked.png'} width={30} height={30} alt="Ícone checklist"/>
                  <span>Regime Jurídico Único</span>
               </div>

               <div className="checklist">
                  <Image src={'/images/checked.png'} width={30} height={30} alt="Ícone checklist"/>
                  <span>Conhecimentos Específicos</span>
               </div>
            </div>

            <div id="overview-pricing">
               {/* <Image src={"/images/checked-square.png"} width={70} height={56} alt="Check"/> */}

               <h3>De <s>R$54,87</s> por:</h3>

               <div id="price">
                  <span>R$</span>
                  <strong>34,90</strong>
               </div>

               <h4>Pague com:</h4>

               <div id="payment-container">
                  <div className="payment">
                     <div className="payment-heading">
                        <Image src={"/images/pix.png"} width={24} height={24} alt="Pix"/>
                        <span>Pix</span>
                     </div>

                     <input type="radio" />
                  </div>

                  <div className="payment">
                     <div className="payment-heading">
                        <Image src={"/images/card.png"} width={24} height={18} alt="Pix"/>
                        <span>Cartão de crédito</span>
                     </div>

                     <input type="radio" />
                  </div>

                  <div className="payment">
                     <div className="payment-heading">
                        <Image src={"/images/apple.png"} width={24} height={26} alt="Pix"/>
                        <span>Apple Pay</span>
                     </div>

                     <input type="radio" />
                  </div>

                  <div className="payment">
                     <div className="payment-heading">
                        <Image src={"/images/boleto.png"} width={24} height={24} alt="Pix"/>
                        <span>Boleto</span>
                     </div>

                     <input type="radio" />
                  </div>
               </div>
            </div>            

            <button className="btn" data-analytics-event>
               <a href="/checkout">Garantir oferta</a>
               <Image src={"/icons/arrow-right-white.svg"} width={9} height={16} alt='Ilustrativo de botão'/>
            </button>
         </div>
      </OverviewSection>
   )
}