const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')
const { check, validationResult } = require('express-validator')

const ListItem = require('../models/ListItem')

// @route     Get api/listItems
// @desc      Get all list items
// @access    Public
router.get('/', async (req, res) => {
  try {
    const listItems = await ListItem.find({ user: req.user.id }).sort({ date: -1 })

    res.json(listItems)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

// @route     POST api/listItems
// @desc      Add new list item
// @access    Private
router.post(
  '/',
  auth,
  check('content', 'Content is required').not().isEmpty(),
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const { content } = req.body

    try {
      const newListItem = new ListItem({
        content,
        user: req.user.id
      })

      const listItem = await newListItem.save()

      res.json(listItem)
    } catch (err) {
      console.error(err.message)
      res.status(500).send('Server Error')
    }
  }
)