const express = require('express')
const router = express.Router()

const Contact = require('../models/contact')

router.post('/', async (req, res) => {
  try {
    const newMessage = new Contact(req.body)
    await newMessage.save()

    res.status(201).json({
      success: true,
      message: 'Message Saved Successfully',
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