const express = require('express');
const cors = require('cors');
const app = express();

//Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use(require('../src/routes/index'));

app.listen(3000);
console.log('Server on port 3000');