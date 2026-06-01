import './offer.css'

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

        <div id="product-purchase">
          <div id="product-pricing">
            <span id="access-span">Acesso imediato</span>

            <div id="original-price">
              <span style={{fontWeight: 700}}>Por Apenas</span>
            </div>
            <div id="current-price">
              <span>R$</span>
              <strong>19,90</strong>
            </div>
          </div>

          <div id="payment">
            <h4>Garanta agora sua apostila!</h4>
            <div id="payment-methods">
              <label className="payment-method analytics_toggle" id="pix-selected">
                <div className="payment-method-container">
                  <img src="/icons/payment-pix.webp" width="30" height="30" alt="Pix"/>
                  <span>Pix</span>
                </div>
                <input type="radio" name="payment" className="payment-method-input" id="pix-radio"/>
              </label>

              <label className="payment-method analytics_toggle" id="credit-card-selected">
                <div className="payment-method-container">
                  <img src="/icons/payment-credit-card.webp" width="26" alt="Pix"/>
                  <span>Cartão</span>
                </div>
                <input type="radio" name="payment" className="payment-method-input" id="apple-pay-radio"/>
              </label>

              <label className="payment-method analytics_toggle" id="bill-selected">
                <div className="payment-method-container">
                  <img src="/icons/payment-bill.webp" width="26" alt="Pix"/>
                  <span>Boleto</span>
                </div>
                <input type="radio" name="payment" className="payment-method-input" id="bill-radio"/>
              </label>
            </div>
          </div>
        </div>
        <a style={{background: '#28ac96'}} href="/checkout.html" id="payment-buy-btn" className="btn analytics_click">
          <img src="/icons/fa-laptop.svg" width="25" height="25" alt='Ilustrativo de botão'/>
          <span style={{fontSize: '15px', fontFamily: 'Inter'}}>Acessar material</span>
        </a>
      </div>
    </section>
  )
}