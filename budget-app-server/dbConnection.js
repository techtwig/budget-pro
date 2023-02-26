//connect the server to mongoDB database
const mongoose = require("mongoose");
mongoose.set('strictQuery', false)

const dbConnect = async () => {
    try{
    await mongoose.connect("mongodb://127.0.0.1:27017/tech_twig_budget_app",
        {
            useNewUrlParser: true
        });
    console.log('Database connected successfully');
    }catch (error){
    console.log(error.message);
    }
};

module.exports = dbConnect;