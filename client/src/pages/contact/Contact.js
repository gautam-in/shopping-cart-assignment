import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { toast } from "react-toastify";
import { Card } from "../../components";
import styles from "./Contact.module.scss";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    toast.success("submitted successfully!");
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };
  return (
    <section>
      <div className={`container ${styles.contact}`}>
        <h2>Contact us</h2>
        <div className={styles.section}>
          <form onSubmit={sendEmail}>
            <Card cardClass={styles.card}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
              />

              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="subject">Name</label>
              <input
                type="text"
                id="subject"
                value={subject}
                required
                onChange={(e) => setSubject(e.target.value)}
              />

              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                value={message}
                required
                onChange={(e) => setMessage(e.target.value)}
              />

              <button type="submit" className="--btn --btn-primary">
                Send Message
              </button>
            </Card>
          </form>
          <div className={styles.details}>
            <Card cardClass={styles.card2}>
              <h3>Our Contact Information</h3>
              <p>Fill the form or contact us via other channels listed below</p>
              <div className={styles.icons}>
                <p>
                  <FaPhoneAlt />
                  <span>+91 112233445</span>
                </p>
                <p>
                  <FaEnvelope />
                  <span>Support@subkabazaar.com</span>
                </p>
                <p>
                  <GoLocation />
                  <span>Hyderabad, India</span>
                </p>
                <p>
                  <FaTwitter />
                  <span>@baliswathi</span>
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
