import { Outlet } from 'react-router-dom';

const LinksLayout = () => {
  return (
    <div className='mx-auto max-w-5xl px-6 font-lexreg text-white'>
      <div className='flex h-screen flex-col justify-between'>
        <Outlet />
      </div>
    </div>
  );
};

export default LinksLayout;
