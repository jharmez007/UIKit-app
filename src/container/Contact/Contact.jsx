import React, { useState } from 'react';

import './contact.scss';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', phone: '' });

  const { firstName, lastName, email, message, phone } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value })
  }

  return (
    <div id="Contact" className="md:mx-24 md:px-24 app__flex min-h-screen">
      <div className="flex flex-col m-4 w-full">
        <h2 className="app__headtext justify-self-start">Contact</h2>
        <div className="contact__input app__flex flex-col">
          <p className="contact__text">Fill out this form to reach us.</p>
          <div className="contact__form app__flex flex-col">
            <div className="contact__form-first_lastnames app__flex sm:gap-4">
              <div className="app__flex flex-1">
                <input className="p-text" type="text" placeholder="First name" name="name" value={firstName} onChange={handleChangeInput} />
              </div>
              <div className="app__flex flex-1">
                <input className="p-text" type="text" placeholder="Last name" name="name" value={lastName} onChange={handleChangeInput} />
              </div>
            </div>
            <div className="app__flex">
              <input className="p-text" type="email" placeholder="Email" name="email" value={email} onChange={handleChangeInput} />
            </div>
            <div className="app__flex">
              <input className="p-text" type="text" placeholder="Phone (optional)" name="phone" value={phone} onChange={handleChangeInput} />
            </div>
            <div>
              <textarea
                className="p-text"
                placeholder="Your Message"
                value={message}
                name="message"
                onChange={handleChangeInput} 
              />
            </div>
            <button type="button">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

