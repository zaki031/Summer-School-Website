import './App.css';
import background from "./images/background.png"
import gradiant from "./images/Vector.png"
import logo from "./images/logo.png"
import register from "./images/register.png"
import palm from "./images/palm.png"
import Form from "./components/form"
import circles from "./images/circles.png"
import points from "./images/points.png"
import {FaFacebookF,FaInstagram,FaLinkedinIn,FaTwitter} from "react-icons/fa"
import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css'
function App() {
  useEffect(() => {
    AOS.init({duration:1000});
  }, []);
  return (
    <div className="App">  
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
    Le club Open Minds est un club scientifique estudiantin de l4USTHB crée en 2009.<br/>
ROLE: OMC  Seul représentant Algérien, leader au sein du réseau "CLEF".<br/>
But : Promouvoir le libre open source en Algérie et cultiver l'entraide étudiante.<br/>
Notre slogan : Se qui ne se partage pas se perd <br/>

L'OMC ne se limite pas à être une simple organisation, c'est une famille unie où chaque membre a l'opportunité de vivre des expériences uniques et enrichissantes.
    </p>
</div>
<div className='social'>
        <a href="" data-aos="fade-right"><FaFacebookF/></a>
        <a href="" data-aos="fade-up"><FaInstagram/></a>
        <a href="" data-aos="fade-up"><FaLinkedinIn/></a>
        <a href=""data-aos="fade-left"><FaTwitter/></a>
    </div>
   
    

    
    
    </div>
  );
}

export default App;
