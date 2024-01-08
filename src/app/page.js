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
      <p>If you want to know where to find me, it's <br/> probably by learning something new. I love <br/> working in dynamic environments, which allow me <br/> to combine my knowledge in processes, <br/> technology and project management to generate <br/> products with a positive impact on people's lives.</p>
      <div className="buttons-home">
        <button className="cta-home">SEE WHAT I'M UP TO</button>
      </div>
     </div>
    </section>
   </div>
  )
}
