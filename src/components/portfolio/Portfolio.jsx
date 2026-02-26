import './portfolio.scss';
import Heading_main from '../subComponents/heading_main/Heading_main';
import Heading_small from '../subComponents/heading_small/Heading_small';
import Button from '../subComponents/button/Button';
import Pics1 from '../../assets/project1.png'
import Pics2 from '../../assets/project2.png'
import Pics3 from '../../assets/project3.png'
import Pics4 from '../../assets/project4.png'
import Pics5 from '../../assets/project5.png'
import Pics6 from '../../assets/project6.png'

const Portfolio = () => {
  const data= [
    {image:Pics1,
      description:"Banking Website Dashboards & Financial Visualization",
      github:'https://github.com/eng-5/Modern-Banking-App.git',
      website:'https://modern-banking-app-wrtr.onrender.com'
    },
    {image:Pics2,
      description:"ChatGpt AI using google Gemini API",
      github:'https://github.com/eng-5/Google-ChatGPT-App.git',
      website:'https://newchat-pp3e.onrender.com'
    },
    {image:Pics3,
      description:"University Website dashboard designed with ReactJs",
      github:'https://github.com/eng-5/University-website.git',
      website:'https://university-website-4wbf.onrender.com'
    },
    {image:Pics4,
      description:"Touring Companies website",
      github:'https://github.com/eng-5/Natours-website.git',
      website:'https://natours-website-7u9j.onrender.com'
    },
    {image:Pics5,
      description:"Edgeledger Consulting Firm website",
      github:'https://github.com/eng-5/Business-company-website.git',
      website:'https://business-company-website.onrender.com'
    },
    {image:Pics6,
      description:"Finance and Budget tracking app",
      github:'https://github.com/eng-5/Finance-Budget-App.git',
      website:'https://finance-budget-app.onrender.com'
    }
  ];
  return <section className="section__portfolio" id="portfolio">
    <Heading_small className='bottom__h5'>
        My Recent Work
      </Heading_small>
      <Heading_main className='section__heading'>
      Portfolio
      </Heading_main>
      <div className="portfolio__cards">
        {
          data.map((current)=>{
            return(
              <div className="portfolio__card">
                <div className="portfolio__image-div">
                <img src={current.image} alt="" className='portfolio__card-image'/>
                </div>
                <div className="portfolio__card-base">
                <p className="portfolio__description">
                  {current.description}
                </p>
                <div className="portfolio__buttons">

              <Button type='normal__card-trans' href={current.github}>
                Github
              </Button>
              <Button type='normal__card-fill' href={current.website}>
                Live Demo
              </Button>
                </div>

                </div>
              </div>
            )
          })
        }
      </div>
  </section>;
};

export default Portfolio;

