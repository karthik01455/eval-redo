const express = require('express');
const { postCompanyInformation,getCompanyInformation } = require('../controllers/api');

//const {validateCreateTask,validatePutTask}=require('../middleware/validate');
const companyRouter = express.Router();
console.log('router called');
companyRouter.post('/save', postCompanyInformation);
companyRouter.get('/save', getCompanyInformation);



module.exports = companyRouter;