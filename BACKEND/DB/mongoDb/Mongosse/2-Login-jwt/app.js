require('dotenv').config();
const express = require('express');
const app = express();
const userRouter = require('./routers/userRouter');

app.use('/user',userRouter); // Controla todas a requisicao caso não queria defini POST GET ou DELETE use "USE

app.listen(process.env.PORT , () => {console.log("Server Running")});