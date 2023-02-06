const express = require('express');
const {postExcelValue,postCompanyValue,postScore,putCEO,putAddress,getTopCompaniesBySector} = require('../controllers/save');
const saveRouter = express.Router();
console.log('save router');

saveRouter.get('/companies',getTopCompaniesBySector);
saveRouter.post('/save/',postExcelValue);
saveRouter.post('save/company',postCompanyValue);
saveRouter.post('save/score',postScore);
saveRouter.put('/address/:id',putAddress);
saveRouter.put('/ceo/:id',putCEO);
console.log('save-router');
module.exports= saveRouter;
/*
http://localhost:5000/api/address/e90a7bc7-47fa-49af-bfa1-391fe7768b56
{
    "address":"Bengaluru"
}
put
*/