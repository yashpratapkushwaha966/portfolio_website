const express = require('express')
const router = express.Router()
const nodemailer = require('nodemailer')

const Contact = require('../models/contact')

router.post('/', async (req, res) => {
  try {
    const newMessage = new Contact(req.body)
    await newMessage.save()

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: 'New Contact Form Message',
      html: `
        <h2>New Portfolio Contact Message</h2>
        <p><b>Name:</b> ${req.body.fullName}</p>
        <p><b>Email:</b> ${req.body.email}</p>
        <p><b>Mobile:</b> ${req.body.mobile}</p>
        <p><b>Title:</b> ${req.body.professionalTitle}</p>
        <p><b>Message:</b> ${req.body.message}</p>
      `,
    })

    res.status(201).json({
      success: true,
      message: 'Message Saved & Email Sent',
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: 'Server Error',
    })
  }
})

module.exports = router