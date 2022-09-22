const mongoose = require('mongoose');
const _URI='mongodb://localhost:27017'
//La connection à la bd est une fonction asychrone
const connect=async()=>{
    try {
       await mongoose.connect(_URI);
       console.log('db is successfully connected');
    } catch (error) {
        console.log('Connection to DB is failed'+error);
    }
}
module.exports=connect;