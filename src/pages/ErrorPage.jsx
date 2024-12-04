import errorpage from '../assets/error.jpg'

const ErrorPage = () => {
  return (
    <div className=' py-44'>
      <img src={errorpage} className='w-full h-[520px]' alt="404 Not found" />
      
    </div>
  );
};

export default ErrorPage;