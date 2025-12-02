'use client';

import { useSelector, useDispatch } from 'react-redux';
import { setForm, submitForm, resetSubmitted } from '../store/contactSlice';
import { useEffect } from 'react';
import Navbar from '../components/Navbar';

export default function Contact() {
  const dispatch = useDispatch();
  const { name, email, message, submitted } = useSelector((state) => state.contact);

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        dispatch(resetSubmitted());
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [submitted, dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setForm({ field: name, value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && message) {
      dispatch(submitForm());
    }
  };

  return (
    <>
      <Navbar />
      <main>
        <section className="contact-section">
          <h1>Contact Us</h1>

          <div className="contact-info">
            <p>
              <strong>Phone & Delivery number:</strong>{' '}
              <a href="tel:+201021887030">+201021887030</a>
            </p>
            <p>
              <strong>Location:</strong> Sherbin, Dakahlia, Egypt
            </p>
            
            <div className="social-links">
              <a
                href="https://www.facebook.com/gouda.restaurant"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Visit our Facebook page"
                title="Facebook"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  width="32"
                  height="32"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.166 1.791.166v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
              </a>
              <a
                href="https://wa.me/201021887030"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link whatsapp"
                aria-label="Contact us on WhatsApp"
                title="WhatsApp"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  width="32"
                  height="32"
                >
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.348.1-.116.133-.197.198-.33.065-.134.034-.248-.015-.348-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.327 1.125.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="contact-form-wrapper">
            {submitted && (
              <div className="alert alert-success" role="alert">
                Thank you for contacting us! We will get back to you soon.
              </div>
            )}

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  value={name}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  aria-label="Enter your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  value={email}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  aria-label="Enter your email address"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="form-control"
                  value={message}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  aria-label="Enter your message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-submit"
                disabled={submitted}
                aria-label="Submit contact form"
              >
                Send
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
