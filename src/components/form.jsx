import React from 'react'
import blur from "../images/blur.png"
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
      <select id="training" placeholder='You can only choose 2 trainings' name="training" required>
        <option value="field1">Field 1</option>
        <option value="field2">Field 2</option>
        <option value="field3">Field 3</option>
      </select>
      </div>
      
    </div>
    <div class="form-group">
      <div className='file'>
        <label for="additional">Anything to Add <span>*</span></label>
      <input type="file" />
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