import './services.scss';
import Heading_main from '../subComponents/heading_main/Heading_main';
import Heading_small from '../subComponents/heading_small/Heading_small';
const Services = () => {
  const UIUX=[
    'Translating design mockups (Figma, Adobe XD, etc.) into fully functional web pages.',
    'Ensuring design consistency with pixel-perfect implementation.',
    'Enhancing user experience with smooth animations and transitions.',
    'Prioritizing intuitive navigation and clear user flows.',
    'Using accessibility-first principles to design for all users.',
    'Collaborating with designers to align with brand guidelines.'
  ];
  const responsiveDev=[
    'Creating layouts that adapt seamlessly to different screen sizes and resolutions.',
    'Ensuring a consistent user experience across desktops, tablets, and mobile devices.',
    'Using modern CSS techniques like Flexbox and Grid for responsive designs.',
    'Testing responsiveness across various device dimensions and orientations.',
    'Optimizing navigation for touch and mouse interactions.',
    'Implementing fluid images and scalable typography for flexibility.',
    'Adapting designs for retina and high-resolution displays.];']
    const apiIntegration=[
      'Fetching and displaying dynamic content from REST or GraphQL APIs.',
      'Securing API communication with tokens or authentication methods.',
      'Parsing and transforming data for efficient front-end rendering.',
      'Implementing real-time data updates using WebSockets or similar protocols.',
      'Debugging API-related issues using tools like Postman or browser dev tools.',
      'Integrating third-party services (e.g., payment gateways, maps, or social media).',
      'Ensuring error handling and fallback mechanisms for robust user experiences.'
    ];
  // const words= ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, alias.';
  const data = [
    {header:'UI/UX Implementation',
      contents:[...UIUX],
      num:6

    },
    {header:'Responsive Web Design',
      contents:[...responsiveDev],
      num:7
    },
    {header:'API Integration',
      contents:[...apiIntegration],
      num:6
    }
  ];
  // data.forEach((item)=>{
  //   for(let i=0;i<item.num;i++){
  //     item.contents.push(words);
  //   }
  // });
  console.log(data);
  return (
    <section className="service__section" id='services'>
      <Heading_small className='bottom__h5'>
        What I Offer
      </Heading_small>
      <Heading_main className='section__heading'>
      Services
      </Heading_main>
      <div className="services__div">
      {
        data.map((item,index)=>{
          return(
            <div className="service__card" key={index}>
              <div className="service__heading" key={index}>
              {item.header}
            </div>
            <div className="service__lists">
            {item.contents.map((content,i)=>{
              return(
                <div className="service__list" key={i}>
                  <p key={i}>{content}</p>
                </div>
              )
            })}
            </div>
            </div>
          );
        })
      }
      </div>
    </section>
  );
};

export default Services;
