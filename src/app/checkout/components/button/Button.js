import './button.css'

export default function Button({click, type}){
  return(
    <button type={type} onClick={click} className="btn-checkout">Avançar</button>
  )
}