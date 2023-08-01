import { Link } from 'react-router-dom'
//import LogoTitle from '../../assets/images/logo-s.png'
import './index.scss'
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const name = " Ryan"
    const nameArray = [...name]
    const job = "Developer looking for work"
    const jobArray = [...job]

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m </span>
                    {/* <img src={LogoTitle} alt="developer" /> */}
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                    <br />
                    <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={5} />
                    </h1>
                    <h2>Computer Science Graduate</h2>
                    <Link to="/contact" className='flat-button'>CONTACT ME</Link>
                </div>

            </div>
            <Loader type="pacman" />
        </>
    )
};

export default Home