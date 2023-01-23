import React from 'react'

import './contact.css'
import {MdOutlineMailOutline} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com'
import { useRef } from 'react'



const Contact = () => {

  const form  =  useRef();  


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ly3qhpj', 'template_9vewm1n', form.current, 'Epd26cBEEKhUUHtZo')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
        
      e.target.reset();

  }





  return (
    <section id='contact'>

      <h5>Get In touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineMailOutline className='contact__option-icon'></MdOutlineMailOutline>
            <h4>Email</h4>
            <h4>rastogitarang5@gmail.com</h4>
            <a href="mailto:rastogitarang5@gmail.com" target='_blank'>Send a mail</a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h4>+917534099359</h4>
            <a href="https://api.whatsapp.com/send?phone+917534099359"  target='_blank'>Send a message</a>
          </article>
  
        </div>


        <form ref={form} onSubmit={sendEmail}>
          <input className='form__input' type='text' name='name' placeholder='Your Full Name' required />
          <input className='form__input'  type='email' name='email' placeholder='Your Email' required/>
          <textarea className='form__textarea' name='message' rows='7' placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>


      </div>
    </section>
  )
}

export default Contact