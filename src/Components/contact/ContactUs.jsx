import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";
import "./ContactUs.css";
// import logo from "../../assets/logo.jpeg";
import { Helmet } from "react-helmet-async";

const ContactUs = () => {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();  // prevents page reload
  
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,   // fixed: removed extra .meta
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // fixed
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY   // fixed
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          setSuccessMessage("✅ Thank you! Your message has been sent. We’ll get back to you soon.");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          setSuccessMessage("❌ Oops! Something went wrong. Please try again later.");
        }
      );
  };

  return (
    <div className="contactus-body">
      {/* --- SEO METADATA --- */}
      <Helmet>
        <title>Contact Us | Adennil Foundation Nairobi</title>
        <meta
          name="description"
          content="Get in touch with Adennil Foundation. Reach out for volunteer opportunities, partnerships, or to support our prison rehabilitation programs in Kenya."
        />
        <meta
          name="keywords"
          content="contact Adennil Foundation, prison ministry Nairobi, volunteer Kenya, donation inquiries"
        />
      </Helmet>

      {/* Floating Donate Button */}
      <button className="floating-donate pulse" aria-label="Donate">
        <span className="material-symbols-outlined">favorite</span>
        <span className="sr-only">Donate</span>
      </button>

      <main className="contact-main split-layout">
        <div className="contact-container">
          {/* Floating CTA Card */}
          <div className="floating-cta-card">
            <span className="material-symbols-outlined">mail</span>
            <p>We reply within 24 hours</p>
          </div>

          {/* Left: Form */}
          <div className="contact-form-section">
            <h2 className="contact-title">Get in Touch</h2>
            <p className="contact-description">
              We'd love to hear from you. Please fill out this form for any
              inquiries, partnerships, or support.
            </p>

            <form ref={form} onSubmit={sendEmail} className="contact-form">
              <div className="form-row">
                <div className="input-group">
                  <label htmlFor="user_name">Full Name</label>
                  <input
                    id="user_name"
                    type="text"
                    name="user_name"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="user_email">Email Address</label>
                  <input
                    id="user_email"
                    type="email"
                    name="user_email"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
              </div>
              <div className="input-group">
                <label htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  placeholder="What is your message about?"
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Write your message here..."
                  required
                />
              </div>
              <button type="submit" className="submit-btn gradient-btn">
                Send Message
              </button>
            </form>

            {successMessage && (
              <p
                className={`form-feedback ${
                  successMessage.includes("✅") ? "success" : "error"
                }`}
              >
                {successMessage}
              </p>
            )}
          </div>

          {/* Right: Contact Info */}
          <div className="contact-info-section">
            <h3>Contact Details</h3>
            <div className="info-grid">
              <div className="info-card">
                <span className="material-symbols-outlined">location_on</span>
                <p>
                  <strong>Our Address</strong>
                  <br />
                  Nairobi, Kenya
                </p>
              </div>
              <div className="info-card">
                <span className="material-symbols-outlined">call</span>
                <p>
                  <strong>Phone Number</strong>
                  <br />
                  <a href="tel:+254725978804">+254 725 978 804</a>
                </p>
              </div>
              <div className="info-card">
                <span className="material-symbols-outlined">mail</span>
                <p>
                  <strong>Email Address</strong>
                  <br />
                  <a href="mailto:Adennilfoundation@gmail.com">
                    Adennilfoundation@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links Section */}
        <section className="contact-social">
          <h2>Connect With Us</h2>
          <div className="social-links">
            <a
              href="https://facebook.com/adennilfoundation"
              target="_blank"
              rel="noopener noreferrer"
              className="social-item"
            >
              <span className="material-symbols-outlined">facebook</span>{" "}
              Facebook
            </a>
            <a href="#" className="social-item">
              <span className="material-symbols-outlined">alternate_email</span>{" "}
              TikTok
            </a>
            <a
              href="https://instagram.com/adennilfoundation"
              target="_blank"
              rel="noopener noreferrer"
              className="social-item"
            >
              <span className="material-symbols-outlined">photo_camera</span>{" "}
              Instagram
            </a>
            <a href="#" className="social-item">
              <span className="material-symbols-outlined">play_circle</span>{" "}
              Youtube
            </a>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="contact-faq">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h4>How can I volunteer?</h4>
              <p>
                Fill out the form above or email us directly. We’ll guide you
                through the vetting and onboarding process.
              </p>
            </div>
            <div className="faq-item">
              <h4>Where does my donation go?</h4>
              <p>
                100% of your donation fuels reclamation programs including
                vocational tools, therapy, and post-release starter kits.
              </p>
            </div>
            <div className="faq-item">
              <h4>Can organizations partner with you?</h4>
              <p>
                Yes! We actively collaborate with corporates, NGOs, and
                community groups for holistic impact.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-columns">
          <div>
            <h3>Adennil Foundation</h3>
            <p>Reclaiming lives.</p>
          </div>
          <div>
            <h3>Contact Us</h3>
            <ul>
              <li>+254 725 978 804</li>
              <li>Adennilfoundation@gmail.com</li>
            </ul>
          </div>
          <div>
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/programs">Programs</Link>
              </li>
              <li>
                <Link to="/get-involved">Get Involved</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 Adennil Foundation. All rights reserved.</p>
          <p className="developer-credit">
            Developed by <span>Eng. Roberto</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ContactUs;
