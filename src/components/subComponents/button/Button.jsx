import './button.scss';
import CV from '../../../assets/Nkechukwu Resume.pdf';

const Button = ({children,type,href}) => {
    let data ={};
switch (type){
    case 'trans-cv':
        data = {href:CV,className:'btn transparent',textContent:'Download CV'};
        break;
    case 'filled':
        data ={href:!href?"":href,className:'btn filled'}
        break;
        case 'normal':
            data = {href:'',className:'btn transparent',textContent:''};
            break;
        case 'normal__card-trans':
            data = {href:!href?"":href,className:'btn__card transparent',textContent:''};
            break;
            case 'normal__card-fill':
                data ={href:!href?"":href,className:'btn__card filled'}
                break;
}
  return (
            <>{
                type === 'trans-cv'? <a href={data.href} className={data.className} download >{!children?data.textContent:children}
            </a> :<a href={data.href} className={data.className} target='_blank'>{!children?data.textContent:children}
            </a> 
            }
            </>
            
            )
};

export default Button;
