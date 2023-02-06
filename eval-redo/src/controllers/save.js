const saveService = require('../services/save');
async function postExcelValue(req, res) {
    try {
        const result = await (saveService.postExcelValue(req.body.urlLink));
        res.status(201).send(result);
    } catch (error) {
        console.log('error on postExcelValue');
    }


}
async function postCompanyValue(req, res) {
    try {
        const result = await (saveService.postCompanyValue());
        res.status(201).send(result);
    } catch (error) {
        console.log('error on postCompanyValue');
    }
}
async function postScore(req, res) {
    try {
        const result = await (saveService.postScore());
        res.status(201).send(result);
    } catch (error) {
        console.log('error on postScore');

    }
}
async function putCEO(req, res) {
    try {
        const { id } = req.params;
        const result = await (saveService.putCEO(id, req.body.ceo));
        res.status(201).send(result);
    } catch (error) {
        console.log('error on putCEO');
    }
}
async function putAddress(req, res) {
    try {
        console.log('address-called');
        const { id } = req.params;
        const result = await (saveService.putAddress(id, req.body.address));
        res.status(204).send(result);
    } catch (error) {
        console.log('error on putAddress');
    }
}

async function getTopCompaniesBySector(req, res) {
    try {
        console.log('getTopCompaniesBySector called');
        console.log(req.query.sector);
        const sector = req.query.sector;
        const result = await (saveService.getTopCompaniesBySector(sector));

        res.status(201).send(result);
    }
    catch (error) {
        console.log('error on getTopCompaniesBySector');

    }
}

module.exports = { postExcelValue, postCompanyValue, postScore, putCEO, putAddress, getTopCompaniesBySector };

