import './hero.scss';
import profilePics from '../../assets/nkProfilePics.png';
import Socials from '../socials/Socials';
import Heading_small from '../subComponents/heading_small/Heading_small';
import Button from '../subComponents/button/Button';

const Hero = () => {
  return <div className="hero" id='home'>
    <Heading_small className={'top__h5'}>
    Hello I'm
    </Heading_small>
    <h2>Nwaodu Nkechukwu</h2>
    <Heading_small className={'bottom__h5'}>
    React Developer
    </Heading_small>
    <div className="cta">
      <Button type='trans-cv'/>
      <Button type='filled' href='#contact' >let's Talk</Button>
    </div>
    <div className="profilePics">
      <img src={profilePics} alt="" className="pics" />
    </div>
      <Socials />
        <p className='scroll-nav'>scroll Down</p>
  </div>;
};

export default Hero;
