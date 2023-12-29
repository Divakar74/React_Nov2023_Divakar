import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      });
    
      const { name, email, message } = formData;
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here using the formData state
        console.log(formData);
      };
  return (
    <div className="container mt-12">
      <div className="row">
        <div className="col-md-10">
          {/* Contact Information */}
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Contact Information</h5>
              <p className="card-text">
                Address: 44 Nehru Street,India
              </p>
              <p className="card-text">Phone: +91 98654 56734 </p>
              <p className="card-text">Email: gogrocery@gmail.com</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card mt-4">
            <div className="card-body">
              <h5 className="card-title">Feedback Form</h5>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name:
                  </label>
                  <input
                   type="text"
                   className="form-control"
                   id="name"
                   placeholder="Enter your name"
                   value={name}
                   onChange={handleChange}
                 />

                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email-address:
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="name@example.com"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Feedback:
                  </label>
                  <textarea
                     className="form-control"
                     id="message"
                     rows="3"
                     placeholder="Enter your message"
                     value={message}
                     onChange={handleChange}
                   ></textarea>

                </div>
                <button type="submit" className="btn btn-primary">
                   Submit Feedback
                 </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map */}
        
      </div>
    </div>
  );
};

export default ContactUs;