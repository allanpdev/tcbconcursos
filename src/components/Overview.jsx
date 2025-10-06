import Image from "next/image";
import styled from 'styled-components'

const OverviewSection = styled.section`
   &{
      background: #ffffff;
   }
   & > #overview-container{
      padding: 32px 24px;
      display: flex;
      flex-direction: column;
      align-items: center;
   }
   & > #overview-container > button{
      background: linear-gradient(to right, #004ea7, var(--destaque), #004da5);
      margin: 32px 0;
   }
   & > #overview-container > h3{
      font-size: 21px;
      text-transform: uppercase;
      font-weight: 600;
      background: linear-gradient(to bottom, #2f3cb5, #36afff);
      background-clip: text;
      color: transparent;
      margin: 24px 0 32px 0;
   }
   & > #overview-container > #overview-box-container{
      display: flex;
      flex-direction: column;
      gap: 15px;
      width: 100%;
   }
   & > #overview-container > #overview-box-container > .overview-box{
      display: flex;
      align-items: center;
      gap: 8px;
   }
   & > #overview-container > #overview-box-container > .overview-box > img{
      width: 25px;
      height: 25px;
   }
   & > #overview-container > #overview-box-container > .overview-box > span{
      font-size: 18px;
      font-weight: 500;
      color: #0b0430;
   }



   #pricing{
      text-align: center;
      margin: 32px 0;
   }
   #pricing > h3{
      font-size: 18px;
      font-weight: 500;
      color: #FF3D67;
   
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
      font-size: 64px;
      font-weight: 700;
   }




   #pix{
      border: 1px solid #4DB6AC;
      border-radius: 12px;
      width: 100%;
      padding: 32px;
      display: flex;
      flex-direction: column;
      gap: 28px;
   }
   #pix-heading{
      display: flex;
      align-items: center;
      gap: 7px;
   }
   #pix-heading > h3{
      font-weight: 550;
      font-size: 18px;
   }
   #pix-box-container{
      display: flex;
      flex-direction: column;
      gap: 6px;
   }
   .pix-box{
      display: flex;
      justify-content: space-between;
   }
   .pix-box > strong{
      color: #44a097;
      font-weight: 700;
   }
   #pix-30-off{
      background: #4DB6AC;
      width: fit-content;
      padding: 4px 28px;
      border-radius: 50px;
      color: #ffffff;
      text-transform: uppercase;
      font-weight: 600;
      place-self: flex-end;
   }
`

export default function Overview(){
   return(
      <OverviewSection>
         <div id="overview-container">
            <Image src={'/images/apostila.webp'} width={230} height={230} alt="Foto da apostila Técnico do Seguro Social"/>

            <h3>Conteúdo da apostila:</h3>

            <div id="overview-box-container">
               <div className="overview-box">
                  <Image src={'/images/checked.png'} width={30} height={30} alt="Ícone checklist"/>
                  <span>Língua Portuguesa</span>
               </div>

               <div className="overview-box">
                  <Image src={'/images/checked.png'} width={30} height={30} alt="Ícone checklist"/>
                  <span>Ética no Serviço Público</span>
               </div>

               <div className="overview-box">
                  <Image src={'/images/checked.png'} width={30} height={30} alt="Ícone checklist"/>
                  <span>Noções de Direito Constitucional</span>
               </div>

               <div className="overview-box">
                  <Image src={'/images/checked.png'} width={30} height={30} alt="Ícone checklist"/>
                  <span>Raciocínio Lógico-Matemático</span>
               </div>

               <div className="overview-box">
                  <Image src={'/images/checked.png'} width={30} height={30} alt="Ícone checklist"/>
                  <span>Regime Jurídico Único</span>
               </div>

               <div className="overview-box">
                  <Image src={'/images/checked.png'} width={30} height={30} alt="Ícone checklist"/>
                  <span>Conhecimentos Específicos</span>
               </div>               
            </div>

            

            <div id="pricing">
               <h3>2x de R$15,90 ou</h3>
               <div id="price">
                  <span>R$</span>
                  <strong>34,90</strong>
               </div>
            </div>

            <div id="pix">
               <div id="pix-heading">
                  <Image src={"/images/pix.png"} width={33} height={30} alt="Ícone PIX"/>
                  <h3>Pix</h3>
               </div>

               <div id="pix-box-container">
                  <div className="pix-box">
                     <span>Taxa:</span>
                     <strong>0,00</strong>
                  </div>

                  <div className="pix-box">
                     <span>Aprovação:</span>
                     <strong>Imediata</strong>
                  </div>
               </div>

               <div id="pix-30-off">
                  <span>30% off</span>
               </div>
            </div>

            <button className="btn" data-analytics-event>
               <a href="/checkout">Comprar agora</a>
               <Image src={"/icons/arrow-right-white.svg"} width={11} height={20} alt='Ilustrativo de botão'/>
            </button>
         </div>
      </OverviewSection>
   )
}