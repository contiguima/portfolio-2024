import Navbar from "./components/navbar/Navbar"
import "./globals.css";

export default function Home() {
  return (
   <div className="app">
   <Navbar/>
    <section className="home">
     <div className="left-bar">
      <div className="picture"></div>
      <h2>Constanza Guimaraez</h2>
      <ul>
        <li>Software development</li>
        <li>Chemical Engineering</li>
        <li>Biotechnology</li>
      </ul>
      <h3><i>Quick links</i></h3>
      <div className="home-links">

      </div>
      </div> 
     <div className="presentation">
      <h1>Science, technology</h1>
     </div>
    </section>
   </div>
  )
}
