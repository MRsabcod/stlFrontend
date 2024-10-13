import Link from "next/link";
import HeroSection from '../components/HeroSection.jsx'
import TransparentHeader from "../components/Navbar.jsx";
import SponsorSection from "../components/SponsorSection.jsx";
import Testimonial from "../components/Testimonials.jsx";
import TeamSection from "../components/TeamSection.jsx";
import TechStackSection from "../components/TechStack.jsx";
import ShowcaseSection from "../components/ShowcaseSection.jsx";
import Services from "../components/ServicesSection.jsx";
import ContactForm from "../components/ContactSection.jsx";

export default function Home() {
    return (
        <div className="App bg-[#131319]">
          <TransparentHeader/>
        <HeroSection/>
        <Services/>
<SponsorSection/>
<Testimonial/>
        <TeamSection/>
        <TechStackSection/>
        <ShowcaseSection/>
        <ContactForm/>
          {/* <Link href={''}></Link>   */}
        </div>
    )

}
