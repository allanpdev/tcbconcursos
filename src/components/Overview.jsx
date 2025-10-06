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
   & > #overview-container > h3{
      font-size: 19px;
      text-transform: uppercase;
      background: linear-gradient(to bottom, #2F70B5, #76C7FE);
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
   & > #overview-container > #cta-box{
      padding: 32px;
      border: 1px solid #1B58C9;
      border-radius: 20px;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 44px;
      text-align: center;
   }
   & > #overview-container > #cta-box > h3{
      text-transform: uppercase;
      font-size: 14px;
      font-weight: 500;
      color: #2b2b2b;
   }
   & > #overview-container > #cta-box > h2{
      background: linear-gradient(to right, #2F70B5, #76C7FE);
      background-clip: text;
      color: transparent;
      text-transform: uppercase;
      font-size: 34px;
      font-weight: 800;
      margin: 20px 0;
   }
   & > #overview-container > #cta-box > span{
      font-weight: 600;
      font-size: 18px;
      text-transform: uppercase;
      color: #000;
   }
   & > #overview-container > #cta-box > span > s{
      color: #3E97FF;
   }
   & > #overview-container > #cta-box > strong{
      font-size: 42px;
      font-weight: 900;
      color: #44D151;
   }
   & > #overview-container > #cta-box > button{
      background: #44D151;
      text-decoration: none;
      margin: 30px 0 20px 0;
   }
   & > #overview-container > #cta-box > button > a{
      color: #fff;
      text-decoration: none;
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

            <div id="cta-box">
               <h3>🚨Oferta por tempo limitado🚨</h3>
               <h2>Aproveite o desconto!</h2>

               <span>De <s>R$ 34,90</s> por: </span>
               <strong>R$ 22,90</strong>

               <button className="btn" data-analytics-event>
                  <a href="/checkout">Comprar agora</a>
                  <Image src={"/icons/arrow-right-white.svg"} width={11} height={20} alt='Ilustrativo de botão'/>
               </button>

               <Image src={"/images/satisfaction.png"} width={321} height={46}/>
            </div>
         </div>
      </OverviewSection>
   )
}