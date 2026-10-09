import '../styles/global.css'
import { Header } from '../components/layout/Header'
import { Hero } from '../components/sections/Hero'
import { Features } from '../components/sections/Features'
import { Performance } from '../components/sections/Performance'
import { Capabilities } from '../components/sections/Capabilities'
import { HowItWorks } from '../components/sections/HowItWorks'
import { Installation } from '../components/sections/Installation'
import { Documentation } from '../components/sections/Documentation'
import { Testimonials } from '../components/sections/Testimonials'
import { Pricing } from '../components/sections/Pricing'
import { Changelog } from '../components/sections/Changelog'
import { Blog } from '../components/sections/Blog'
import { FAQ } from '../components/sections/FAQ'
import { FinalCTA } from '../components/sections/FinalCTA'
import { Footer } from '../components/layout/Footer'
import { Preloader } from '../components/effects/Preloader'

function App() {
  return <><Preloader /><Header /><main aria-label="Aeye homepage"><Hero /><Features /><Performance /><Capabilities /><HowItWorks /><Installation /><Documentation /><Testimonials /><Pricing /><Changelog /><Blog /><FAQ /><FinalCTA /></main><Footer /></>
}

export default App
