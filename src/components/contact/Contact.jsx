import './contact.scss';
import Heading_main from '../subComponents/heading_main/Heading_main';
import Heading_small from '../subComponents/heading_small/Heading_small';
import Button from '../subComponents/button/Button';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const Contact = () => {
  const contactData=[
    {icon:MdOutlineEmail,name:'Email',link:'nksoftwaredev@gmail.com',cta:'Send a message'},
    {icon:FaGithub,name:'Github',link:'github.com/eng-5',cta:'Send a message'},
    {icon:BsWhatsapp,name:'Whatsapp',link:'+2349072527635',cta:'Send a message'},
  ];
  return (<section className="contact__section" id='contact'>
    <Heading_small className='bottom__h5'>
    Get in touch
  </Heading_small>
  <Heading_main className='section__heading'>
  Contact Me
  </Heading_main>
  <div className="contact__box">
    <div className="contact__box-cards">
    {contactData.map((curr)=>{
      return(
        <div className="contact__box-card">
          <div >{<curr.icon className="contact__icon"/>}</div>
          <p className="contact__name">
        {curr.name}
          </p>
        <p className="contact__link">
        {curr.link}
        </p>
        <a href="" className="contact__cta">
          {curr.cta}
        </a>
        </div>
      )
    })}
    </div>
    <div className="contact__box-form">
      <form action="" method=''>
      <input type="text" placeholder='Your Full Name' name='name'/>
      <input type="email" placeholder='Your Email'/>
      <textarea name="message" id="textarea" placeholder='Your Message'></textarea>
      <button className='btn filled'>Send Message</button>
      </form>
    </div>
  </div>
</section>
)
};

export default Contact;
