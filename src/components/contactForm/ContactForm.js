import React, { useState } from 'react'
import './ContactForm.css'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

const fieldSx = {
  mb: 2,
  backgroundColor: '#3b4353',
  '& .MuiInputBase-input': {
    color: 'white',
  },
  '& .MuiInputLabel-root': {
    color: '#cbd5e1',
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: '#6f7b9b',
  },
  '& .MuiFilledInput-underline:before': {
    borderBottom: '2px solid #6f7b9b',
  },
  '& .MuiFilledInput-underline:after': {
    borderBottom: '2px solid #258b9e',
  },
}

const submitSx = {
  backgroundColor: '#39b175',
  boxShadow: 'none',
  fontSize: '15px',
  fontWeight: 600,
  '&:hover': {
    backgroundColor: '#6de9ab',
    boxShadow: 'none',
  },
}

const ContactForm = () => {
  const [status, setStatus] = useState('')
  const [emailText, setEmailText] = useState('')
  const [messageText, setMessageText] = useState('')

  const submitForm = (ev) => {
    ev.preventDefault()

    if (!emailText || !messageText) {
      setStatus('Please Complete the form to contact.')
      return
    }

    const form = ev.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()

    xhr.open(form.method, form.action)
    xhr.setRequestHeader('Accept', 'application/json')
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        setEmailText('')
        setMessageText('')
        form.reset()
        setStatus('SUCCESS')
      } else {
        setStatus('ERROR')
      }
    }
    xhr.send(data)
  }

  return (
    <div className="contact-form-wrapper">
      <form
        className="contact-form"
        onSubmit={submitForm}
        action="https://formspree.io/f/xayvejyv"
        method="POST"
      >
        <TextField
          sx={fieldSx}
          type="email"
          name="email"
          label="Email"
          value={emailText}
          onChange={(e) => setEmailText(e.target.value)}
          variant="filled"
          fullWidth
        />

        <TextField
          sx={fieldSx}
          type="text"
          name="message"
          label="Message"
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
          multiline
          minRows={5}
          variant="filled"
          fullWidth
        />

        {status === 'SUCCESS' ? (
          <p className="email-success">Thanks!</p>
        ) : (
          <Button sx={submitSx} type="submit" variant="contained">
            Submit
          </Button>
        )}

        {status === 'ERROR' && <p>Ooops! There was an error.</p>}
        {status && status !== 'SUCCESS' && status !== 'ERROR' && <p>{status}</p>}
      </form>
    </div>
  )
}

export default ContactForm
