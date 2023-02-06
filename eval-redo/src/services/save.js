const { CompanySectorRelations, CompanyDetails, CompanyScores } = require('../../database/models');
const axios = require('axios');
async function postExcelValue(url) {
    try {
        console.log(url);
        const response = await axios.get(url);
        const file = response.data;
        const res = file.split('\n');
        const result = [];
        for (let i = 1; i < res.length; i++) {
            const temp = res[i].split(',');
            const value = {
                company_id: temp[0],
                company_sector: temp[1]
            };
            console.log(value);
            const tempResult = await CompanySectorRelations.create(value);
            result.push(tempResult);
        }
        console.log(result);
        return result;
    } catch (error) {
        console.log('Error in service');
    }
}
async function postCompanyValue() {
    const companyValue = await CompanySectorRelations.findAll();
    console.log('***');
    console.log(companyValue);
    console.log('***');
    const result = [];
    for (let i = 0; i < companyValue.length; i++) {   //console.log(companyValue[i].company_id);
        try {
            const value = await axios.get('http://54.167.46.10/company/' + companyValue[i].company_id);

            //console.log(value.data);
            //const list= {...value.data};
            const insertValue = {
                ...value.data,
                address: null,
                numberEmployees: 0
            };
            console.log(insertValue);
            const returnResult = CompanyDetails.create(insertValue);
            result.push(returnResult);
        }
        catch (error) {
            console.log('error in fetch');
        }
    }
    return result;
}

async function postScore() {
    const companyValue = await CompanySectorRelations.findAll();
    const sector = [];
    const result = [];
    companyValue.map(data => {
        if (!(sector.includes(data.company_sector))) {
            sector.push(data.company_sector);
        }
    });
    console.log(sector);
    for (let i = 0; i < sector.length; i++) {   //console.log(companyValue[i].company_id);
        try {
            const companyValue = await axios.get('http://54.167.46.10/sector?name=' + sector[i]);
            //console.log(companyValue);

            for (let j = 0; j < companyValue.data.length; j++) {
                const performanceIndex = companyValue.data[j].performanceIndex;
                // console.log(performanceIndex);
                var cpi, cf, roic, mau;
                for (let key in performanceIndex) {

                    if (performanceIndex[key].key === 'cpi') {
                        cpi = performanceIndex[key].value;
                    }
                    else if (performanceIndex[key].key === 'cf') {
                        cf = performanceIndex[key].value;
                    }
                    else if (performanceIndex[key].key === 'mau') {
                        mau = performanceIndex[key].value;
                    }
                    else if (performanceIndex[key].key === 'roic') {
                        roic = performanceIndex[key].value;
                    }


                }
                // console.log(cpi,cf,roic,mau);
                const score = ((cpi * 10) + (cf / 10000) + (mau * 10) + roic) / 4;
                // console.log(companyValue.data[j].companyId);
                //console.log(score);
                const alreadyPresent = await CompanyScores.findOne({ where: { id: companyValue.data[j].companyId } });
                const companyPresent = await CompanyDetails.findOne({ where: { id: companyValue.data[j].companyId } });
                //console.log('*******'+companyPresent);
                if (companyPresent == null) {
                    const value = {

                        id: companyValue.data[j].companyId,
                        name: null,
                        description: null,
                        tags: null,
                        ceo: null,
                        numberEmployees: null,
                        address: null
                    };
                    await CompanyDetails.create(value);
                }
                //console.log('*'+alreadyPresent+' '+companyPresent);
                try {
                    if (alreadyPresent == null) {
                        const value = CompanyScores.create({ id: companyValue.data[j].companyId, score: score, sector: sector[i] });
                        console.log(sector[i]);
                        result.push(value);
                    }
                } catch (error) {
                    //console.log(error);
                }

            }



        }
        catch (error) {
            console.log(error);
        }
    }
    return result;
}
async function putCEO(id, ceo) {
    const companyValue = await CompanyDetails.findOne({ where: { id: id } });
    const result = await companyValue.update({ ceo: ceo }, { where: { id: id } });
    return result;

}
async function putAddress(id, address) {
    console.log('address called');
    const companyValue = await CompanyDetails.findOne({ where: { id: id } });
    const result = await companyValue.update({ address: address }, { where: { id: id } });
    return result;

}
async function getTopCompaniesBySector(sector) {

    //await postScore();
    console.log('sector********');
    console.log('sector' + sector);
    const companyValue = await CompanyScores.findAll({ where: { sector: sector }, order: [['score', 'DESC']]});
    console.log(companyValue);
    for (let i = 0; i < companyValue.length; i++) {
        const companyScore = await CompanyScores.findOne({ where: { id: companyValue[i].id } });
        companyValue[i].score = companyScore.score;
        const value = await CompanyDetails.findOne({ where: { id: companyValue[i].id } });
        companyValue[i].ceo = value.ceo;
        companyValue[i].name = value.name;
    }
    const result = [];
    let rank = 1;
    for (let i = 0; i < companyValue.length; i++) {
        const value =
        {
            rank: rank,
            name: companyValue[i].name,
            id: companyValue[i].id,
            score: companyValue[i].score,
            ceo: companyValue[i].ceo
            



        };
        result.push(value);
        //console.log( companyValue[i].score);
        rank++;
        // console.log(value);
    }

    console.log(result);
    return result;
}

module.exports = { postExcelValue, postCompanyValue, postScore, putCEO, putAddress, getTopCompaniesBySector };