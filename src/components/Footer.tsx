import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='mt-auto flex flex-col items-center justify-center py-4 text-xl sm:py-8 sm:text-2xl'>
      <div className='flex space-x-5 py-2'>
        <a
          href='mailto:marcosgonzalez1731@gmail.com'
          className='hover:text-sky-500'
        >
          <HiMail />
        </a>
        <a
          href='https://github.com/vzMars'
          className='hover:text-sky-500'
          target='_blank'
        >
          <FaGithub />
        </a>
        <a
          href='https://www.linkedin.com/in/marcosgonzalez1731/'
          className='hover:text-sky-500'
          target='_blank'
        >
          <FaLinkedin />
        </a>
      </div>
      <p>&copy; {currentYear} • Marcos Gonzalez</p>
    </footer>
  );
};

export default Footer;
