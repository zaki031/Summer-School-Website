import './App.css';
import background from "./images/background.png"
import gradiant from "./images/Vector.png"
import logo from "./images/logo.png"
import register from "./images/register.png"
import palm from "./images/palm.png"
import Form from "./components/form"
import circles from "./images/circles.png"
import points from "./images/points.png"
import {FaFacebookF,FaInstagram,FaLinkedinIn,FaTwitter,FaDiscord} from "react-icons/fa"
import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css'
import { Helmet } from 'react-helmet';
import omclogo from './images/omc-logo.png'

function App() {
  useEffect(() => {
    AOS.init({duration:1000});
  }, []);
  return (
    <div className="App"> 
      <Helmet>
        <title>Summer School</title>

        <link rel="icon" type="image/png" href={omclogo} />

        <meta name="description" content="Welcome to OMC's Summer School" />
      </Helmet>
    
    <img src={circles} data-aos="fade-up" alt='circles' id="circles"></img>
    <div className='container'>
    <img src={points} data-aos="zoom-in" id='p1' alt="img"></img>
    <img src={points} data-aos="zoom-in" id='p2'alt="img"></img>
    <img src={points} data-aos="zoom-in" id='p3'alt="img"></img>
    <img src={points} data-aos="zoom-in" id='p4'alt="img"></img>
    <img id="logo" data-aos="fade-up"  src={logo}  alt='logo' />


    <img id="register"  data-aos="fade-up"  src={register}  alt='register ' />
    <img id="palm"  data-aos="fade-right" src={palm}  alt='background ' />

    <img id="bg" data-aos="zoom-in"  src={background}  alt='background ' />
    <div className='h' data-aos="fade-up">
    <p >to be a part of this amazing summer.</p>

      <p id='h'>Fill the information carefully</p>
    </div>



    </div>
    <Form/>
    <br/>
    
    <div className='f-p' >    <p >
    Open Minds est un club scientifique estudiantin de l'USTHB crée en 2009.<br/>
Omc  est le seul représentant Algérien, leader au sein du réseau "CLEF".<br/>
Son but est de promouvoir le libre open source en Algérie et cultiver l'entraide étudiante.<br/>

<p id='slogon'><b>Ce Qui Ne Se Partage Pas Se Perd</b></p>

L'Omc ne se limite pas à être une simple organisation, c'est une famille unie où chaque membre a l'opportunité de vivre des expériences uniques et enrichissantes.<br/>

    </p>
</div>
<div className='social'>
        <a href="https://www.facebook.com/openmindsclub/" data-aos="fade-right"><FaFacebookF/></a>
        <a href="https://www.instagram.com/openmindsclub/" data-aos="fade-up"><FaInstagram/></a>
        <a href="https://www.linkedin.com/company/open-minds-club" data-aos="fade-up"><FaLinkedinIn/></a>
        <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Fclubopenminds%2F"data-aos="fade-left"><FaTwitter/></a>
        <a href="https://discord.com/invite/xtr3xrT9hw" data-aos="fade-up"><FaDiscord/></a>
    </div>
   
    

    
    
    </div>
  );
}

export default App;
