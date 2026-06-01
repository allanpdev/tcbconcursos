import './button.css'
import Link from 'next/link'

export default function Button({route, click}){
  return(
    <Link href={route} onClick={click} className="btn-checkout">Avançar</Link>
  )
}