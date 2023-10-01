import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import Loader from 'react-loaders';
import emailjs from '@emailjs/browser'
import { useRef } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()
    
    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
      }, [])

      const sendEmail = (e) => {
        e.preventDefault()

        emailjs
        .sendForm(
            'service_qpjngfg',
            'template_jo5ap7i',
            form.current,
            'NxKJcQcUDRTKgNcmy',
        )
        .then(
            () => {
                alert('Message successfully sent!')
                window.location.reload(false)
            },
            () => {
                alert('Failed to send the message, please try again' );
            }
        )
      }

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['C','o','n','t','a','c','t', ' ', 'm','e']}
                        idx={15}
                        />
                        
                    </h1>
                    <p>
                        I'm keen on freelance opportunities, particularly those involving ambitious or substantial projects. However, please feel free to reach out using the form below if you have any other inquiries or requests.
                    </p>

                    <div className='contact-form'>
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='from_name' placeholder='Name' required></input>
                                </li>
                                <li className='half'>
                                    <input type='email' name='from_email' placeholder='Email' required></input>
                                </li>
                                <li>
                                    <input placeholder='Subject' name='subject' type='text' required />
                                </li>
                                <li>
                                    <textarea placeholder='Message'name='message' required ></textarea>
                                </li>
                                <li>
                                    <input  type='submit' className='flat-button' value='SEND' />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                    Sreenivas Naru,
                    <br />
                    India,
                    <br />
                    Andhra Pradesh, 
                    <br />
                    Nandyal
                    <br />
                    <span>sreenunaru672@gmail.com</span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[15.4662289, 78.4876521]} zoom={13}>
                        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
                        <Marker position={[15.4662289, 78.4876521]}>
                        <Popup>I live Here</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Contact