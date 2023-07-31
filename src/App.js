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
    En 2009, des étudiants ont organisé la première Install Party en Algérie, donnant naissance au club Open Minds, qui depuis 15 ans promeut l'esprit de partage et de collaboration lié au Libre et à l'Open Source avec le slogan "Ce qui ne se partage pas se perd". En tant que membre de CLEF, l'OMC joue un rôle essentiel en promouvant les valeurs du Libre au sein de la communauté estudiantine en Algérie et à l'échelle internationale, étendant ainsi son influence dans la promotion du Libre à l'échelle internationale
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
