//React elements
import Image from "next/image";

//Data
import { projectsData } from "./data-projects";

//Components
import Navbar from "./components/navbar/Navbar"
import BorderComponent from "./components/border_component/BorderComponent";
import ProjectCardBig from "./components/projects_card/ProjectCardBig";
import ProjectCardSmall from "./components/projects_card/ProjectCardSmall";
import WorkExperience from "./components/work_component/WorkExperience";
import Education from "./components/education_component/Education";
import Slider from "./components/slider_component/Slider";
import Footer from "./components/footer/Footer";

//Styles
import "./globals.scss";

//Assets
import pfpPicture from "../../public/assets/images/pfpProfesional.jpg"
import githubLogo from "../../public/assets/icons/github_icon.png";
import linkedinLogo from "../../public/assets/icons/linkedin_icon.png";
import xLogo from "../../public/assets/icons/x_icon.png";
import fiverrLogo from "../../public/assets/icons/fiverr_icon.png";
import eyesIcon from "../../public/assets/icons/eyes_icon.png";
import spotifyLogo from "../../public/assets/icons/spotify_icon.png";
import oxygenImg from "../../public/assets/images/projects/oxygen_project_img.png";
import visuals from "../../public/assets/images/collage-visuals.png"
import nextIcon from "../../public/assets/icons/nextjsIcon.png"
import reactIcon from "../../public/assets/icons/reactIcon.png"
import sqlIcon from "../../public/assets/icons/sqlIcon.png"
import tailwindIcon from "../../public/assets/icons/tailwindIcon.png"
import htmlIcon from "../../public/assets/icons/htmlIcon.png"
import jsIcon from "../../public/assets/icons/jsIcon.png"
import cssIcon from "../../public/assets/icons/cssIcon.png"
import resumeIcon from "../../public/assets/icons/resume_icon.png"




