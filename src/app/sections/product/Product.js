import './product.css'

export default function Product(){
  return(
    <section id="product" className="section_observer">
      <div id='product-container'>
        <div id="product-intro">
          <img src="/images/im.png" width="160" alt=""/>
            <h3>A apostila que você precisa para ser aprovado</h3>
            {/* <p>O conteúdo da apostila foi planejado de acordo com as principais disciplinas exigidas no concurso, para que você estude de forma direcionada até a aprovação.</p> */}
            <p>O material reúne as disciplinas mais exigidas no concurso, ajudando você a estudar de forma mais estratégica e direcionada para a prova.</p>
        </div>
        <div id="product-summary">
          <div className="product-summary-item">
            <img src='/icons/check2.webp' alt="Ícone checklist"/>
            <span>Língua Portuguesa</span>
          </div>

          <div className="product-summary-item">
            <img src='/icons/check2.webp' alt="Ícone checklist"/>
            <span>Ética no Serviço Público</span>
          </div>

          <div className="product-summary-item">
            <img src='/icons/check2.webp' alt="Ícone checklist"/>
            <span>Noções de Direito Constitucional</span>
          </div>

          <div className="product-summary-item">
            <img src='/icons/check2.webp' alt="Ícone checklist"/>
            <span>Raciocínio Lógico-Matemático</span>
          </div>

          <div className="product-summary-item">
            <img src='/icons/check2.webp' alt="Ícone checklist"/>
            <span>Regime Jurídico Único</span>
          </div>

          <div className="product-summary-item">
            <img src='/icons/check2.webp' alt="Ícone checklist"/>
            <span>Conhecimentos Específicos</span>
          </div>
        </div>
      </div>
    </section>
  )
}