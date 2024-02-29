const About = () => {
  return (
    <main>
      <h1 className='border-b border-white py-4 font-lexbold text-2xl sm:py-8 sm:text-5xl'>
        About
      </h1>
      <div className='flex flex-col space-y-4 py-12 sm:text-lg'>
        <p>Hey, I'm Marcos Gonzalez.</p>
        <p>
          I'm a software engineer from New York with a deep interest in web
          development and data science. I graduated from Lehman College with a Bachelor of Science in
          Computer Science, where I learned programming fundamentals using Java. During my undergraduate career, I took various
          programming courses where I learned how to develop mobile applications for Android devices
          using Java, develop front-end web applications using JavaScript and React, and analyze
          real-world data sets using Python.
        </p>
        <p>
          I am always seeking new opportunities to apply my skills and grow as a
          developer. I look forward to connecting with you.
        </p>
        <p>
          You can reach me at:{' '}
          <a
            href='mailto:marcosgonzalez1731@gmail.com'
            className='text-sky-500 underline'
          >
            marcosgonzalez1731@gmail.com
          </a>
          , or on {' '}
          <a
            href='https://www.linkedin.com/in/marcosgonzalez1731/'
            className='text-sky-500 underline'
            target='_blank'
          >
            LinkedIn
          </a>.
        </p>
      </div>
      <h2 className='my-4 text-center font-lexbold text-xl sm:text-3xl'>
        Skills
      </h2>
      <ul className='my-8 flex flex-wrap justify-center gap-10'>
        <li className='flex flex-col items-center justify-center gap-3 text-lg'>
          <img
            src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
            className='w-12 sm:w-24'
          />
          <span>JavaScript</span>
        </li>
        <li className='flex flex-col items-center justify-center gap-3 text-lg'>
          <img
            src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
            className='w-12 sm:w-24'
          />
          <span>TypeScript</span>
        </li>
        <li className='flex flex-col items-center justify-center gap-3 text-lg'>
          <img
            src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
            className='w-12 sm:w-24'
          />
          <span>React</span>
        </li>
        <li className='flex flex-col items-center justify-center gap-3 text-lg'>
          <img
            src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
            className='w-12 sm:w-24'
          />
          <span>Node.js</span>
        </li>
        <li className='flex flex-col items-center justify-center gap-3 text-lg'>
          <i className='devicon-express-original text-[48px] sm:text-8xl'></i>
          <span>Express</span>
        </li>
        <li className='flex flex-col items-center justify-center gap-3 text-lg'>
          <img
            src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'
            className='w-12 sm:w-24'
          />
          <span>Java</span>
        </li>
        <li className='flex flex-col items-center justify-center gap-3 text-lg'>
          <img
            src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg'
            className='w-12 sm:w-24'
          />
          <span>Spring Boot</span>
        </li>
        <li className='flex flex-col items-center justify-center gap-3 text-lg'>
          <img
            src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg'
            className='w-12 sm:w-24'
          />
          <span>C#</span>
        </li>
        <li className='flex flex-col items-center justify-center gap-3 text-lg'>
          <img
            src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-plain.svg'
            className='w-12 sm:w-24'
          />
          <span>ASP.NET</span>
        </li>
        <li className='flex flex-col items-center justify-center gap-3 text-lg'>
          <img
            src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
            className='w-12 sm:w-24'
          />
          <span>Python</span>
        </li>
        <li className='flex flex-col items-center justify-center gap-3 text-lg'>
          <img
            src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'
            className='w-12 sm:w-24'
          />
          <span>PostgreSQL</span>
        </li>
        <li className='flex flex-col items-center justify-center gap-3 text-lg'>
          <i className='devicon-microsoftsqlserver-plain text-[48px] sm:text-8xl'></i>
          <span>SQL Server</span>
        </li>
        <li className='flex flex-col items-center justify-center gap-3 text-lg'>
          <img
            src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
            className='w-12 sm:w-24'
          />
          <span>MongoDB</span>
        </li>
        <li className='flex flex-col items-center justify-center gap-3 text-lg'>
          <img
            src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
            className='w-12 sm:w-24'
          />
          <span>Git</span>
        </li>
        <li className='flex flex-col items-center justify-center gap-3 text-lg'>
          <img
            src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
            className='w-12 sm:w-24'
          />
          <span>HTML</span>
        </li>
        <li className='flex flex-col items-center justify-center gap-3 text-lg'>
          <img
            src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
            className='w-12 sm:w-24'
          />
          <span>CSS</span>
        </li>
        <li className='flex flex-col items-center justify-center gap-3 text-lg'>
          <img
            src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg'
            className='w-12 sm:w-24'
          />
          <span>Bootstrap</span>
        </li>
        <li className='flex flex-col items-center justify-center gap-3 text-lg'>
          <img
            src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg'
            className='w-12 sm:w-24'
          />
          <span>Tailwind CSS</span>
        </li>
      </ul>
    </main>
  );
};

export default About;
