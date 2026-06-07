import './preparation.css'

export default function Preparation(){
  return(
    <section id="preparation" className="section_observer">
      <div id="preparation-container">
        <h2>Por que se preparar<br/> antes do edital?</h2>
        <p>Enquanto a maioria dos candidatos ainda aguarda a publicação do edital, os mais preparados já estão:</p>

        <div id="preparation-checklist-container">
          <div className="preparation-checklist">
            <img src="/icons/check.webp" width="23" height="23" alt="" />
            <span>Desenvolvendo ritmo de estudo, com menos horas por dia e mais consistência</span>
          </div>
          <div className="preparation-checklist">
            <img src="/icons/check.webp" width="23" height="23" alt="" />
            <span>Fazendo exercícios e revisões do conteúdo aprendido</span>
          </div>
          <div className="preparation-checklist">
            <img src="/icons/check.webp" width="23" height="23" alt="" />
            <span>Direcionando os estudos para os conteúdos mais cobrados</span>
          </div>
        </div>
      </div>
    </section>
  )
}