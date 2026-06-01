export default function Button({text, icon, variant, link}){
  return(
    <a href={link} id="hero-buy-btn" className={`btn btn-${variant} analytics_click`}>
      <span>{text}</span>
      <img src={icon} width="20" height="20" alt='Ilustrativo de botão' aria-hidden="true"/>
    </a>
  )
}