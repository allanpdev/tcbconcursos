export default function Button({text, icon, variant, link, outline}){
  return(
    <a href={link} className={`btn btn-${variant} ${outline} analytics_click`}>
      <span>{text}</span>
      <img src={icon} width="20" height="20" alt='Ilustrativo de botão' aria-hidden="true"/>
    </a>
  )
}