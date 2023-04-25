// Dependencias necesarias
const express = require('express');
const app = express();
const morgan = require('morgan') 
const cors = require('cors')
const bodyparser = require('body-parser')
require('./database')

// Configuración para conexiones
const PORT = process.env.PORT || 5000
app.use(morgan('env')) // script
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
app.use(cors({origen: '*'}))

// Rutas
app.use('/city', require('./routes/City.route'))
app.use('/person', require('./routes/Person.route'))

app.listen(PORT, () => {
    console.log(`Servidor MERN en ejecución en http://localhost: ${PORT}`);
});

