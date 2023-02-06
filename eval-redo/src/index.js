const express = require('express');
const uuid = require('uuid');
uuid.v4(); 
const saveRouter = require('./routers/save');

//const companyRouter = require('./routers/api');

const app = express();

const PORT = 5000;

app.use(express.json());

app.use('/api', saveRouter);

app.listen(PORT, () => {
    console.log(`Application Started in PORT: ${PORT}`);   
});