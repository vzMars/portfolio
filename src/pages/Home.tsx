const Home = () => {
  return (
    <main className='m-auto flex flex-col items-center justify-center py-8 text-center font-lexbold'>
      <img
        src='/images/headshot.jpg'
        alt=''
        className='mb-4 h-[196px] w-[196px] rounded-full object-cover sm:mb-8 sm:h-[320px] sm:w-[320px]'
      />
      <h1 className='mb-1 text-3xl text-sky-500 sm:text-5xl'>
        Marcos Gonzalez
      </h1>
      <h2 className='text-2xl sm:text-4xl'>Software Engineer</h2>
    </main>
  );
};

export default Home;
