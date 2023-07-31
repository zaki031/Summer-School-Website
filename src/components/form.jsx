import React, { useState } from 'react';
import Swal from 'sweetalert2'
import axios from 'axios';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import AOS from "aos";
import 'aos/dist/aos.css'

const Form = () => {
  

  const [firstField, setfirstField] = useState('');
  const [secondField, setsecondField] = useState('');
  const [where, setWhere] = useState('');

  const apiKey = process.env.REACT_APP_API_URL;
  const form = useRef();

    const sendEmail = (e) => {
      
      e.preventDefault();
  
      emailjs.sendForm(process.env.REACT_APP_SERVICE_KEY, process.env.REACT_APP_TEMPLATE_KEY, form.current, process.env.REACT_APP_EMAILJS_API_KEY)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        

        
  
        
         
    console.log(form)
    axios
	.post(apiKey, {
    fullName: e.target.elements.from_name.value,
    discordID: e.target.elements.discord.value,
    email: e.target.elements.from_email.value,
    phoneNumber:e.target.elements.phone.value,
    firstField:firstField,
    secondField:secondField,
    where:where
	})
	.then(response => {
		console.log(response.data);
    if(response.data.code == 200){
      Swal.fire(
        'You Got Accepted in Summer School!',
        'Check your email!',
        'success',
  
      )
    }
    if(response.data.code == 429){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: '',
        footer: '<a href="">You are allowed to register once in every minute</a>'
      })
    }
	})
	.catch(function (error) {
		console.error(error.text);
	});





    };

  // Step 3: Event handler to capture the selected value
  const handleFirstFieldInputChange = (event) => {
    const value = event.target.value;
    setfirstField(value);
  };
  const handlesecondFieldInputChange = (event) => {
    const value = event.target.value;
    setsecondField(value);
  };
  const handleWhereInputChange = (event) => {
    const value = event.target.value;
    setWhere(value);
  };


  
  return (

    
    <div>


<form class="form-grid" ref={form} onSubmit={sendEmail}  >
    <div class="form-group">
      <div className='firstname' data-aos="fade-right">
      <label for="fullname"  >Full Name <span>*</span></label>
      <input type="text" placeholder='Enter your fullname' id="fullname" name="from_name" required/>
      </div>
      
    </div>
    <div class="form-group">
      <div className='discord ' data-aos="fade-left">
      <label for="discord">Discord ID <span>*</span></label>
      <input type="text" id="discord"placeholder='Enter your discord ID' name="discord" required/>
      </div>
   
    </div>
    <div class="form-group">
      <div className='email' data-aos="fade-right">
      <label for="email">Email Address <span>*</span></label>
      <input type="email" placeholder='Enter your E-mail' id="email" name="from_email" required/>
      </div>

    </div>
    <div class="form-group">
      <div className='phone' data-aos="fade-left">
          <label for="phone">Phone Number <span>*</span></label>
      <input type="tel" id="phone" placeholder='Enter your phone number' name="phone" required/>
      </div>
    
    </div>
    <div class="form-group">
      <div className='fields' data-aos="fade-right">
        <label for="training">First Training Field <span>*</span></label>
        <select name="firstField" value={firstField} onChange={handleFirstFieldInputChange}>

  <option selected value="0">Select your first field</option>
  <option value="Web Dev">Web Dev</option>
  <option value="Introduction to Ai and Data Science">Introduction to Ai and Data Science</option>
  <option value="3D deisgn">3D deisgn </option>
  <option value="Graphic Design Theory">Graphic Design Theory </option>
  <option value="Introduction to UI/UX Design">Introduction to UI/UX Design</option>
  <option value="Linux">Linux</option>
  


</select>

      </div>
      
    </div>
    <div class="form-group">
      <div className='fields' data-aos="fade-left">
        <label for="training">Second Training Field <span>*</span></label>
      <select name='secondField' value={secondField} onChange={handlesecondFieldInputChange}>
  <option selected value="0">Select your second field</option>
  <option value="Web Dev">Web Dev</option>
  <option value="Introductionto Ai and Data Science">Introductionto Ai and Data Science</option>
  <option value="3D deisgn">3D deisgn </option>
  <option value="Graphic Design Theory">Graphic Design Theory </option>
  <option value="Introduction to UI/UX Design">Introduction to UI/UX Design</option>
  <option value="Linux">Linux</option>
</select>

      </div>
      
    </div>

    <div class="form-group">
      <div className='fields' data-aos="fade-right">
        <label for="training">Where did you hear about us? <span>*</span></label>
      <select name='secondField' value={where} onChange={handleWhereInputChange}>
  <option selected value="0">Select your second field</option>
  <option value="Instgram">Instgram</option>
  <option value="Discord">Discord</option>
  <option value="LinkedIn">LinkedIn</option>
  <option value="Friend">A friend</option>

</select>

      </div>
      
    </div>
    <div class="submit-btn">
      <button type="submit"  >Register</button>
    </div>
  </form>



    
    </div>
  )
}

export default Form
