const router = require('express').Router()

const podcastController = require('../controller')

//all podcast get route
router.get('/',podcastController.getallController)


//all podcast get route
router.get('/:type',podcastController.getSingleController)

//all podcast post route
router.post('/',podcastController.postController)


module.exports = router