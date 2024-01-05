import Loader from "react-loaders"
import "./index.scss"
import AnimatedLetters from "../AnimatedLetters"
import { useEffect, useState } from "react"
import Portfolio from '../../assets/images/Portfolio.png'
import WanderLust from '../../assets/images/Wanderlust.png'
import Nike from '../../assets/images/Nike.png'
import SimonSays from '../../assets/images/SimonSays.png'

const Projects = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
      setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 4000)
    }, [])

    const [currentProject, setCurrentProject] = useState(0);

  // Array of project images
  const projectImages = [Portfolio, WanderLust, Nike, SimonSays];
  const ProjectLinks = ["http://google.com","https://project-u24q.onrender.com","https://github.com/Sreenivasnaru/Sneakers-app", "https://github.com/Sreenivasnaru/Simon-Says-Game"]
  const ProjectNames = ["My Portfolio", "WanderLust App", "Nike React app", "Simon Says game"]
  // Function to handle next project
  const nextProject = () => {
    setCurrentProject((prevProject) => (prevProject + 1) % projectImages.length);
    console.log(currentProject)
  };

  // Function to handle previous project
  const prevProject = () => {
    setCurrentProject((prevProject) =>
      prevProject === 0 ? projectImages.length - 1 : prevProject - 1
    );
    console.log(currentProject)
  };
    return (
    <>
    <div className="container projects-page">
        <div className="text-zone">
        <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
              idx={15}
            />
          </h1>
        </div>
        <div className="project-cont">
        {projectImages.map((image, index) => (
          <div key={index} style={{ display: index === currentProject ? "block" : "none" }}>
            <a href={ProjectLinks[`${index}`]}>
              <img src={image} alt={`Project ${index}`} />
              <h2>{ProjectNames[`${index}`]}</h2>
            </a>
          </div>
        ))}
        
        <button onClick={prevProject} className="Prev flat-button">Previous</button>
        <button onClick={nextProject} className="Next flat-button">Next</button>
      </div>

        {/* <div className="project-cont">
            <div><a href="http://google.com"> <img src={Portfolio} alt="portfolio"/></a></div>
            <div><a href="https://project-u24q.onrender.com"> <img src={WanderLust} alt="portfolio"/></a></div>
            <div><a href="http://google.com"> <img src={Portfolio} alt="portfolio"/></a></div>
            <div><a href="http://google.com"> <img src={Portfolio} alt="portfolio"/></a></div>
            <div><a href="http://google.com"> <img src={Portfolio} alt="portfolio"/></a></div>
            <div><a href="http://google.com"> <img src={Portfolio} alt="portfolio"/></a></div>
        </div> */}
    </div>
<Loader type="pacman"/>
    </>
    )
}

export default Projects