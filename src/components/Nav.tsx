import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className='hidden space-x-8 text-xl sm:flex'>
      <Link to='/' className='hover:text-sky-500'>
        Home
      </Link>
      <Link to='/about' className='hover:text-sky-500'>
        About
      </Link>
      <Link to='/projects' className='hover:text-sky-500'>
        Projects
      </Link>
    </nav>
  );
};

export default Nav;
