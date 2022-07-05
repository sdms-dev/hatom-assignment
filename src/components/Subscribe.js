import React, { useState } from 'react';
import CustomFunctions from '../helper/customFunction';


export default function Subscribe() {
  const [email, setEmail] = useState('');
  const [emailErr, setEmailErr] = useState('');
  
  const submit = () =>{
    let isValid = true;
    if (email === '') {
      setEmailErr('Please enter valid email');
      isValid = false;
    }
    if (email !== '') {
      if (!CustomFunctions.validateEmail(email)) {
        setEmailErr('Invalid email');
        isValid = false;
      }
    }
    if(isValid){
      setEmailErr('')
      // Subscribe()
    }
  }
  return (
   <>
     <section className="newsletter-wrapper">
      <div className="container">
        <div className="newsletter-inner text-center">
          <h2>Subscribe to Hatom newsletter</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. tort dignissim sit .</p>
          <div className="newsletter-form">
            <input type="email" className="form-control" onChange={(e)=>setEmail(e.target.value)} id="#" placeholder="Enter your email"/>
            <button type="submit" className="btn gradient-btn" onClick={()=>submit()}>Subscribe </button>
          </div>
            <span className='error'>{emailErr}</span>
        </div>
      </div>
    </section>
   </>
  )
}
