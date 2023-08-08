const { Router } = require('express')
const router = Router()
const {
    createUser,
    getUser,
    getUsers,
    deleteUser,
    updateUser
} = require('../controller/user.controller')

router.route('/')
    .get(getUsers)
    .post(createUser)

router.route('/:id')
    .get(getUser)
    .delete(deleteUser)
    .put(updateUser)

module.exports = router;
