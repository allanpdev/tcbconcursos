export default function Obrigado(){
  return(
    <div>
      <div className="illustrative slide-left">
        <div className="circle"></div>
        <img src="/images/mobile.png" alt="" width="170"/>
      </div>
      
      <h3 className="slide-left">Seu pagamento foi recebido <br/> com sucesso!</h3>
      <p className="slide-left">O material já está disponível para download e uma cópia do acesso também foi enviada para seu email.</p>
      <button className="btn slide-left"><i className="fa-solid fa-download"></i> Fazer Download</button>
      <a href="" className="slide-left">
        <img src="/icons/ui/gmail.webp" alt="" width="20"/>
        Acessar Gmail
      </a>
    </div>
  )
}