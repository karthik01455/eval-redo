const apiService = require('../services/api');

async function postCompanyInformation (req, res)
{   
    try
    { console.log('controller called');
        const result= await apiService.postCompanyInformation(req.body.urlLink);

        //console.log('result',result);
       // if(result == null) throw new HTTPError('bad request', 400);
        res.status(201).send(result);
    }
    catch (error){
        if (error) {
            // res.status(error.code).send({ message: error.message });
        } else
            res.status(500).send({ message: error.message });
    }
    //const result= await (apiService.postCompanyInformation(req.body.urlLink));

}
async function getCompanyInformation (req, res)
{   console.log('get controller called');
    const result= await apiService.getCompanyInformation();
    console.log(result);
    res.send(result);
    return result;
}
async function postCompanyDetails (req,res)
{
const companyDetails= await apiService.getCompanyInformation();
const result= await apiService.postCompanyDetails(companyDetails);
return result;
}


 

module.exports = { postCompanyInformation, getCompanyInformation ,postCompanyDetails};