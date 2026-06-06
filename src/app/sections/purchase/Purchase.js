export default function Purchase(){
  return(
    <div id="purchase" style={{padding: '24px 24px 48px 24px'}}>
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
            <h4>Escolha um método de pagamento:</h4>
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
        {/* <a style={{background: '#28ac96'}} href="/checkout.html" id="payment-buy-btn" className="btn analytics_click">
          <img src="/icons/fa-laptop.svg" width="25" height="25" alt='Ilustrativo de botão'/>
          <span style={{fontSize: '15px', fontFamily: 'Inter'}}>Acessar material</span>
        </a> */}
    </div>
  )
}