//React elements
import Image from "next/image";

//Components
import Navbar from "./components/navbar/Navbar"

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
        <a><Image 
        className="home-icon"
        src={githubLogo}/></a>
        <a><Image 
        className="home-icon"
        src={linkedinLogo}/></a>
        <a><Image 
        className="home-icon"
        src={xLogo}/></a>
        <a><Image 
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
   </div>
  )
}
