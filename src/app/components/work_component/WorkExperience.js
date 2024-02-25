import "./work_experience.scss";

const WorkExperience = ({title, company, date, bullet1, bullet2, bullet3, placementLeft}) => {
    return <div className={placementLeft ? "work-experience-left" : "work-experience-right"}>
        <h2>{title}</h2>
        <h3>{company}</h3>
        <h4><i>{date}</i></h4>
        <ul>
            <li>{bullet1}</li>
            <li>{bullet2}</li>
            <li>{bullet3}</li>
        </ul>

    </div>
}

export default WorkExperience;