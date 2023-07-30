import React, { useState } from 'react';
import Swal from 'sweetalert2'
import axios from 'axios';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Form = () => {
  
  const [formData, setFormData] = useState({
    
    fullName: '',
    discordID:'',
    email: '',
    phoneNumber: '',
    firstField: '',
    second_Field: '',
  });
  const meanings = {
    '1': "Web Dev",
    '2': "Introductionto Ai and Data Science",
    '3': "3D Design",
    '4': "Graphic Design Theory",
    '5': "Introduction to UI/UX Design",
    '6': "Linux",

    // Add more meanings as needed
  };

 

  const [firstField, setfirstField] = useState('');
  const [secondField, setsecondField] = useState('');
  const [where, setWhere] = useState('');

  const apiKey = process.env.REACT_APP_API_URL;
  const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_22iprxm', 'template_mpxi08e', form.current, 'FF57SXaLLS0bpfMdi')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        
    e.preventDefault();
    setFormData({
      fullName: e.target.elements.fullname.value,
      discordID: e.target.elements.discord.value,
      email: e.target.elements.from_email.value,
      phoneNumber:e.target.elements.phone.value,
      firstField:firstField,
      second_Field:secondField,


    });
    
    console.log(form)
    axios
	.post(apiKey, {
    fullName: e.target.elements.fullname.value,
    discordID: e.target.elements.discord.value,
    email: e.target.elements.from_email.value,
    phoneNumber:e.target.elements.phone.value,
    firstField:firstField,
    secondField:secondField,
	})
	.then(response => {
		console.log(response.data);
    if(response.data.code == 200){
      Swal.fire(
        'Good job!',
        'Your Submission has been sent!',
        'success',
  
      )
    }
	})
	.catch(function (error) {
		console.error(error);
	});





    };

  // Step 3: Event handler to capture the selected value
  const handleFirstFieldInputChange = (event) => {
    const value = event.target.value;
    setfirstField(meanings[value]);
  };
  const handlesecondFieldInputChange = (event) => {
    const value = event.target.value;
    setsecondField(meanings[value]);
  };
  const handleWhereInputChange = (event) => {
    const value = event.target.value;
    setWhere(value);
  };


  
  return (

    
    <div>


<form class="form-grid" ref={form} onSubmit={sendEmail}  >
    <div class="form-group">
      <div className='firstname'>
      <label for="fullname"  >Full Name <span>*</span></label>
      <input type="text" placeholder='Enter your fullname' id="fullname" name="fullname" required/>
      </div>
      
    </div>
    <div class="form-group">
      <div className='discord'>
      <label for="discord">Discord ID <span>*</span></label>
      <input type="text" id="discord"placeholder='Enter your discord ID' name="discord" required/>
      </div>
   
    </div>
    <div class="form-group">
      <div className='email'>
      <label for="email">Email Address <span>*</span></label>
      <input type="email" placeholder='Enter your E-mail' id="email" name="from_email" required/>
      </div>

    </div>
    <div class="form-group">
      <div className='phone'>
          <label for="phone">Phone Number <span>*</span></label>
      <input type="tel" id="phone" placeholder='Enter your phone number' name="phone" required/>
      </div>
    
    </div>
    <div class="form-group">
      <div className='fields'>
        <label for="training">First Training Field <span>*</span></label>
        <select name="firstField" value={firstField} onChange={handleFirstFieldInputChange}>

  <option selected value="0">Select your first field</option>
  <option value="w">Web Dev</option>
  <option value="2">Introductionto Ai and Data Science</option>
  <option value="3">3D deisgn </option>
  <option value="4">Graphic Design Theory </option>
  <option value="5">Introduction to UI/UX Design</option>
  <option value="6">Linux</option>
  


</select>

      </div>
      
    </div>
    <div class="form-group">
      <div className='fields'>
        <label for="training">Second Training Field <span>*</span></label>
      <select name='secondField' value={secondField} onChange={handlesecondFieldInputChange}>
  <option selected value="0">Select your second field</option>
  <option value="1">Web Dev</option>
  <option value="2">Introductionto Ai and Data Science</option>
  <option value="3">3D deisgn </option>
  <option value="4">Graphic Design Theory </option>
  <option value="5">Introduction to UI/UX Design</option>
  <option value="6">Linux</option>
</select>

      </div>
      
    </div>

    <div class="form-group">
      <div className='fields'>
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