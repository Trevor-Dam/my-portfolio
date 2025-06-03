import Image from 'next/image'

import './globals.css';

import trevor from './trevor_damoyi.png';

export default function Home() {
  return (
    <main className="flex-col min-h-screen p-24 justify-center items-center bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div id="intro" className="z-10 max-w-5xl w-full font-mono text-sm">
      <form id="intro_section" className='flex gap-4 sm:flex-col md:flex-row lg:flex-row items-center justify-center'> 
            <Image id="personal_image" src={trevor} className='rounded-full w-5 h-5 sm:w-16 sm:h-16 md:w-32 md:h-32 lg:w-48 lg:h-48' 
            alt="My Professional Image" width={500} height={500} />
            <div>
                <h1 id="name" className='text-4xl font-mono font-bold text-purple-700 dark:text-purple-400'>
                    Trevor Damoyi
                </h1>
                <h2 id="email" className='text-2xl font-mono font-semibold text-purple-700 dark:text-purple-400'>
                    trevordamoyi307@gmail.com
                </h2>
            </div>
        </form>
      </div>

      <div className="z-10 max-w-5xl w-full font-mono text-sm lg:flex lg:items-center lg:justify-center">
        <h3 id="about_me" className='font-mono font-semibold text-purple-700 dark:text-purple-400'>About Me</h3>
        <span className='text-gray-700 dark:text-gray-300'>
            I am a second year Computer Science student based in Johannesburg, South Africa. 
            I am always eager to learn new technologies, as my portfolio will prove.
            Even though Web Development is my main focus, I am also interested in other fields of Software Engineering.
            My proficiencies are in both Front-End and Backend development using the .NET Framework,
            HTML, CSS and JavaScript. However, I am familiar with Java, React and I am currently busy 
            learning the Next framework
        </span>    
      </div>

      <div className="z-10 max-w-5xl w-full font-mono text-sm lg:flex lg:items-center lg:justify-center">
        <div id="projects_section">
          <h4 id="projects_title">Projects</h4>
          <ul id="projects_list">
              <li>
                <div>
                    <h5>GalleriaHub</h5>
                    <iframe width={560} height={315} src="https://www.youtube.com/embed/COcqhe2Uu7M?si=UBjXOsEnU53631tx" title="YouTube video player" frameBorder={0} allowFullScreen={false}></iframe>
                    <h6>Role: C# Developer</h6>
                    <span>
                        This is an e-commerce site I worked on as part of a team of four.
                        Though not deployed, this site allows emerging artists to sell their art online,
                        giving them the exposure they need along with the means to support themselves.
                    </span>
                </div>
              </li>
          </ul>
        </div>
      </div>
    </main>
  )
}
