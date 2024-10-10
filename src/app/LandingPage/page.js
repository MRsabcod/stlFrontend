import Link from "next/link";
import HeroSection from '../components/HeroSection.jsx'
import TransparentHeader from "../components/Navbar.jsx";
import SponsorSection from "../components/SponsorSection.jsx";
import Testimonial from "../components/Testimonials.jsx";
import TeamSection from "../components/TeamSection.jsx";
import { GoogleGeminiEffectDemo } from "../components/TechStack.jsx";
import ShowcaseSection from "../components/ShowcaseSection.jsx";
import Services from "../components/ServicesSection.jsx";

export default function Home() {
    return (
        <div className="App">
          <TransparentHeader/>
        <HeroSection/>
        <Services/>
<SponsorSection/>
<Testimonial/>
        <TeamSection/>
        <GoogleGeminiEffectDemo/>
        <ShowcaseSection/>
          {/* <Link href={''}></Link>   */}
        </div>
    )

}
