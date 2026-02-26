import './card.scss';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

const AboutCard = ({type}) => {
  const experience = <div className='card__div'>
    <FaAward className='card__icon' />
    <h5>Experience</h5>
    <small>3+ Years Working</small>
  </div>;
  const client = <div className='card__div'>
    <FaAward className='card__icon' />
    <h5>Clients</h5>
    <small>200+ Worldwide</small>
  </div>;
  const project  = <div className='card__div'>
    <FaAward className='card__icon' />
    <h5>Projects</h5>
    <small>80+ Completed</small>
  </div>;
  return <div className='about__card'>
    {type == 'experience'?experience:type == 'client'?client:type =='project'?project:null}
  </div>;
};

export default AboutCard;
