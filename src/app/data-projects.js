//This would have an object with all the projects data in order to use it later for pagination

//Images

import oxygenProject from "../../public/assets/images/projects/oxygen_project_img.png";


export const projectsData = [

    {
        tag : "FRONTEND",
        image: oxygenProject,
        title: "Oxygen Token",
        description: "Oxygen is a company that uses blockchain for eco-conservation, preserving ecosystems, protecting species, and boosting local economies globally.",
        stack : "NextJS - CSS - Google Analytics",
        is_code: true,
        repository:"https://github.com/oxygen-token/web-oxygen",
        deploy : "https://oxygentoken.org/",
        size: "big", //Property to help at the moment of mapping with te right component
    },
    {
        tag: "FRONTEND",
        title:"Legalverse",
        description:"A platform that allows you to connect with lawyers and keep your important files safe.",
        stack: "React - Firebase - Bootstrap",
        repository:"https://github.com/contiguima/LegalVerseVf",
        deploy:"https://legalverse.ar/",
        size: "small",
    },
    {
        tag:"FRONTEND",
        title:"ToDoList",
        description:"A minimalist to do list to learn TailwindCSS",
        stack:"NextJS - TailwindCSS",
        repository:"https://github.com/contiguima/todo-minimalist",
        size: "small",
    },
    {
        tag: "SCIENCE",
        image: oxygenProject,
        title:"SCIENCE POSTER",
        is_code: false,
        description:"Scientific poster presented at the International Congress of Food Science and Technology (CyTAL) 2023. The title was: 'Biodegradable films of cassava and amylose activated with natamycin for the preservation of regional cheeses' directed by PhD Pamela Cuenca.",
        deploy: "https://drive.google.com/file/d/1dbDQWGuk-zd-G6zgSb56pfA87zPNFP6T/view?usp=sharing",
        size: "big",
    
    }

]