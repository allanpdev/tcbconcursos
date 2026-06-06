import './faq.css'

export default function FAQ(){
  return(
    <section id="faq" className="section_observer">
      <div id="faq-container">
        <h2 id="faq-title">Perguntas frequentes</h2>

        <div id="faq-content">
          <details id="faq-1" className="faq-detail analytics_toggle">
            <summary className="faq-summary">
              <span>E se eu não gostar do material?</span>
              <img src="/icons/fa-angle-down.svg" width="24" height="24" alt="Icone"/>
            </summary>
            <p>Você tem 15 dias para solicitar reembolso se não estiver satisfeito. A devolução é processada em até 2 dias úteis, sem questionamento.</p>
          </details>

          <details id="faq-2" className="faq-detail analytics_toggle">
            <summary className="faq-summary">
              <span>A apostila é para quem está começando os estudos?</span>
              <img src="/icons/fa-angle-down.svg" width="24" height="24" alt="Icone"/>
            </summary>
            <p>Sim. O material foi organizado para atender tanto iniciantes quanto candidatos que já estudam para concursos.</p>
          </details>
          <details id="faq-3" className="faq-detail analytics_toggle">
            <summary className="faq-summary">
              <span>Posso estudar pelo celular?</span>
              <img src="/icons/fa-angle-down.svg" width="24" height="24" alt="Icone"/>
            </summary>
            <p>Sim. A apostila é enviada em PDF e pode ser acessada pelo celular, tablet ou computador, permitindo que você estude de qualquer lugar.</p>
          </details>
          <details id="faq-4" className="faq-detail analytics_toggle">
            <summary className="faq-summary">
              <span>O material pode ser impresso?</span>
              <img src="/icons/fa-angle-down.svg" width="24" height="24" alt="Icone"/>
            </summary>
            <p>Sim. Como a apostila é enviada em PDF, você pode estudar digitalmente ou imprimir o material da forma que preferir.</p>
          </details>
        </div>
      </div>
    </section>
  )
}