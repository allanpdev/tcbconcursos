import './preparation.css'

export default function Preparation(){
  return(
    <section id="preparation" className="section_observer">
      <div id="preparation-container">
        <h2>O que você faria se<br/> fosse demitido hoje?</h2>
        <p>Uma decisão da empresa, uma reestruturação, uma redução de custos. E de repente, sua vida muda completamente.</p>
        <p>Sem aviso. Sem tempo para se preparar.</p>
        <p>Nessas horas você percebe que sua estabilidade sempre esteve nas mãos de outra pessoa.</p>
        <p>Mas existe uma diferença entre viver preocupado com o futuro e começar a construir algo mais estável.</p>
        <p>E é nesse momento que entram os concursos públicos. 🏛️</p>
        <div id="preparation-checklist-container">
          <div className="preparation-checklist">
            <img src="/icons/check.webp" width="23" height="23" alt="" />
            <span>Você constrói estabilidade, sem depender do que está fora do seu controle</span>
          </div>
          <div className="preparation-checklist">
            <img src="/icons/check.webp" width="23" height="23" alt="" />
            <span>Passa a planejar o futuro com mais segurança e previsibilidade</span>
          </div>
          <div className="preparation-checklist">
            <img src="/icons/check.webp" width="23" height="23" alt="" />
            <span>E não depende mais do temperamento do chefe para se manter na empresa</span>
          </div>
        </div>
      </div>
    </section>
  )
}