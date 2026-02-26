import './heading_small.scss';

const Heading_small = ({children, className}) => {
  return <h5 className={`${className}`}
  >
    {children}
    </h5>;
};

export default Heading_small;
