'use client'

import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Advantages from '../components/Advantages'
import Reviews from '../components/Reviews'
import Timer from "../components/Timer"
import Offer from '../components/Offer'
import Overview from '../components/Overview'
import Guarantee from '../components/Guarantee'

export default function Home() {
  return(
    <div id='interface'>
      <Header/>
      <Hero/>
      <About/>
      <Advantages/>
      <Reviews/>
      <Timer/>
      <Offer/>
      <Guarantee/>
      <Overview/>
      
    </div>
  );
}
