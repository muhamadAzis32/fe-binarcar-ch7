import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Ourservices from '../components/OurServices';
import Whyus from '../components/Whyus';
import Testimonial from '../components/Testimonial';
import Faq from '../components/Faq';
import Footer from '../components/Footer';
import About from '../components/About';


function Home() {
    return (
        <>
            <Navbar />
            <Hero />

            <main>
                <Ourservices />
                <Whyus />
                <Testimonial />
                <About />
                <Faq />
            </main>
            <Footer />
        </>
    );
}

export default Home;
