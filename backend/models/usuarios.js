const mongoose =require('../db/mongo')


const SchemnaRol = new mongoose.Schema({

    rol: {
      type: String,
      required: [true, 'rol es requerido'],
      min: 2,
      max: 30,
    },
    permisos: {
      type: String,
      required: [true, 'Permisos requeridos'],
      min: 2,
      max: 30,
    },
   
  
  }, {timestamps: true});
  
  const rol = mongoose.model('Rol', SchemnaRol);
  module.exports = rol;