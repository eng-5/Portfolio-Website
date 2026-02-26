import './home.scss';
import Nav from '../../components/nav/Nav'
import Footer from '../../components/footer/Footer'
import Hero from '../../components/hero/Hero'
import About from '../../components/about/About'
import Experience from '../../components/experience/Experience'
import Services from '../../components/services/Services'
import Portfolio from '../../components/portfolio/Portfolio'
import Contact from '../../components/contact/Contact'
import Testimonials from '../../components/testimonials/Testimonials';

const Home = () => {
  return <div className='homePage'>
    <div className="container">
    <Nav/> 
    <Hero/>
    <About/>
    <Experience/>
    <Services/>
    <Portfolio/> 
    <Testimonials/>
    <Contact/> 
    </div>
    <Footer/>
  </div>;
};

export default Home;
