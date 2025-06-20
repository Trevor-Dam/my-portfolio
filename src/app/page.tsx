import Image from 'next/image'

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
                <h2 id="email" className='text-3xl font-mono font-semibold text-purple-700 dark:text-purple-400'>
                    Software Engineer
                </h2>
            </div>
        </form>
      </div>

      <div className="z-10 max-w-5xl w-full font-mono">
        <h3 id="about_me" className='text-2xl font-semibold text-purple-700 dark:text-purple-400'>About Me</h3>
        <p className='text-base text-gray-700 dark:text-gray-300'>
            I am a final year Computer Science student based in Johannesburg, South Africa. 
            I am always eager to learn new technologies and improve my skills as a Software Engineer.
            Even though Web Development is my main focus, I am also interested in other fields of Software Engineering.
            I aim to use my skills to create impactful software solutions that can help you and your business thrive.
        </p>    
      </div>

      <div className="z-10 max-w-5xl w-full font-mono mt-8 inline-flex flex-col">
        <h3 id="projects_title" className='text-2xl font-semibold text-purple-700 dark:text-purple-400'>Projects</h3>
        <div className='p-4 m-5 rounded'>
            <h4 className='text-xl font-semibold text-purple-700 dark:text-purple-400'>GalleriaHub</h4>
            <iframe width={560} height={315} src="https://www.youtube.com/embed/COcqhe2Uu7M?si=UBjXOsEnU53631tx" title="YouTube video player" allowFullScreen={false}></iframe>
            <h5 className='text-lg font-mono font-semibold text-purple-700 dark:text-purple-400'>Role: C# Developer</h5>
            <p className='text-base text-gray-700 dark:text-gray-300'>
                This is an e-commerce site I worked on as part of a team of four.
                Though not deployed, this site allows emerging artists to sell their art online,
                giving them the exposure they need along with the means to support themselves.
            </p>
        </div>
      </div>
    </main>
  );
}
