import Image from 'next/image'
import styled from 'styled-components'

const ReviewSection = styled.section`
   &{
      background-image: url('/images/backgrounds/bg-reviews.webp');
      background-position: center;
      background-size: cover;
      position: relative;
      color: #fff;
   }
   &::after{
      z-index: 1;
      background-image: linear-gradient(to bottom, rgb(0, 0, 0), rgba(0,0,0,0.2) 20%, rgb(0,0,0));
      content: "";
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      position: absolute;
   }
   & > #reviews-container{
      padding: 48px 32px 0 32px;
      position: relative;
      z-index: 2;    
   }
   & > #reviews-container > h3{
      font-weight: 700;
      font-size: 22px;
      text-align: center;
      line-height: 30px;
      z-index: 99;
      margin-bottom: 36px;
   }
   & > #reviews-container #slide-controls{
      display: flex;
      width: 100%;
      justify-content: end;
      gap: 32px;
      margin: 12px 0 24px;
      background: none;
      display: none;
   }
   & > #reviews-container #slide-controls > button{
      background: none;
      border: none;
   }
   & > #reviews-container #slide-controls > button > img{
      width: 25px;
      height: 40px;
   }
   & > #reviews-container #slide{
      display: flex;
      flex-direction: column;
      align-items: center;
      width:100%;
   }
   & > #reviews-container #slide #slide-container{
      border: 3px solid var(--destaque-secundario);
      border-radius: 10px;
      z-index: 24;
      max-width: 600px;
      display: flex;
      width: 100%;
   }
   & > #reviews-container #slide #slide-container > img{
      width: 100%;
      height: auto;
      border-radius: 10px;
   }
   & > #reviews-container #slide #slide-index{
      display: flex;
      justify-content: center;
      gap: 15px;
      margin: 32px 0;
   }
   & > #reviews-container #slide #slide-index .circle{
      width: 6px;
      height: 6px;
      background: #fff;
      border-radius: 50px;
   }
   & > #reviews-container #slide #slide-index .circle-active{
      background: var(--destaque-secundario);
   }       
`

export default function Reviews(){
   return(
      <ReviewSection>
         <div id="reviews-container">
            <h3>Resultados de alunos que <br/> seguiram a metodologia</h3>

            <div id="slide-controls">
               <button id='previous'>
                  <Image src={'/icons/arrow-left.svg'} width={25} height={30} alt='Botão para passar (slide anterior)'/>
               </button>

               <button id='next'>
                  <Image src={'/icons/arrow-right.svg'} width={25} height={30} alt='Botão para passar (próximo slide)'/>
               </button>
            </div>

            <div id="slide">
               <div id='slide-container'>
                  <Image src={'/images/reviews/1.webp'} width={368} height={545} alt='Depoimento de usuário'/>
               </div>

               <div id="slide-index">
                  <div className='circle circle-active'></div>
                  <div className='circle'></div>
                  <div className='circle'></div>
                  <div className='circle'></div>
                  <div className='circle'></div>
                  <div className='circle'></div>
               </div>
            </div>
         </div>
      </ReviewSection>
   )
}