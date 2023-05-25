import { Link } from 'react-router-dom';

type PropsType = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobileNav = ({ open, setOpen }: PropsType) => {
  return (
    <nav
      className={`${
        !open
          ? 'hidden'
          : 'fixed right-0 top-20 z-10 flex h-full w-full flex-col space-y-8 bg-neutral-900 p-8 text-xl opacity-95'
      } sm:hidden`}
      onClick={() => setOpen(false)}
    >
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/projects'>Projects</Link>
    </nav>
  );
};

export default MobileNav;
