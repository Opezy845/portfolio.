import Hero from "../components/Hero";
import Navbar from "../components/Navabar";
import Categories from "../components/Categories";
import HowItWorks from "../components/HowItWorks";
import About from "../components/About";
import AIFeatures from "../components/Aifeatures";
import TrustSection from "../components/TrustSection";
import Testimonials from "../components/Testimonails";
import CTASection from "../components/CTASection";
import ContactSection from "../components/ContactsSection";
import FeaturedGigs from "../components/FeaturedGigs";
import DashboardSlidebar from "../components/DashboardSlidebar";
import Footer from "../components/Footer";

function Home() {
    return (
        <>
            <Navbar />
            <Hero />

            <Categories />

            <HowItWorks />
            <About />
            <AIFeatures />  
          

            <TrustSection />

            <Testimonials />

            <CTASection />

            <ContactSection />

            <FeaturedGigs />

            <DashboardSlidebar />

            <Footer />
        </>
    );
}

export default Home;