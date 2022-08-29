const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')
const { check, validationResult } = require('express-validator')

const ListItem = require('../models/ListItem')

// @route     Get api/listItems
// @desc      Get all user list items
// @access    Public
router.get('/', auth, async (req, res) => {
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

// @route     PUT api/listItems/:id
// @desc      Update list item
// @access    Private
router.put('/:id', auth, async (req, res) => {
  const { content, completed } = req.body

  const listItemFields = {}
  if (content) listItemFields.content = content
  if (completed === false) listItemFields.completed = completed
  if (completed) listItemFields.completed = completed

  try {
    let listItem = await ListItem.findById(req.params.id)

    if (!listItem) return res.status(404).json({ msg: 'List item not found' })

    // Make sure user owns list item
    if (listItem.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' })
    }

    listItem = await ListItem.findByIdAndUpdate(
      req.params.id,
      { $set: listItemFields },
      { new: true }
    )

    res.json(listItem)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

// @route     DELETE api/listItems/:id
// @desc      Delete list item
// @access    Private

router.delete('/:id', auth, async (req, res) => {
  try {
    let listItem = await ListItem.findById(req.params.id)

    if (!listItem) return res.status(404).json({ msg: 'List item not found' })

    // Make sure user owns list item
    if (listItem.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' })
    }

    await ListItem.findByIdAndRemove(req.params.id)

    res.json({ msg: 'List item removed' })
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

module.exports = router