const mongoose = require('mongoose');
const connectDB = async () => {
    try{
        const connect = await mongoose.connect(`mongodb://127.0.0.1/Movie_Project`);
        console.log(`MongoDB Connect in host ${connect.connection.host}`);
    }catch(err){
        console.log(err);
        return false;
    }
}
module.exports = connectDB;