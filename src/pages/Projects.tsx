import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const Projects = () => {
  return (
    <main>
      <h1 className='border-b border-white py-4 font-lexbold text-2xl sm:py-8 sm:text-5xl'>
        Projects
      </h1>
      <section className='grid gap-8 py-12 sm:grid-cols-2'>
        <div className='overflow-hidden rounded-md border border-neutral-700'>
          <img src='/images/project1.png' alt='gameblog' />
          <div className='flex flex-col space-y-4 p-4'>
            <h2 className='font-lexbold text-2xl'>GameBlog</h2>
            <p className='text-gray-300'>
              A full-stack news blog web application that allows users to create
              blog posts and share those posts with other users.
            </p>
            <div className='flex flex-wrap gap-3'>
              <span className='rounded-sm bg-sky-500 p-1.5'>TypeScript</span>
              <span className='rounded-sm bg-sky-500 p-1.5'>React</span>
              <span className='rounded-sm bg-sky-500 p-1.5'>Tailwind CSS</span>
              <span className='rounded-sm bg-sky-500 p-1.5'>Node.js</span>
              <span className='rounded-sm bg-sky-500 p-1.5'>Express</span>
              <span className='rounded-sm bg-sky-500 p-1.5'>MongoDB</span>
            </div>
            <div className='flex space-x-3'>
              <a
                href='https://gameblog.vzmars.com/'
                target='_blank'
                className='flex items-center gap-1 rounded-sm border-sky-500 bg-white px-2 py-1.5 text-sky-500 hover:opacity-95'
              >
                <FaExternalLinkAlt />
                Live
              </a>
              <a
                href='https://github.com/vzMars/gameblog'
                target='_blank'
                className='flex items-center gap-1 rounded-sm border-sky-500 bg-white px-2 py-1.5 text-sky-500 hover:opacity-95'
              >
                <FaGithub />
                Code
              </a>
            </div>
          </div>
        </div>
        <div className='overflow-hidden rounded-md border border-neutral-700'>
          <img src='/images/project2.png' alt='employee' />
          <div className='flex flex-col space-y-4 p-4'>
            <h2 className='font-lexbold text-2xl'>Employee CRM</h2>
            <p className='text-gray-300'>
              A full-stack CRM web application that allows companies to track
              and manage the information of their employees.
            </p>
            <div className='flex flex-wrap gap-3'>
              <span className='rounded-sm bg-sky-500 p-1.5'>TypeScript</span>
              <span className='rounded-sm bg-sky-500 p-1.5'>React</span>
              <span className='rounded-sm bg-sky-500 p-1.5'>Tailwind CSS</span>
              <span className='rounded-sm bg-sky-500 p-1.5'>Java</span>
              <span className='rounded-sm bg-sky-500 p-1.5'>Spring Boot</span>
              <span className='rounded-sm bg-sky-500 p-1.5'>MongoDB</span>
            </div>
            <div className='flex space-x-3'>
              <a
                href='https://employeecrm.vzmars.com/'
                target='_blank'
                className='flex items-center gap-1 rounded-sm border-sky-500 bg-white px-2 py-1.5 text-sky-500 hover:opacity-95'
              >
                <FaExternalLinkAlt />
                Live
              </a>
              <a
                href='https://github.com/vzMars/employee-crm'
                target='_blank'
                className='flex items-center gap-1 rounded-sm border-sky-500 bg-white px-2 py-1.5 text-sky-500 hover:opacity-95'
              >
                <FaGithub />
                Code
              </a>
            </div>
          </div>
        </div>
        <div className='overflow-hidden rounded-md border border-neutral-700'>
          <img src='/images/project4.png' alt='manga-bot' />
          <div className='flex flex-col space-y-4 p-4'>
            <h2 className='font-lexbold text-2xl'>MangaNotifications</h2>
            <p className='text-gray-300'>
              A self-hosted manga notification Discord bot that sends
              notifications to the server when a tracked series releases a new
              chapter.
            </p>
            <div className='flex flex-wrap gap-3'>
              <span className='rounded-sm bg-sky-500 p-1.5'>JavaScript</span>
              <span className='rounded-sm bg-sky-500 p-1.5'>Node.js</span>
              <span className='rounded-sm bg-sky-500 p-1.5'>MongoDB</span>
            </div>
            <div className='flex space-x-3'>
              <a
                href='https://github.com/vzMars/manga-notifications'
                target='_blank'
                className='flex items-center gap-1 rounded-sm border-sky-500 bg-white px-2 py-1.5 text-sky-500 hover:opacity-95'
              >
                <FaGithub />
                Code
              </a>
            </div>
          </div>
        </div>
        <div className='overflow-hidden rounded-md border border-neutral-700'>
          <img src='/images/project5.png' alt='youtube-bot' />
          <div className='flex flex-col space-y-4 p-4'>
            <h2 className='font-lexbold text-2xl'>Discord YouTube Bot</h2>
            <p className='text-gray-300'>
              A self-hosted YouTube notification Discord bot that sends
              notifications to the server when a subscribed channel uploads a
              new video.
            </p>
            <div className='flex flex-wrap gap-3'>
              <span className='rounded-sm bg-sky-500 p-1.5'>JavaScript</span>
              <span className='rounded-sm bg-sky-500 p-1.5'>Node.js</span>
              <span className='rounded-sm bg-sky-500 p-1.5'>MongoDB</span>
            </div>
            <div className='flex space-x-3'>
              <a
                href='https://github.com/vzMars/discord-youtube-bot'
                target='_blank'
                className='flex items-center gap-1 rounded-sm border-sky-500 bg-white px-2 py-1.5 text-sky-500 hover:opacity-95'
              >
                <FaGithub />
                Code
              </a>
            </div>
          </div>
        </div>
        <div className='overflow-hidden rounded-md border border-neutral-700'>
          <img src='/images/project3.png' alt='mybooklist' />
          <div className='flex flex-col space-y-4 p-4'>
            <h2 className='font-lexbold text-2xl'>MyBookList</h2>
            <p className='text-gray-300'>
              A full-stack social media web application that uses the Google
              Books API and allows users to keep track of their books.
            </p>
            <div className='flex flex-wrap gap-3'>
              <span className='rounded-sm bg-sky-500 p-1.5'>JavaScript</span>
              <span className='rounded-sm bg-sky-500 p-1.5'>React</span>
              <span className='rounded-sm bg-sky-500 p-1.5'>Tailwind CSS</span>
              <span className='rounded-sm bg-sky-500 p-1.5'>Node.js</span>
              <span className='rounded-sm bg-sky-500 p-1.5'>Express</span>
              <span className='rounded-sm bg-sky-500 p-1.5'>MongoDB</span>
            </div>
            <div className='flex space-x-3'>
              <a
                href='https://mybooklist.vzmars.com/'
                target='_blank'
                className='flex items-center gap-1 rounded-sm border-sky-500 bg-white px-2 py-1.5 text-sky-500 hover:opacity-95'
              >
                <FaExternalLinkAlt />
                Live
              </a>
              <a
                href='https://github.com/vzMars/mybooklist'
                target='_blank'
                className='flex items-center gap-1 rounded-sm border-sky-500 bg-white px-2 py-1.5 text-sky-500 hover:opacity-95'
              >
                <FaGithub />
                Code
              </a>
            </div>
          </div>
        </div>
        <div className='overflow-hidden rounded-md border border-neutral-700'>
          <img src='/images/project6.png' alt='itempickups' />
          <div className='flex flex-col space-y-4 p-4'>
            <h2 className='font-lexbold text-2xl'>ItemPickups</h2>
            <p className='text-gray-300'>
              A full-stack social media web application that allows users to
              upload images and share them with other users.
            </p>
            <div className='flex flex-wrap gap-3'>
              <span className='rounded-sm bg-sky-500 p-1.5'>JavaScript</span>
              <span className='rounded-sm bg-sky-500 p-1.5'>EJS</span>
              <span className='rounded-sm bg-sky-500 p-1.5'>Bootstrap</span>
              <span className='rounded-sm bg-sky-500 p-1.5'>Node.js</span>
              <span className='rounded-sm bg-sky-500 p-1.5'>Express</span>
              <span className='rounded-sm bg-sky-500 p-1.5'>MongoDB</span>
            </div>
            <div className='flex space-x-3'>
              <a
                href='https://itempickups.fly.dev/'
                target='_blank'
                className='flex items-center gap-1 rounded-sm border-sky-500 bg-white px-2 py-1.5 text-sky-500 hover:opacity-95'
              >
                <FaExternalLinkAlt />
                Live
              </a>
              <a
                href='https://github.com/vzMars/item-pickups'
                target='_blank'
                className='flex items-center gap-1 rounded-sm border-sky-500 bg-white px-2 py-1.5 text-sky-500 hover:opacity-95'
              >
                <FaGithub />
                Code
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Projects;