export default function Home() {

  const stackArray = [
    <Image src={nextIcon} alt="nextJS Icon" className="stack-icon"/>,
    <Image src={sqlIcon} alt = "sqlIcon" className="stack-icon"/>,
    <Image src={reactIcon} alt="reactIcon" className="stack-icon"/>,
    <Image src={tailwindIcon} alt="tailwind CSS Icon" className="stack-icon"/>,
    <Image src={jsIcon} alt="JavaScriptIcon" className="stack-icon"/>,
    <Image src={htmlIcon} alt="HTMLIcon" className="stack-icon"/>,
    <Image src={cssIcon} alt="CSS Icon" className="stack-icon"/>

  ]


  return (
   <div className="app">
   <Navbar/>
    <section className="home">
     <div className="left-bar">
      <Image 
        className="picture"
        src={pfpPicture}
        alt="Picture of Constanza"
      />
      <h2>Constanza Guimaraez</h2>
      <ul>
        <li>Software development</li>
        <li>Chemical Engineering</li>
        <li>Biotechnology</li>
      </ul>
      <h3><i>Quick links</i></h3>
      <div className="home-links">
        <a href="https://github.com/contiguima" target="_blank"><Image 
        className="home-icon"
        src={githubLogo}/></a>
        <a href="https://www.linkedin.com/in/constanza-guimaraez/" target="_blank"><Image 
        className="home-icon"
        src={linkedinLogo}/></a>
        <a href="https://twitter.com/contiguima28" target="_blank"><Image 
        className="home-icon"
        src={xLogo}/></a>
        <a href="https://www.fiverr.com/users/contiguima/" target="_blank"><Image 
        className="home-icon"
        src={fiverrLogo}/></a>
      </div>
      </div> 
     <div className="presentation">
      <h1>Science, <br/>technology</h1>
      <h2><i>and lots of curiosity</i></h2>
      <p>If you want to know where to find me, it's probably by learning something new. I love working in dynamic environments, which allow me to combine my knowledge in processes, technology and project management to generate products with a positive impact on people's lives.</p>
      <div className="buttons-home">
        <button className="cta-home" > 
          <a href="#projects">SEE WHAT <br/> I'M UP TO</a>
          <Image
          className="cta-icon" 
          src={eyesIcon}/>
          </button>
        <button className="music-home">
         <span>LISTEN TO <br/> A SONG</span> 
         <Image
         className="music-icon"
         src={spotifyLogo}/>
         </button>
      </div>
     </div>
    </section>
    <section className="projects" id="projects">
      {/*<BorderComponent/>*/}
      <div className="projects-text">
      <h2 style={{opacity:0.8}}><b>Some really cool</b></h2>
      <h1>PROJECTS</h1>
      <h2><i>I've worked on</i></h2>
      </div>
      <div className="projects-container">
        <ProjectCardBig
        tag= "FRONTEND"
        image={oxygenImg}
        title="Oxygen Token"
        description="Oxygen is a company that uses blockchain for eco-conservation, preserving ecosystems, protecting species, and boosting local economies globally."
        stack = "NextJS - CSS - Google Analytics"
        is_code={true}
        repository="https://github.com/oxygen-token/web-oxygen"
        deploy = "https://oxygentoken.org/"/>
        <div className="projects-column">
          <ProjectCardSmall
          tag= "FRONTEND"
          title="Legalverse"
          description="A platform that allows you to connect with lawyers and keep your important files safe."
          stack= "React - Firebase - Bootstrap"
          repository="https://github.com/contiguima/LegalVerseVf"
          deploy="https://legalverse.ar/"
          />
          <ProjectCardSmall
          tag="FRONTEND"
          title="ToDoList"
          description="A minimalist to do list to learn TailwindCSS"
          stack="NextJS - TailwindCSS"
          repository="https://github.com/contiguima/todo-minimalist"
          />
        </div>
        <ProjectCardBig
        tag= "SCIENCE"
        image={oxygenImg}
        title="SCIENCE POSTER"
        is_code={false}
        description="Scientific poster presented at the International Congress of Food Science and Technology (CyTAL) 2023. The title was: 'Biodegradable films of cassava and amylose activated with natamycin for the preservation of regional cheeses' directed by PhD Pamela Cuenca."
        deploy= "https://drive.google.com/file/d/1dbDQWGuk-zd-G6zgSb56pfA87zPNFP6T/view?usp=sharing"
        />
       
      </div>
      
      <button>Load more...</button>
    </section>

    <section className="experience">
      <h1>EXPERIENCE</h1>
      <h3><i>Because I know (work)places</i></h3>
      <div className="experience-container">
        <WorkExperience 
          title= "FRONTEND ENGINEER"
        company = "Oxygen Token"
        date = "april 2023 - now"
        bullet1 = "MVP development using NextJS"
        bullet2 = "Google Analytics and Next-intl in order to reach more users and identify user behavior"
        bullet3 = "Research and Development of new features"
        placementLeft={true}
        />
        <WorkExperience 
          title= "RESEARCH AND DEVELOPMENT"
        company = "Universidad Nacional de Misiones"
        date = "august 2022 - now"
        bullet1 = "Permeability test of biomaterials, principally starch-based materials"
        bullet2 = "Writing of abstracts and posters for food and preservetion congresses"
        bullet3 = "Data processing and analysis with Excel and Python"
        placementLeft={false}
        />
      </div>

    </section>
    <div className="line"></div>
    <section className="education">
      <h1>EDUCATION</h1>
      <h3>"Who cares if I'm pretty if I fail my finals?" - Rory Gilmore</h3>
      <div className="education-container">
        <div className="education-list">
          <Education
          title="Chemical Engineering"
          university="Universidad Nacional de Misiones"
          description="Minor in Biotechnology"/>
          
          <div className="dashed-line"></div>
          <Education
          title="Coding Fellow | 24-1"
          university="Makers Fellowship"
          />
          
          <Education
          title="Project Managment Fundamentals | Agile & Waterfall"
          university="Google"/>

          <Education
          title="IA Fundamentals for Data and Machine Learning"
          university= "Platzi" />

          <Education 
          title = "Crypto & DeFi 101"
          university="Defy Education"/>

          <Education
          title = "Enterprise Design Thinking Practitioner"
          university="IBM"/>

          <Education 
          title="FullStack Development"
          university="Alchemit"
          description="JavaScript - SQL - C# - .NET - Entity Framework"/>

          
        </div>
       

        <div className="education-visuals">
          <Image src={visuals}
          className="education-image"
          alt="representative pictures"/>
        </div> 
      </div>
    </section>

    <section className="stack">
      <h1>STACK</h1>
      <div className="stack-carousel">
       <Slider logos = {stackArray} />
       </div>
    </section>
    <section className="contact">
      <div className="contact-container">
        <div className="contact-player"></div>
        <div className="contact-form-container">
          <h1>LET'S <br/> TALK!</h1>
          <form className="contact-form">
          <div className="name-input">
        <label htmlFor="first-name">First Name:</label>
        <input
          type="text"
          id="first-name"
          name="first-name"
          required
          autoComplete= "off"
          maxLength={20}
        />
        
        <label htmlFor="last-name">Last Name:</label>
        <input
          type="text"
          id="last-name"
          name="last-name"
          required
          autoComplete="off"
          maxLength={20}
        />
      </div>
    
   
      <div className="email-input">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          autoComplete="off"
          maxLength={80}
        />
      </div>
      <div>
        <label htmlFor="message">Mesagge:</label>
        <textarea
          id="mesagge"
          name="mesagge"
          required
          autoComplete="off"
          maxLength={240}
        />
      </div>
      <button type="submit">Send</button>
          </form>
        </div>
        
      </div>
      <a className="contact-resume" target="_blank" href="https://drive.google.com/file/d/12-igio6x9PYtNHBBJP-p9yzYVZV7ZukZ/view?usp=sharing">
        <Image src={resumeIcon} alt="cv" className="resume-icon"/>
        <p>Dowload CV</p></a>
  </section> 
    <Footer/>
   </div>
  )
}
