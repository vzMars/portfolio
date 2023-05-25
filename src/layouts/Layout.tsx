import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = () => {
  return (
    <div className='mx-auto max-w-5xl px-6 font-lexreg text-white'>
      <div className='flex h-screen flex-col justify-between'>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
