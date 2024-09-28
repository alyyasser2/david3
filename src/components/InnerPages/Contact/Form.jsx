import React, { useState } from 'react';

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' }); // Reset the form
      } else {
        setStatus(`Error: ${result.error}`);
      }
    } catch (error) {
      setStatus('Error submitting form. Please try again.');
    }
  };

  return (
    <section className="contact-crev section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="sec-lg-head mb-80">
              <h6 className="dot-titl-non mb-10">Get In Touch</h6>
              <h2 className="fz-50">Let's get in <br /> touch with us.</h2>
              <p className="fz-15 mt-10">If you would like to work with us or just want to get in touch, we’d love to hear from you!</p>
              <div className="phone fz-30 fw-600 mt-30 underline">
                <a href="#0">+1 840 841 25 69</a>
              </div>
              <ul className="rest social-text d-flex mt-60">
                <li className="mr-30">
                  <a href="#0">Facebook</a>
                </li>
                <li className="mr-30">
                  <a href="#0">Twitter</a>
                </li>
                <li className="mr-30">
                  <a href="#0">LinkedIn</a>
                </li>
                <li>
                  <a href="#0">Instagram</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1 valign">
            <div className="full-width">
              <form id="contact-form" onSubmit={handleSubmit}>
                <div className="messages">{status && <p>{status}</p>}</div>
                <div className="controls row">
                  <div className="col-lg-6">
                    <div className="form-group mb-30">
                      <input id="form_name" type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required="required" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-30">
                      <input id="form_email" type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required="required" />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group mb-30">
                      <input id="form_subject" type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <textarea id="form_message" name="message" placeholder="Message" rows="4" value={formData.message} onChange={handleChange} required="required"></textarea>
                    </div>
                    <div className="mt-30">
                      <button type="submit" className="butn butn-md butn-bord radius-30">
                        <span className="text">Let's Talk</span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Form;
