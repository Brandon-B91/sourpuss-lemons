import React from 'react'

const contactP = {
    fontSize: 'var(--fontMd)',
    color: 'var(--black)',
    textAlign: 'center'
}

const ContactForm = () => {
  return (
    <>
    <p className='contactP' style={contactP}>Want to book us for an event?</p>
      <form name="contact" netlify className='contactForm'>
      <p>
        <label>
           <input type="text" name="name" placeholder=" " required/> <span>Name</span>
        </label>
      </p>
      <p>
        <label>
         <input type="email" name="email" placeholder=" " pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required/>  <span>Email</span>
        </label>
      </p>
      <p>
        <label>
           <input type="textarea" name="textarea" placeholder=" " cols="30" rows="5" required/> <span>Details</span>
        </label>
      </p>
      <p>
        <button type="submit">Submit</button>
      </p>
    </form>
    </>
  
  );
}

export default ContactForm