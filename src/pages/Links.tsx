const Links = () => {
  return (
    <main className='flex flex-col items-center justify-center py-8 text-center font-lexbold'>
      <img
        src='/images/headshot.jpg'
        alt=''
        className='mb-4 h-[196px] w-[196px] rounded-full object-cover sm:mb-8 sm:h-[280px] sm:w-[280px]'
      />
      <h1 className='mb-4 text-3xl sm:mb-8 sm:text-5xl'>Marcos Gonzalez</h1>
      <div className='flex w-full max-w-xs flex-col space-y-4 text-xl'>
        <a
          href='https://marcosgonzalez.dev/'
          target='_blank'
          className='flex items-center justify-center gap-2 rounded-md bg-brand-100 py-3 hover:brightness-90'
        >
          <img src='/images/generic-website.svg' alt='generic-logo' />
          Portfolio
        </a>
        <a
          href='https://github.com/vzmars'
          target='_blank'
          className='flex items-center justify-center gap-2 rounded-md bg-black py-3 hover:brightness-90'
        >
          <img src='/images/github.svg' alt='github-logo' />
          Github
        </a>
        <a
          href='https://www.linkedin.com/in/marcosgonzalez1731/'
          target='_blank'
          className='flex items-center justify-center gap-2 rounded-md bg-linkedin-100 py-3 hover:brightness-90'
        >
          <img src='/images/linkedin.svg' alt='linkedin-logo' />
          LinkedIn
        </a>
        <a
          href='https://twitter.com/vzmars'
          target='_blank'
          className='flex items-center justify-center gap-2 rounded-md bg-twitter-100 py-3 hover:brightness-90'
        >
          <img src='/images/twitter.svg' alt='twitter-logo' />
          Twitter
        </a>
        <a
          href='https://www.instagram.com/vzmars/'
          target='_blank'
          className='flex items-center justify-center gap-2 rounded-md bg-gradient-to-l from-instagram-100 via-instagram-200 to-instagram-300 py-3 hover:brightness-90'
        >
          <img src='/images/instagram.svg' alt='instagram-logo' />
          Instagram
        </a>
        <a
          href='https://letterboxd.com/vzmars'
          target='_blank'
          className='flex items-center justify-center gap-2 rounded-md bg-letterboxd-100 py-3 hover:brightness-90'
        >
          <img src='/images/letterboxd.svg' alt='letterboxd-logo' />
          Letterboxd
        </a>
      </div>
    </main>
  );
};

export default Links;
