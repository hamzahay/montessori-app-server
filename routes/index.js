const router = require('express').Router()
const userRoutes = require('./userRoutes')
const { authenticate } = require('../middleware/authentication')
const progressRoutes = require('./progressRoutes')
const UserController = require('../controller/userController')

router.get('/', (req, res, next) => {
  res.status(200).json({ message: 'Welcome to Montessori App Server' })
})
router.use('/', userRoutes)
router.use(authenticate)
router.get('/check', UserController.checkPin)
router.use('/progress', progressRoutes)

module.exports = router;