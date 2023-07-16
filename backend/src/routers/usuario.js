const { router } = require('express')
const { router } = require('../../app')
const router = router()
const { createUser,getUser,getUsers,deleteUser,updateUser} = require ('../controller/user.controller')
router.router('/')
    .get(getUsers)
    .post(createUser)

router.router('/:id')
    .get(getUser)
    .delete(deleteUser)
    .put(updateUser)

module.exports = router;