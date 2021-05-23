import { useRef } from 'react'
import classes from './contact-form.module.css'

function ContactForm() {
  const enteredEmail = useRef()
  const enteredName = useRef()
  const enteredMessage = useRef()

  const sendMessageHandler = (event) => {
    event.preventDefault()
    fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({
        email: enteredEmail.current.value,
        name: enteredName.current.value,
        message: enteredMessage.current.value
      }),
      headers: { 'Content-Type': 'application/json' }
    })
  }

  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" required ref={enteredEmail} />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" required ref={enteredName} />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea id="message" rows="5" required ref={enteredMessage} />
        </div>
        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
    </section>
  )
}

export default ContactForm