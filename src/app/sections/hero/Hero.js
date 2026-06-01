import './hero.css'
import Button from '@/app/components/Button'

export default function Hero(){
	return(
		<main id="hero" className="section_observer">
			<div id="hero-container">
				<div id="hero-content">
					<img aria-hidden src="/images/apostila.webp" alt="File icon" width="180" height="180" fetchPriority='high'/>
					<h1>Apostila Concurso INSS 2026:<br/> conquiste sua vaga como Técnico<br/> do Seguro Social</h1>
					<p>Estude para o concurso do INSS com um material completo e atualizado, focado nos principais conteúdos cobrados na prova. São 1.500 questões comentadas e exercícios práticos para ajudar a fixar o conteúdo.</p>
				</div>

				<div id="hero-price">
					<span>De <s>R$34,90</s> por:</span>
					<strong>R$ 19,90</strong>
				</div>

				<div id='hero-cta'>
					<Button text="Garantir apostila" icon="/icons/fa-arrow-right.svg" variant="style1"/>

					<small>⚠️ O edital irá sair em breve!</small>
				</div>
			</div>
		</main>
	)
}