const express = require("express");
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const dbConnect = require("./dbConnection");
const incomeRoutes = require('./incomeRoutes');
const expenseRoutes = require('./expenseRoutes');
const budgetRoutes = require('./budgetRoutes');
const userRoutes = require('./userRoutes');

const cors = require("cors");
const app = express();
dotenv.config();
app.use(bodyParser.json());
dbConnect();

app.use(cors());

app.use("/income",incomeRoutes);
app.use("/expense",expenseRoutes);
app.use("/budget",budgetRoutes);
app.use("/user",userRoutes);



const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});