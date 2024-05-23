const express = require('express')
const router = express.Router()
const User = require('../models/users').default
const multer = require('multer')

// Image upload
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filemane: function (req, file, cb) {
    cb(
      null,
      file.fieldname + '_' + DataTransfer.now() + '_' + file.originalname
    )
  },
})

var upload = multer({
  storage: storage,
}).single('image')

// Insert an user into database route
router.post('/add', upload, (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    image: req.file.filemane,
  })
  user.save((err) => {
    if (err) {
      res.json({ message: err.message, type: 'danger' })
    } else {
      res.session.message = {
        type: 'Success',
        message: 'User added successfully !',
      }
      res.redirect('/')
    }
  })
})

router.get('/', (req, res) => {
  // res.send('Home page...')
  res.render('index', { title: 'Home page' })
})

router.get('/add', (req, res) => {
  res.render('add_user', { title: 'Add user' })
})

module.exports = router
