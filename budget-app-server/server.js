const express = require("express");
const bodyParser = require('body-parser');
const dbConnect = require("./dbConnection");
const incomeRoutes = require('./incomeRoutes');
const expenseRoutes = require('./expenseRoutes');
const budgetRoutes = require('./budgetRoutes')

const app = express();
app.use(bodyParser.json());
dbConnect();

app.use("/income",incomeRoutes);
app.use("/expense",expenseRoutes);
app.use("/budget",budgetRoutes);



const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});