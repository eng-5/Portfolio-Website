import './testimonials.scss';
import Heading_main from '../subComponents/heading_main/Heading_main';
import Heading_small from '../subComponents/heading_small/Heading_small';
import ReviewPics from '../../assets/profile.jpg';
// import {useRef,useState,useEffect} from 'react';

const Testimonials = () => {
  const comment = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem illum, consequuntur dolorum explicabo quod quae quis aliquid facilis enim. Dolorem sit hic exercitationem ipsum soluta corrupti sunt quae qui minus quo. Quam molestiae omnis quos, reprehenderit soluta impedit rem quis autem aut, sapiente nostrum corrupti modi laudantium atque, provident sed!';
  const testimonials_data=[
    {reviewer_name:"Tina Snow",reviewer_img:ReviewPics,reviewer_review:comment
    },
    {reviewer_name:"Tina Snow",reviewer_img:ReviewPics,reviewer_review:comment},
    {reviewer_name:"Tina Snow",reviewer_img:ReviewPics,reviewer_review:comment},
    {reviewer_name:"Tina Snow",reviewer_img:ReviewPics,reviewer_review:comment}
  ];
  // const [refval, setRefval] = useState(1);
  // const ref_1 = useRef();
  // const ref_2 = useRef();
  // const ref_3 = useRef();
  // const ref_4 = useRef();
  // const refArrays = [ref_1,ref_2,ref_3,ref_4];
  // const wheel = (e) =>{
  // if (e.deltaX > 0 && e.deltaX > 20){
  //     console.log(e.deltaX);
  //     refval < 5?setRefval((prev)=> prev+1):null;
  //     console.log(refval);
  
  // }else if(e.deltaX < 0 && e.deltaX < -20){
  //     refval > 0?setRefval((prev)=> prev-1):null
  //     console.log(refval);

  // }
  // }
  // useEffect(()=>{
  //   console.log(refArrays[refval].current);
  // },[refval]);
  return (
    <section className="testimonials__section">
        <Heading_small className='bottom__h5'>
        Review from clients
      </Heading_small>
      <Heading_main className='section__heading'>
      Testimonials
      </Heading_main>
      <div className="testimonials__scroll-div">
      <div className="testimonials__cards">
      {testimonials_data.map((curr,i)=>{
        return(

          <div className="testimonials__card" key={i}>
          <div className="testimonials__img-div" key={i}>
          <img src={curr.reviewer_img} alt="" className="testimonials__img"/>
          </div>
          <p className='testimonials__owner'>{curr.reviewer_name}</p>
          <p className="testimonials__paragraph" >{curr.reviewer_review}</p>
          </div>



        )
      }
      )}


      </div>

      </div>
    </section>
  )
};

export default Testimonials;
