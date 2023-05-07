const express = require("express");
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const dbConnect = require("./dbConnection");
const incomeRoutes = require('./routes/incomeRoutes');
const expenseRoutes = require('./routes/expenseRoutes');
const budgetRoutes = require('./routes/budgetRoutes');
const userRoutes = require('./routes/userRoutes');
const cashbookRoutes = require('./routes/cashbookRoutes');

const cors = require("cors");
const app = express();
dotenv.config();
app.use(express.json());
dbConnect();

app.use(cors());

app.use("/income",incomeRoutes);
app.use("/expense",expenseRoutes);
app.use("/budget",budgetRoutes);
app.use("/cashbook",cashbookRoutes);
app.use("/user",userRoutes);



const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});