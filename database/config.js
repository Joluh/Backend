const mongoose = require('mongoose');

const dbConnection = async() => {

    try {
        mongoose.connect(process.env.DB_CNN, {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        
        console.log('DB Online')
    } catch (error) {
        console.log(error);
        throw new Error('Error en bd')
    }

}

module.exports = {
    dbConnection
}