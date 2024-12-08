const express = require('express');
const app = express();
const taskRoutes = require('./routes/TaskRoutes')
require('dotenv').config();
const cors = require('cors');
const sequelize = require('./models/db');


app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});


//routes
app.use('/api',taskRoutes);



const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});