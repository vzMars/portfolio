import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <main className='m-auto flex flex-col items-center justify-center py-8 text-center font-lexbold'>
      <h1 className='text-7xl font-bold text-sky-500'>404</h1>
      <p className='lead fw-normal pb-4 text-center font-medium'>
        Oops! The page you are looking for does not exist.
      </p>
      <Link
        to='/'
        className='rounded-md bg-sky-500 px-4 py-3 text-xl font-bold'
      >
        Back To Home
      </Link>
    </main>
  );
};

export default NotFound;
