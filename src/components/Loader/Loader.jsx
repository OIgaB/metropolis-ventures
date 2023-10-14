import { CirclesWithBar } from  'react-loader-spinner';


const Loader = () => {
    return (
        <CirclesWithBar
            height="100"
            width="100"
            color="#8b6d39"
            wrapperStyle={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
            }}
            wrapperClass=""
            visible={true}
            outerCircleColor="#B29F7E"
            innerCircleColor="#7e715a"
            barColor="#172234"
            ariaLabel='circles-with-bar-loading'
        />
    );
};

export default Loader;