import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import React, { useRef, useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const contactStr = 'Contact Me';
    const contactArray = [...contactStr];

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ah2whgm', 'template_fngnuel', form.current, '3qOWflTvAFLSSYEZN')
            .then((result) => {
            console.log(result.text);
            window.location.reload(false)
            }, 
            (error) => {
                console.log(error.text);
            });
    };
    
    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={contactArray} idx={15} />
                    </h1>
                    <p>If you wish to contact me directly here is a form to do so.</p>
                    <div className='contact-form'>
                        <form ref = {form} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='user_name' placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type='email' name='user_email' placeholder='Email' required />
                                </li>
                                <li>
                                    <input type='text' name='subject' placeholder='Subject' required />
                                </li>
                                <li>
                                    <textarea placeholder='Message' name='message' required />
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value='SEND' required />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Contact;