import styled from 'styled-components'

const Div = styled.div`
   &{
      background: url('/images/garantia.png');
   }
   & > .guarantee-container{
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding: 60px 24px;
      color: #fff;
      gap: 18px;
   }
   & > .guarantee-container > h2{
      font-size: 22px;
      font-weight: 600;
      text-transform: uppercase;
      font-family: 'Nunito';
      font-weight: 750;
   }
   & > .guarantee-container > p{
      font-size: 19px;
      font-weight: 400;
      line-height: 25px;
      text-align: center;
      font-family: 'Nunito';
      color: #ececec;
   }
`

export default function Guarantee(){
   return(
      <Div>
         <div className='guarantee-container'>
            <img src="/images/selo.png" alt="" />
            <h2>Garantia de 7 dias</h2>
            <p>Se por algum motivo, você não estiver satisfeito com o nosso produto, basta com que solicite um reembolso, e a nossa equipe irá restituir 100% do seu dinheiro!</p>
         </div>
      </Div>
   )
}