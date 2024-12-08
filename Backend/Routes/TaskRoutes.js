const express = require('express')
const {handlecreate, handledelete,handleget,handleupdate} = require('../Controllers/Taskcontroller')

const router  = express.Router()


router.post('/', handlecreate);
router.get('/:userId',handleget)
router.put('/:taskId',handleupdate)
router.delete('/:taskId',handledelete)


module.exports = router