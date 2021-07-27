const router = require('express').Router()
const Controller = require('../controller/progressController')

router.get('/', Controller.getProgress)
router.post('/', Controller.createProgress)
router.patch('/', Controller.updateProgress)

module.exports = router