const express = require('express');

const companyRouter = require('./routers/api');

const app = express();

const PORT = 4012;


app.use(express.json());

app.use('/api', companyRouter);

app.listen(PORT, () => {
    console.log(`Application Started in PORT: ${PORT}`);   
});