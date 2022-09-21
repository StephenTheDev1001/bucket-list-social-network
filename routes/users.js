const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const { check, validationResult } = require('express-validator')
const auth = require('../middleware/auth')

const User = require('../models/User')

// @route     GET api/users/rand/:num
// @desc      find random users, not including email and password
// @access    Public
router.get(
  '/rand/:num',
  async (req, res) => {
    try {
      const num = req.params.num
      const users = await User.aggregate([{ $sample: { size: parseInt(num) } }, { $project: { email: 0 } }, { $project: { password: 0 } }])
      res.json(users)
    } catch (err) {
      console.error(err.message)
      res.status(500).send('Server Error')
    }
  })

// @route     GET api/users/:id
// @desc      find a user by id, not including email and password
// @access    Public
router.get(
  '/:id',
  async (req, res) => {
    try {
      const user = await User.findById(req.params.id).select('-email -password')
      res.json(user)
    } catch (err) {
      console.error(err.message)
      res.status(500).send('Server Error')
    }
  }
)

// @route     POST api/users
// @desc      Regiter a user
// @access    Public
router.post(
  '/',
  check('name', 'Please add name').not().isEmpty(),
  check('email', 'Please include a valid email').isEmail(),
  check(
    'password',
    'Please enter a password with 6 or more characters'
  ).isLength({ min: 6 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (user) {
        return res.status(400).json({ msg: 'User already exists' });
      }

      user = new User({
        name,
        email,
        password
      });

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        {
          expiresIn: 360000
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route     DELETE api/users/delete
// @desc      delete user by id
// @access    Private
router.delete(
  '/delete',
  auth,
  async (req, res) => {
    try {
      const user = await User.findById(req.user.id)
      if (!user) {
        return res.status(404).json({ msg: 'User not found' })
      }
      await user.remove()
      res.json({ msg: 'User removed' })
    } catch (err) {
      console.error(err.message)
      res.status(500).send('Server Error')
    }
  }
)

module.exports = router;