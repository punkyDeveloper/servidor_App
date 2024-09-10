const mongoose = require('mongoose');
// mongodb+srv://elsantihg:santihg123@proyectos.iqyucof.mongodb.net/

try {
    await mongoose.connect('mongodb+srv://elsantihg:santihg123@proyectos.iqyucof.mongodb.net/erpandpos?retryWrites=true&w=majority');
  } catch (error) {
    handleError(error);
  }