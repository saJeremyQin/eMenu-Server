
// Require the mongoose library
const mongoose = require('mongoose');

module.exports = {

    connect: DB_HOST => {
        // useNewUrlParser is only used in an earlier version of Mongoose and has been replaced

        // mongoose.connect(DB_HOST);
        mongoose.connect(DB_HOST, {
            // useNewUrlParser: true,
            useUnifiedTopology: true
        });
          

        // Log an error if we fail to connect
        mongoose.connection.on('error', err => {
            console.error(err);
            console.log('MongoDB connection error. Please make sure MongoDB is running.');
            process.exit();
        });
    },
    close: () => {
        mongoose.connection.close();
    }
};