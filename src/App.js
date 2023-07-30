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
function App() {
  return (
    <div className="App">  
    <img src={circles} alt='circles' id="circles"></img>
    <div className='container'>
    <img src={points} id='p1' alt="img"></img>
    <img src={points} id='p2'alt="img"></img>
    <img src={points} id='p3'alt="img"></img>
    <img src={points} id='p4'alt="img"></img>
    <img id="logo"  src={logo}  alt='logo' />


    <img id="register"  src={register}  alt='register ' />
    <img id="palm"  src={palm}  alt='background ' />

    <img id="bg"  src={background}  alt='background ' />
    <div className='h'>
    <p >to be a part of this amazing summer.</p>

      <p id='h'>Fill the information carefully</p>
    </div>



    </div>
    <Form/>
    <br/>
    <div className='f-p' >    <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</div>
    <div className='social'>
        <a href=""><FaFacebookF/></a>
        <a href=""><FaInstagram/></a>
        <a href=""><FaLinkedinIn/></a>
        <a href=""><FaTwitter/></a>
    </div>

    
    
    </div>
  );
}

export default App;
