import React from 'react'
import {BsCaretDownFill} from "react-icons/bs"
const Form = () => {
  return (
    <div>


<form class="form-grid">
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
      <input type="email" placeholder='Enter your E-mail' id="email" name="email" required/>
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
        <label for="training">Training Fields <span>*</span></label>
        <div className='hh'>
           <select id="training" placeholder='You can only choose 2 trainings' name="training" required>
      <option value="0">Choose your first Field</option>
        <option value="field1">Python</option>
        <option value="field2">3D Design</option>
        <option value="field3">Web Dev</option>
        <option value="field3">Introduction to UI/UX Design</option>
        <option value="field3">Introduction to Ai and Data Science</option>
      </select>
      <BsCaretDownFill id='arrow' />
        </div>
     
      </div>
      
    </div>
    <div class="form-group">
      <div className='fields'>
        <label for="training">Training Fields <span>*</span></label>
      <select>
  <option selected value="0">Pure CSS Select</option>
  <option value="1">No Wrapper</option>
  <option value="2">No JS</option>
  <option value="3">Nice!</option>
</select>

      </div>
      
    </div>
    <div class="submit-btn">
      <button type="submit">Register</button>
    </div>
  </form>


    
    </div>
  )
}

export default Form