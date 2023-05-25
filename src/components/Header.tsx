import { useState } from 'react';
import Hamburger from 'hamburger-react';
import Nav from './Nav';
import MobileNav from './MobileNav';

const Header = () => {
  const [open, setOpen] = useState(false);

  const onToggle = () => {
    setOpen((status) => {
      if (status) {
        document.body.style.overflow = '';
      } else {
        document.body.style.overflow = 'hidden';
      }

      return !status;
    });
  };

  return (
    <header className='flex items-center justify-end py-4 font-medium sm:py-8'>
      <Nav />
      <div className='sm:hidden'>
        <Hamburger toggled={open} toggle={onToggle} rounded size={24} />
      </div>
      <MobileNav open={open} setOpen={onToggle} />
    </header>
  );
};

export default Header;
