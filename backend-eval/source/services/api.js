

const axios = require('axios');
const { CompanySectorRelation,CompanyDetails }= require('../../database/models');
async function postCompanyInformation(url) {
    console.log('entered into serice');
const response = await axios.get(url);
const file = response.data;

const res= file.split('\n');
//console.log(res);
const result=[];
for (let i=1;i<res.length;i++)
{const temp= res[i].split(',');

let value={

    company_id:temp[0],
    company_sector:temp[1]
};

  
    const tempResult = await CompanySectorRelation.create(value);
    result.push(tempResult);
   
}
return result;


  

}
async function getCompanyInformation() {
    console.log('get function called');
    const result = await (CompanySectorRelation.findAll({raw: true}));
    console.log(result);
    return result;

}
async function postCompanyDetails(company_details)
{ const result=[];
    for(let company_id in company_details)
    {
        const response = await axios.get('"http://54.167.46.10/company/'+company_id);
const file = response.data;
const value= await CompanyDetails.create(file);
result.push(value);



    }
    return result;
}



module.exports = {postCompanyInformation,getCompanyInformation,postCompanyDetails};