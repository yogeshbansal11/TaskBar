const express = require('express')
const {create, handledelete,get,update} = require('../Controllers/Taskcontroller')

const router  = express.Router()


router.post('/', create);
router.get('/:userId',get)
router.put('/:taskId',update)
router.delete('/:taskId',handledelete)


module.exports = router