const mongoose =require('../db/mongo')


const SchemnaPermisos = new mongoose.Schema({

    permiso: {
      type: String,
      required: [true, 'rol es requerido'],
      min: 2,
      max: 30,
    },
    categoria: {
      type: String,
      required: [true, 'Permisos requeridos'],
      min: 2,
      max: 30,
    },
    nombre: {
        type: String,
        required: [true, 'Permisos requeridos'],
        min: 2,
        max: 30,
      },
  
  }, {timestamps: true});
  
  const Permisos = mongoose.model('Permisos', SchemnaPermisos);
  module.exports = Permisos;