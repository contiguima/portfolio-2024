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




export default function Home() {


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
          <span>SEE WHAT <br/> I'M UP TO</span>
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
        bullet1 = "MVP development"
        bullet2 = "Google Analytics"
        bullet3 = "Research and Development"
        placementLeft={true}
        />
      </div>

    </section>
   </div>
  )
}
