import './offer.css'
import Button from '@/app/components/Button'

export default function Offer(){
  return(
    <section id="offer" className="section_observer">
      <div id="offer-container">
        <h3>O que você irá receber:</h3>
        <div id='offer-box-container'>
          <div className='offer-box'>
            <img src='/icons/offer-apostila.svg' width="82" height="54" alt='Ilustrativo oferta'/>
            <h4>Apostila Digital</h4>
            <p>Receba a apostila completa em PDF diretamente no seu email, com envio imediato após o pagamento</p>
          </div>
          <div className='offer-box'>
            <img src='/icons/offer-gabarito.svg' width="45" height="60" alt='Ilustrativo oferta'/>
            <h4>1.500 Questões Comentadas</h4>
            <p>Receba um bônus com 1.500 questões de concursos anteriores, incluindo gabarito e comentários explicativos.</p>
          </div>
        </div>
      </div>
      <div id="final-cta">
        <img src="/images/woman2.png" width="170" alt=""/>
        <h2>Você já tem tudo que precisa para começar</h2>
        <p>Agora, é só dar o próximo passo</p>
        <Button text="Inicie sua preparação" icon="/icons/fa-arrow-right.svg" variant="style3" link="/checkout"/>
      </div>
    </section>
  )
}