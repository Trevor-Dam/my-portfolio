import Image from 'next/image'

import trevor from './trevor_damoyi.png';

import {sendEmail} from './server/email';

export default function Home() {
  
  return (
    <main className="flex-col min-h-screen p-24 justify-center items-center bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <ul className='flex flex-wrap font-sans gap-4 p-4 m-5 rounded-4xl font-bold border-2 shadow-lg list-none justify-center sm:flex-row md:flex-row lg:flex-row bg-white dark:bg-gray-900 border-purple-700 dark:border-purple-400'>
        <li className='text-base text-gray-700 dark:text-gray-300 border-purple-700 dark:border-purple-400'>
          <a href='#about_section' className='hover:text-purple-700 hover:dark:text-purple-400 no-underline'>
            About
          </a>
        </li>
        <li className='text-base text-gray-700 dark:text-gray-300 border-purple-700 dark:border-purple-400'>
          <a href='#skills_section' className='hover:text-purple-700 hover:dark:text-purple-400 no-underline'>
            Skills
          </a>
        </li>
        <li className='text-base text-gray-700 dark:text-gray-300 border-purple-700 dark:border-purple-400'>
          <a href='#projects_section' className='hover:text-purple-700 hover:dark:text-purple-400 no-underline'>
            Projects
          </a>
        </li>
        <li className='text-base text-gray-700 dark:text-gray-300 border-purple-700 dark:border-purple-400'>
          <a href='#contact_section' className='hover:text-purple-700 hover:dark:text-purple-400 no-underline'>
            Contact
          </a>
        </li>
      </ul>
      <div id="intro" className="z-10 w-full font-sans text-sm">
        <form id="intro_section" className='flex gap-4 sm:flex-col md:flex-row lg:flex-row items-center justify-center'> 
            <Image id="personal_image" src={trevor} className='rounded-full w-50 h-50 sm:w-40 sm:h-40 md:w-40 md:h-40 lg:w-40 lg:h-40' 
            alt="My Professional Image" width={500} height={500} />
            <div>
                <h1 id="name" className='text-4xl font-bold text-purple-700 dark:text-purple-400'>
                    Trevor Damoyi
                </h1>
                <h2 id="email" className='text-3xl font-semibold text-purple-700 dark:text-purple-400'>
                    Software Engineer
                </h2>
            </div>
        </form>
      </div>

      <div id='about_section' className="z-10 w-full font-sans">
        <h3 id="about_me" className='text-2xl font-semibold text-purple-700 dark:text-purple-400'>About Me</h3>
        <p className='text-base text-gray-700 dark:text-gray-300'>
            I am a final year Computer Science student based in Johannesburg, South Africa. 
            I am always eager to learn new technologies and improve my skills as a Software Engineer.
            Even though Web Development is my main focus, I am also interested in other fields of Software Engineering.
            I aim to use my skills to create impactful software solutions that can help you and your business thrive.
        </p>    
      </div>

      <div id='skills_section' className="z-10 w-full font-sans mt-8 inline-flex flex-col items-center justify-center">
        <h3 id="skills_title" className='text-2xl font-semibold text-purple-700 dark:text-purple-400'>Skills</h3>
        <ul className='flex flex-wrap gap-4 p-4 m-5 rounded list-none justify-center sm:flex-col md:flex-row lg:flex-row'>
          <li className='text-base text-gray-700 dark:text-gray-300 border-2 rounded-md border-purple-700 dark:border-purple-400'>
            JavaScript
          </li>
          <li className='text-base text-gray-700 dark:text-gray-300 border-2 rounded-md border-purple-700 dark:border-purple-400'>
            TypeScript
          </li>
          <li className='text-base text-gray-700 dark:text-gray-300 border-2 rounded-md border-purple-700 dark:border-purple-400'>
            React
          </li>
          <li className='text-base text-gray-700 dark:text-gray-300 border-2 rounded-md border-purple-700 dark:border-purple-400'>
            Java
          </li>
          <li className='text-base text-gray-700 dark:text-gray-300 border-2 rounded-md border-purple-700 dark:border-purple-400'>
            .NET
          </li>
          <li className='text-base text-gray-700 dark:text-gray-300 border-2 rounded-md border-purple-700 dark:border-purple-400'>
            NextJS
          </li>
          <li className='text-base text-gray-700 dark:text-gray-300 border-2 rounded-md border-purple-700 dark:border-purple-400'>
            SQL
          </li>
          <li className='text-base text-gray-700 dark:text-gray-300 border-2 rounded-md border-purple-700 dark:border-purple-400'>
            HTML/CSS
          </li>
        </ul>
        </div>
      <div id='projects_section' className="z-10 w-full font-sans mt-8 inline-flex flex-col items-center justify-center">
        <h3 id="projects_title" className='text-2xl font-semibold text-purple-700 dark:text-purple-400'>Projects</h3>
        <div id='project_1' className="border-2 border-purple-700 dark:border-purple-400 rounded-2xl shadow-lg bg-white dark:bg-gray-900">
          <div className='p-4 m-5 rounded'>
              <h4 className='text-xl font-semibold text-purple-700 dark:text-purple-400'>GalleriaHub</h4>
              <h5 className='text-lg font-mono font-semibold text-purple-700 dark:text-purple-400'>Role: .NET Developer</h5>
              <p className='text-base text-gray-700 dark:text-gray-300'>
                  This is an e-commerce site I worked on as part of a team of four.
                  Though not deployed, this site allows emerging artists to sell their art online,
                  giving them the exposure they need along with the means to support themselves.
              </p>
              <a href="https://youtu.be/COcqhe2Uu7M?si=s_xj15SVmxba8e3X" className='text-purple-700 dark:text-purple-400 hover:underline' target="_blank" rel="noopener noreferrer">
                  View Project
              </a>
          </div>
        </div>
        <br />
        <div id='project_2' className="border-2 border-purple-700 dark:border-purple-400 rounded-2xl shadow-lg bg-white dark:bg-gray-900">
          <div className='p-4 m-5 rounded'>
              <h4 className='text-xl font-semibold text-purple-700 dark:text-purple-400'>Varsity Moola</h4>
              <p className='text-base text-gray-700 dark:text-gray-300'>
                  Varsity Moola is a personal finance app I built to help students manage their finances.
                  It allows users to track their expenses, set budgets, and save money for their goals.
                  The app is built with React Native, ASP.NET Core, PostgreSQL, and uses Firebase for analytics.
              </p>
              <a href="https://github.com/Trevor-Dam/Varsity-Moola" className='text-purple-700 dark:text-purple-400 hover:underline' target="_blank" rel="noopener noreferrer">
                  View Project
              </a>
          </div>
        </div>
      </div>

      <div id='contact_section' className="z-10 w-full font-sans mt-8 inline-flex flex-col items-center justify-center rounded-2xl shadow-lg border-2 bg-white dark:bg-gray-900 border-purple-700 dark:border-purple-400">
        <h3 id="contact_title" className='text-2xl font-semibold text-purple-700 dark:text-purple-400'>Contact Me</h3>
        <form id="contact_form" action={sendEmail} className='flex flex-col gap-4 p-4 m-5 w-full rounded shadow-lg bg-white dark:bg-gray-900'>
          <label htmlFor="name" className='text-base text-gray-700 dark:text-gray-300'>Name</label>
          <input type="text" id="name" name="name" className='p-2 w-full border border-purple-700 dark:border-purple-400 rounded-md' placeholder='Name' required />
          
          <label htmlFor="email" className='text-base text-gray-700 dark:text-gray-300'>Email</label>
          <input type="email" id="email" name="email" className='p-2 w-full border border-purple-700 dark:border-purple-400 rounded-md' placeholder='email@example.com' required />
          
          <label htmlFor="message" className='text-base text-gray-700 dark:text-gray-300'>Message</label>
          <textarea id="message" name="message" rows={4} className='p-2 w-full border border-purple-700 dark:border-purple-400 rounded-md' placeholder='Message' required></textarea>
          
          <button type="submit" className='bg-purple-700 dark:bg-purple-400 text-white font-semibold py-2 w-full px-4 rounded-md hover:bg-purple-600 dark:hover:bg-purple-300'>
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}
