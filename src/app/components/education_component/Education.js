import "./education.scss"

const Education = ({title, university, description}) => {
    return(
        <div className="education-component">
            <h2>{title}</h2>
            <h3><i>{university}</i></h3>
            <p>{description}</p>
        </div>
    )

}

export default Education