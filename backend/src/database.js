// Crear Base de Datos
const mongoose = require('mongoose');
const MONGODB_URI = 'mongodb://localhost/dbVacunados'
// const MONGODB_URI = 'mongodb+srv://admin:admin12345@vacunados.rxjw09b.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then((db) => { 
    console.log(`Conexión a MongoDB exitosa a ${db.connection.name}`);
})
.catch((error) => {
    console.error(`Error de conexión a MongoDB:`, error);
});

module.exports = mongoose