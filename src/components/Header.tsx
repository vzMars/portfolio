import { useState } from 'react';
import Hamburger from 'hamburger-react';
import Nav from './Nav';
import MobileNav from './MobileNav';

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className='flex items-center justify-end py-8 font-medium'>
      <div className='sm:hidden'>
        <Hamburger toggled={open} toggle={setOpen} rounded size={32} />
      </div>
      <Nav />
      <MobileNav open={open} setOpen={setOpen} />
    </header>
  );
};

export default Header;
