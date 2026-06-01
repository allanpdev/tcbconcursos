export default function Button({text, icon, variant}){
  return(
    <a href="/checkout.html" id="hero-buy-btn" className={`btn btn-${variant} analytics_click`}>
      <span>{text}</span>
      <img src={icon} width="20" height="20" alt='Ilustrativo de botão' aria-hidden="true"/>
    </a>
  )
}