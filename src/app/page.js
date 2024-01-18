//React elements
import Image from "next/image";

//Components
import Navbar from "./components/navbar/Navbar"
import BorderComponent from "./components/border_component/BorderComponent";
import ProjectCardBig from "./components/projects_card/ProjectCardBig";


//Styles
import "./globals.css";

//Assets
import pfpPicture from "../../public/assets/images/pfpProfesional.jpg"
import githubLogo from "../../public/assets/icons/github_icon.png";
import linkedinLogo from "../../public/assets/icons/linkedin_icon.png";
import xLogo from "../../public/assets/icons/x_icon.png";
import fiverrLogo from "../../public/assets/icons/fiverr_icon.png";
import eyesIcon from "../../public/assets/icons/eyes_icon.png";
import spotifyLogo from "../../public/assets/icons/spotify_icon.png";
import oxygenImg from "../../public/assets/images/oxygen_project_img.png";


export default function Home() {
  return (
   <div className="app">
   <Navbar/>
    <section className="home">
     <div className="left-bar">
      <Image 
        className="picture"
        src={pfpPicture}
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
        <button className="cta-home"> 
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
    <section className="projects">
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
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales"
        stack = "HTML - CSS - NextJS"/>

      </div>
    </section>
   </div>
  )
}
