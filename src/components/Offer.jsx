import Image from 'next/image'
import styled from 'styled-components'

const OfferSection = styled.section`
   &{
      background: #fff;
      color: #000;
   }
   & > #offer-container{
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 70px 32px 40px 32px;
      font-family: var(--font-nunito);
      position: relative;
      gap: 40px;
   }
   & > #offer-container > h3{
      font-size: 21px;
      font-weight: 650;
      text-transform: uppercase;
      text-align: center;
      color: #201201ff;
      font-family: 'Nunito';
      font-weight: 800;
   }
   & > #offer-container > #offer-box-container{
      font-family: 'Nunito';
      display: flex;
      flex-direction: column;
      gap: 32px;
   }
   & > #offer-container > #offer-box-container > .offer-box{
      background: #fff;
      border: 1px solid #f78c00ff;
      border-radius: 38px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 48px 24px;
      gap: 16px;
   }
   & > #offer-container > #offer-box-container > .offer-box > img{
      max-width: 120px;
   }
   & > #offer-container > #offer-box-container > .offer-box > h4{
      text-align: center;
      font-size: 20.5px;
      font-weight: 700;
   }
   & > #offer-container > #offer-box-container > .offer-box > p{
      font-size: 18.5px;
      font-weight: 400;
      color: #5e5e5eff;
      text-align: center;
      width: 100%;
      line-height: 23px;
   }
   #section-divider{
      position: absolute;
      top: -3px;
      border-radius: 0  0 0;
   }
`

export default function Offer(){
   return(
      <OfferSection>
         <div id='offer-container'>
            <Image src={"/icons/detail.svg"} width={110} height={42} id='section-divider' alt='Divisor de seção'/>

            <h3>O que você irá receber:</h3>

            <div id='offer-box-container'>
               <div className='offer-box'>
                  <Image src={'/icons/offer/1.svg'} width={82} height={54} alt='Ilustrativo oferta'/>
                  <h4>Apostila Digital</h4>
                  <p>Obtenha acesso à Apostila Técnico do Seguro Social por email, imediatamente após a compra. Enviaremos por email e por Whatsapp. imediatamente após a compra.</p>
               </div>

               <div className='offer-box'>
                  <Image src={'/icons/offer/2.svg'} width={70} height={60} alt='Ilustrativo oferta'/>
                  <h4>Mapa mental</h4>
                  <p>Obtenha acesso à Apostila Técnico do Seguro Social por email, imediatamente após a compra. Enviaremos por email e por Whatsapp imediatamente após a compra.</p>
               </div>

               <div className='offer-box'>
                  <Image src={'/icons/offer/3.svg'} width={45} height={60} alt='Ilustrativo oferta'/>
                  <h4>PDF Bônus (1.500 questões gabaritadas)</h4>
                  <p>Obtenha acesso à Apostila Técnico do Seguro Social por email, imediatamente após a compra. Enviaremos por email e por Whatsapp imediatamente após a compra.</p>
               </div>
            </div>
         </div>
      </OfferSection>
   )
}