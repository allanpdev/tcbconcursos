import Header from './sections/header/Header'
import Hero from './sections/hero/Hero'
import About from './sections/about/About'
import Preparation from './sections/preparation/Preparation'
import Reviews from './sections/reviews/Reviews'
import Product from './sections/product/Product'
import Guarantee from './sections/guarantee/Guarantee'
import Offer from './sections/offer/Offer'
import FAQ from './sections/faq/FAQ'
import Footer from './sections/footer/Footer'
import Purchase from './sections/purchase/Purchase'

export default function Home() {
  return (
    <div id="interface">
      <Header/>
      <Hero/>
      <About/>
      <Preparation/>
      <Reviews/>
      <Product/>
      <Guarantee/>
      <Offer/>
      <Purchase/>
      <FAQ/>
      <Footer/>
    </div>
  )
}
