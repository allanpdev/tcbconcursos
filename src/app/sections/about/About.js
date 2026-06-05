import './about.css'

export default function About(){
  return(
    <section id="about" className="section_observer">
      <div id="about-container">
        <div id="about-text">
          <span>Após o INSS confirmar o déficit de servidores no órgão, o pedido de um novo concurso foi encaminhado para o Ministério da Gestão e Inovação (MGI), e a expectativa é que o edital seja publicado ainda em 2026.</span>
        </div>

        <h2 id="about-title">Informações do concurso</h2>

        <div id="about-box-container">
          <div className="about-box">
            <img src="/icons/info-salario.webp" width="50" height="32" alt='Ícone ilustrativo'/>
            <h3>Salário inicial</h3>
            <span>R$ 6.596,09</span>
          </div>
          <div className="about-box">
            <img src="/icons/info-exigencia.webp" width="32" height="32" alt='Ícone ilustrativo'/>
            <h3>Escolaridade</h3>
            <span>Nível Médio</span>
          </div>
          <div className="about-box">
            <img src="/icons/info-previsao.webp" width="32" height="32" alt='Ícone ilustrativo'/>
            <h3>Previsão de edital</h3>
            <span>09/2026</span>
          </div>
        </div>
      </div>
    </section>
  )
}