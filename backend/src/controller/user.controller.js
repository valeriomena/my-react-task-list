const userctrl = {}
const user = require('../models/user')

userctrl.getUsers = async (req, res) => { 
    const users = await user.find()
    res.json(users)
}

userctrl.createUser = async (req, res) => { 
    const { id, name, email, password, passwordCheck } = req.body;
    const newuser = new user ({ 
        id: id,
        name: name,
        email: email,
        password: password,
        passwordCheck: passwordCheck
    })
    await newuser.save();
    res.jason({message : "El usuario ha sido creado"})
}
userctrl.getUser = async (req, res) => { 
    const user = await user.findById(req.params.id)
    res.jason(user)
}
userctrl.deleteUser = async (req, res) => { 
    await user.findById(req.params.id)
    res.jason({ message: "El usuario ha sido eliminado" })
}
userctrl.updateUser = async (req, res) => {
    const { id, name, email, password, passwordCheck } = req.body;
    await user.findByIdAndUpdate(req.params.id, {
        id,
        name,
        email,
        password,
        passwordCheck
    })
    res.jason({message: "El usuario ha sido actualizado"})
}
module.exports = userctrl;