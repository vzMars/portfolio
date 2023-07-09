const Links = () => {
  return (
    <main className='flex flex-col items-center justify-center py-8 text-center font-lexbold'>
      <img
        src='/images/headshot.jpg'
        alt=''
        className='mb-4 h-[196px] w-[196px] rounded-full object-cover sm:mb-8 sm:h-[280px] sm:w-[280px]'
      />
      <h1 className='mb-1 text-3xl text-sky-500 sm:text-5xl'>
        Marcos Gonzalez
      </h1>
      <h2 className='text-2xl sm:text-4xl'>Software Engineer</h2>
      <ul className='flex w-full max-w-md flex-col space-y-4 py-8'>
        <li className='rounded-sm border-4 border-sky-500'>
          <a
            href='https://marcosgonzalez.dev/'
            target='_blank'
            className='block p-4 hover:text-sky-500'
          >
            Portfolio
          </a>
        </li>
        <li className='rounded-sm border-4 border-sky-500'>
          <a
            href='https://github.com/vzmars'
            target='_blank'
            className='block p-4 hover:text-sky-500'
          >
            Github
          </a>
        </li>
        <li className='rounded-sm border-4 border-sky-500'>
          <a
            href='https://www.linkedin.com/in/marcosgonzalez1731/'
            target='_blank'
            className='block p-4 hover:text-sky-500'
          >
            LinkedIn
          </a>
        </li>
        <li className='rounded-sm border-4 border-sky-500'>
          <a
            href='https://twitter.com/vzmars'
            target='_blank'
            className='block p-4 hover:text-sky-500'
          >
            Twitter
          </a>
        </li>
        <li className='rounded-sm border-4 border-sky-500'>
          <a
            href='https://www.instagram.com/vzmars/'
            target='_blank'
            className='block p-4 hover:text-sky-500'
          >
            Instagram
          </a>
        </li>
        <li className='rounded-sm border-4 border-sky-500'>
          <a
            href='https://letterboxd.com/vzmars'
            target='_blank'
            className='block p-4 hover:text-sky-500'
          >
            Letterboxd
          </a>
        </li>
      </ul>
    </main>
  );
};

export default Links;
