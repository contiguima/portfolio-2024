import Image from "next/image";
import githubIcon from "../../../../public/assets/icons/github_icon.png"
import webIcon from "../../../../public/assets/icons/web_icon.png"
import "./project_card.scss" 

const ProjectCardBig = ({tag, image, title, description, stack, repository, deploy}) =>{
    return(
        <div className="project-card-b">
            <div className="project-tag">
                <h3>{tag}</h3>
            </div>
            <Image className="project-img"
            src={image}
            alt={title}/>
            <div className="project-description">
                <h2>{title}</h2>
                <p>{description}</p>
                <span><b>STACK:</b> {stack}</span>
                <div className="project-links">
                    <div className="project-link">
                    <Image 
                    className="project-link-img"
                    src={githubIcon}
                    alt="Github logo"/>
                    <a 
                    target="_blank" 
                    href={repository}>Repository</a>
                    </div>
                    
                    <div className="project-link"><a 
                    target="_blank" 
                    href={deploy}>Web</a>
                    <Image 
                    className="project-link-img"
                    src={webIcon}
                    alt="Web logo"/></div>
                    

                </div>

            </div>


        </div>
    )
}

export default ProjectCardBig;
