import './App.css';
import background from "./images/background.png"
import gradiant from "./images/Vector.png"
import logo from "./images/logo.png"
import register from "./images/register.png"
import palm from "./images/palm.png"
import Form from "./components/form"
import points from "./images/points.png"
import Footer from "./components/footer"
function App() {
  return (
    <div className="App">  

    <div className='container'>
    <img src={points} id='p1'></img>
    <img src={points} id='p2'></img>
    <img src={points} id='p3'></img>
    <img src={points} id='p4'></img>
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
    <Footer/>

    
    
    </div>
  );
}

export default App;
