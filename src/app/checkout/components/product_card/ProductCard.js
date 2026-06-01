import './product-card.css'

export default function ProductCard(){
  return(
    <div className="product-card">
      <img src="/images/apostila.webp" width="75" alt=""/>

      <div className="morphism-effect">
        <img src="/images/5.jpg" width="300" alt=""/>
      </div>
      <div className="product-card-summary">
        <div className="product-card-price">
          <h3>Total a pagar: </h3>
          <span>R$19,90</span>
        </div>
        <div className="product-card-details">
          <span>Apostila Preparatória</span>
          <div className="product-card-tag">+ PDF bônus</div>
        </div>
      </div>
    </div>
  )
}