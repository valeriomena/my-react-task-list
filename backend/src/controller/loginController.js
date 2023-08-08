// ./controllers/loginController.js
const User = require('../models/user'); // Asegúrate de tener el modelo 'User' importado correctamente

// Lógica para manejar el inicio de sesión
const handleLogin = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Consultar la base de datos para encontrar el usuario por nombre de usuario y contraseña
    const user = await User.findOne({ name: username, password });

    if (user) {
      // Si se encuentra el usuario, devolverlo en la respuesta
      res.json(user);
    } else {
      // Si no se encuentra el usuario, devolver un mensaje de error
      res.status(404).json({ message: 'Usuario no encontrado' });
    }
  } catch (error) {
    console.log(error); // Agrega este console.log para imprimir el error en la consola
     // Si ocurre un error, devolver un mensaje de error
    res.status(500).json({ message: 'Error en el servidor' });
  }
};

module.exports = {
  handleLogin,
};
