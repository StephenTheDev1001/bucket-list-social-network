const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')
const { check, validationResult } = require('express-validator')

const Comment = require('../models/Comment')
const User = require('../models/User')

//@route    GET api/comments
//@desc     Get all logged in user comments
//@access   Public
router.get('/', async (req, res) => {
  try {
    const comments = await Comment.find({ recipient: req.user.id }).sort({ date: -1 })
    res.json(comments)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

//@route    POST api/comments
//@desc     Add new comment
//@access   Private
router.post(
  '/',
  auth,
  check('content', 'content is required').not().isEmpty(),
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const { content, recipient } = req.body

    try {
      r = await User.findById(recipient)
      const newComment = new Comment({
        content,
        user: req.user.id,
        recipient: r
      })

      const comment = await newComment.save()

      res.json(comment)
    } catch (err) {
      console.error(err.message)
      res.status(500).send('Server Error')
    }
  })

//@route   DELETE api/comments/:id
//@desc    Delete comment
//@access  Private
router.delete('/:id', auth, async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id)

    if (!comment) {
      return res.status(404).json({ msg: 'Comment not found' })
    }

    if (comment.user.toString() !== req.user.id && comment.recipient.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' })
    }

    await Comment.findByIdAndRemove(req.params.id)

    res.json({ msg: 'Comment removed' })
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

module.exports = router