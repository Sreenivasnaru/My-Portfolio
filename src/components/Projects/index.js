import Loader from "react-loaders"
import "./index.scss"
import AnimatedLetters from "../AnimatedLetters"
import { useEffect, useState } from "react"
import Portfolio from '../../assets/images/Portfolio.png'
import WanderLust from '../../assets/images/Wanderlust.png'

const Projects = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
      setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 4000)
    }, [])
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
            <div><a href="http://google.com"> <img src={Portfolio} alt="portfolio"/></a></div>
            <div><a href="https://project-u24q.onrender.com"> <img src={WanderLust} alt="portfolio"/></a></div>
            <div><a href="http://google.com"> <img src={Portfolio} alt="portfolio"/></a></div>
            <div><a href="http://google.com"> <img src={Portfolio} alt="portfolio"/></a></div>
        </div>
    </div>
<Loader type="pacman"/>
    </>
    )
}

export default Projects