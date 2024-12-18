import './experience.scss';
import Heading_main from '../subComponents/heading_main/Heading_main';
import Heading_small from '../subComponents/heading_small/Heading_small';

const Experience = () => {
  const data = {
    frontend:[
      {
        skill:'HTML',
        level:'Experienced'
        },
        {
        skill:'Javascript',
        level:'Experienced'
        },
        {
        skill:'Tailwind',
        level:'Intermediate'
        },
        {
          skill:'CSS',
          level:'Experienced'
        },
        {
          skill:'Sass',
         level:'Experienced'
        },
        {
          skill:'React',
         level:'Experienced'
        }
    ],
    backend:[
      {
      skill:'NodeJS',
      level:'intermediate'
      },
      {
      skill:'Express',
      level:'intermediate'
      },
      {
      skill:'MongoDB',
      level:'intermediate'
      },
      {
        skill:'MySQL',
        level:'intermediate'
      },
      {
        skill:'PostgressSQL',
       level:'intermediate'
      },
      {
        skill:'NextJS',
       level:'intermediate'
      }
  ]
  };
  return (
    <section className="experience__section" id='experience'>
      <Heading_small className='bottom__h5'>
        What Skills I have
      </Heading_small>
      <Heading_main className='section__heading'>
      My Experience
      </Heading_main>
      <div className="skills__cards">
        <div className="skills">
        <Heading_main className='sub__heading experience'>
      Frontend Development
      </Heading_main>
      <div className="experience__listings">
        <ul className='left'>
        {data.frontend.map((skills,index)=>{
        if(index <=2 ){
          return(
            <li key={index} className='experience__list'>
              <h3 className=''>{skills.skill}</h3>
              <p className='experience__level'>{skills.level}</p>
            </li>
          );
        }
      }
      )}
        </ul>
        <ul className='right'>
        {data.frontend.map((skills,index)=>{
        if(index >2 ){
          return(
            <li key={index} className='experience__list'>
              <h3 className=''>{skills.skill}</h3>
              <p className='experience__level'>{skills.level}</p>
            </li>
          );
        }
        })}
        </ul>
      </div>

    </div>
        <div className="skills">
        <Heading_main className='sub__heading experience'>
      Backend Development
      </Heading_main>

      <div className="experience__listings">
        <ul className='left'>
        {data.backend.map((skills,index)=>{
        if(index <=2 ){
          return(
            <li key={index} className='experience__list'>
              <h3 className=''>{skills.skill}</h3>
              <p className='experience__level'>{skills.level}</p>
            </li>
          );
        }
      }
      )}
        </ul>
        <ul className='right'>
        {data.backend.map((skills,index)=>{
        if(index > 2 ){
          return(
            <li key={index} className='experience__list'>
              <h3 className=''>{skills.skill}</h3>
              <p className='experience__level'>{skills.level}</p>
            </li>
          );
        }
        })}
        </ul>
      </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
