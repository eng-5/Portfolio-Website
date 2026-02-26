import './about.scss';
import Heading_small from '../subComponents/heading_small/Heading_small';
import Heading_main from '../subComponents/heading_main/Heading_main';
import Card from '../subComponents/card/Card';
import Button from '../subComponents/button/Button';
import Pics2 from '../../assets/Pics2.png';
const About = () => {
  return (
    <section className="about__section" id='about'>
      <Heading_small className='about__h'>
      Get to Know
      </Heading_small>
      <Heading_main className='section__heading about'>
      About Me
      </Heading_main>
      <div className="about__main">
        <div className="image">
        {/* <img src={} alt="" /> */}
        <img src={Pics2} alt="" />
        </div>
        <div className="about__main-content">
          <div className="cards">
          <Card type='experience'/>
          <Card type='client'/>
          <Card type='project'/>
          </div>
          <p>Hi, I'm a front-end engineer passionate about crafting responsive, user-friendly web interfaces using HTML, CSS, JavaScript, and frameworks like React. I enjoy turning designs into seamless, interactive experiences that prioritize functionality and aesthetics.

Currently, I’m expanding my skill set by diving into back-end development, learning technologies like Node.js, Express, and databases. My goal is to become a well-rounded developer capable of building full-stack solutions. I’m driven by curiosity and a love for problem-solving, always seeking to improve and grow with every project.</p>
          <Button type='filled' href=''>let's talk</Button>
        </div>
        </div>

    </section>
  );
};

export default About;
