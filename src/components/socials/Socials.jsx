import './socials.scss';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaDribbble } from 'react-icons/fa';
const Socials = () => {
  return <div className="socials-handles">
    <a href="https://linkedin.com/in/nwaodunkechukwu/" target="_blank"><BsLinkedin /></a>
    <a href="https://github.com/eng-5" target="_blank"><FaGithub /></a>
    <a href="https://dribble.com" target="_blank">< FaDribbble  /></a>
    <div className="line"></div>
    </div>;
};

export default Socials;
