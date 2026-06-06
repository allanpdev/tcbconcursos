import './reviews.css'
import Button from '@/app/components/Button'

export default function Reviews(){
    return(
      <section id="reviews" className="section_observer">
        <div id="reviews-container">
          <h2>Você pode ser o <br/>próximo aprovado</h2>
          <p>A diferença entre quem apenas deseja a vaga e quem conquista a aprovação está na decisão de começar antes da maioria.</p>

          <div id="reviews-slider">
            <button id='previous' className="analytics_click">
              <img src="/icons/fa-arrow-left.svg" alt='Anterior'/>
            </button>

            <div id='reviews-slider-container'>
              <img src="/images/review-1.webp" alt="Depoimento 1" className="card"/>
              <img src="/images/review-2.webp" alt="Depoimento 2" className="card"/>
              <img src="/images/review-3.webp" alt="Depoimento 3" className="card"/>
              <img src="/images/review-4.webp" alt="Depoimento 4" className="card"/>
            </div>

            <div id="slider-dots"></div>

            <button id='next' className="analytics_click">
              <img src="/icons/fa-arrow-right.svg" alt='Próximo'/>
            </button>
          </div>

           <Button text="Conferir material" icon="/icons/fa-arrow-right.svg" variant="style4" link="/checkout"/>
        </div>
      </section>
    )
}