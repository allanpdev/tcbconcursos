import Image from 'next/image'
import styled from 'styled-components'

const AboutSection = styled.section`
   &{
      background: #000;
      color: #fff;
   }
   & > #info-container{
      padding: 32px 32px 48px 32px;
   }
   & > #info-container > #description{
      padding: 20px;
      border: 1px solid #9D6F01;
      border-radius: 12px;
      text-align: center;
   }
   & > #info-container > #description span{
      font-size: 16px;
      line-height: 25px;
   }
   & > #info-container > h2{
      text-align: center;
      font-weight: bold;
      font-size: 18px;
      text-transform: uppercase;
      margin: 38px 0;
   }
   & > #info-container > #info-box-container{
      display: flex;
      flex-direction: column;
      gap: 24px;
   }
   & > #info-container > #info-box-container > .info-box{
      border: 1px solid rgba(255, 255, 255, 0.8);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding: 24px 0;
   }
   & > #info-container > #info-box-container > .info-box > h3{
      color: var(--destaque-secundario);
      font-weight: 700;
      font-size: 19px;
      margin: 8px 0 6px 0;
   }
   & > #info-container > #info-box-container > .info-box > span{
      color: #dedede;
      font-size: 16px;
      font-weight: 400;
   }
`

export default function About(){
   return(
      <AboutSection>
         <div id="info-container">
            <div id="description">
               <span>O concurso de nível médio para Técnico do Seguro Social está cada vez mais próximo de acontecer. Com o pedido já protocolado pelo INSS, o concurso aguarda autorização no MGISP, e a expectativa é de que o edital seja publicado ainda em 2025.</span>
            </div>

            <h2>Saiba mais sobre o Concurso</h2>

            <div id="info-box-container">
               <div className="info-box">
                  <Image src={"/icons/about/cargo.webp"} width={35} height={40} alt='Ícone ilustrativo'/>
                  <h3>Cargo</h3>
                  <span>Técnico do Seguro Social</span>
               </div>

               <div className="info-box">
                  <Image src={"/icons/about/salario-inicial.webp"} width={50} height={40} alt='Ícone ilustrativo'/>
                  <h3>Salário inicial</h3>
                  <span>R$ 6.596,09</span>
               </div>

               <div className="info-box">
                  <Image src={"/icons/about/abrangencia-vagas.webp"} width={50} height={40} alt='Ícone ilustrativo'/>
                  <h3>Abrangência das vagas</h3>
                  <span>Nacional</span>
               </div>

               <div className="info-box">
                  <Image src={"/icons/about/exigencia-concurso.webp"} width={40} height={40} alt='Ícone ilustrativo'/>
                  <h3>Exigência do concurso</h3>
                  <span>Nível Médio</span>
               </div>

               <div className="info-box">
                  <Image src={"/icons/about/previsao-abertura.webp"} width={40} height={40} alt='Ícone ilustrativo'/>
                  <h3>Previsão de abertura</h3>
                  <span>Concurso solicitado</span>
               </div>
            </div>
         </div>
      </AboutSection>
    )
}