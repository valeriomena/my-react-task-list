const User = require('../models/user');

const userctrl = {};

userctrl.getUsers = async (req, res) => { 
    const users = await User.find();
    res.json(users);
};

userctrl.createUser = async (req, res) => { 
    const { name, email, phone, position, password, passwordCheck } = req.body;
    const newuser = new User ({ 
        name: name,
        email: email,
        position: position,
        phone: phone,
        password: password,
        passwordCheck: passwordCheck
    });
    await newuser.save();
    res.json({ message : "El usuario ha sido creado" });
};

userctrl.getUser = async (req, res) => { 
    const user = await User.findById(req.params.id);
    res.json(user);
};

userctrl.deleteUser = async (req, res) => { 
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "El usuario ha sido eliminado" });
};

userctrl.updateUser = async (req, res) => {
    const { id, name, email, password, passwordCheck } = req.body;
    await User.findByIdAndUpdate(req.params.id, {
        id,
        name,
        email,
        position,
        phone,
        password,
        passwordCheck
    });
    res.json({ message: "El usuario ha sido actualizado" });
};

module.exports = userctrl;
