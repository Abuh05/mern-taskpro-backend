const mongoose = require('mongoose')



const connectDB = async() =>{
    try {
        mongoose.set("strictQuery", false);
        const connect = await mongoose.connect(process.env.MONGO_URL) 

        console.log(`MongoDB connect`)
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB