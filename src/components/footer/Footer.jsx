import './footer.scss';
import { FaFacebookF } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { IoLogoTwitter } from 'react-icons/io';

const Footer = () => {
  return (
    <footer className="section__footer">
      <div className="footer__header">SOFTWARE-DEV</div>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
      <a href="https://facebook.com"><FaFacebookF className='footer__socials-icon'/></a>
      <a href="https://instagram.com"><FiInstagram className='footer__socials-icon'/></a>
      <a href="https://twitter.com"><IoLogoTwitter className='footer__socials-icon'/></a>
      </div>
      <p className='footer__p'>&copy; Nk-dev portfolio.Inspired by Egator Tutorials.All rights reserved</p>
    </footer>
  )
};

export default Footer;
