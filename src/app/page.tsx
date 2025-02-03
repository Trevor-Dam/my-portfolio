import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div id="intro" className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      <form id="intro_section" > 
            <Image id="personal_image" src="/trevor_damoyi.jpg" 
            alt="My Professional Image" width={200} height={200} />
            <div>
                <h1 id="name">
                    Trevor Damoyi
                </h1>
            </div>
            <div>
                <h2 id="email">
                    trevordamoyi307@gmail.com
                </h2>
            </div>
        </form>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <h3 id="about_me">About Me</h3>
        <span>
            I am a second year Computer Science student based in Johannesburg, South Africa. 
            I am always eager to learn new technologies, as my portfolio will prove.
            Even though Web Development is my main focus, I am also interested in other fields of Software Engineering.
            My proficiencies are in both Front-End and Backend development using the .NET Framework,
            HTML, CSS and JavaScript. However, I am familiar with Java, React and I am currently busy 
            learning the Next framework
        </span>    
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
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
