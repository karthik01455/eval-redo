const { CompanySectorRelation, CompanyDetails } = require('../../database/models');
const apiService = require('../../source/services/api');
const axios = require('axios');
describe('postCompanyInformation', () => {
    it('should return list of objects', async () => {
        const mockValue = [{
            'id': 1,
            'company_id': '95b5a067-808a-44a9-a490-b4ef8a045f61',
            'company_sector': 'Automobile',
            'createdAt': '2023-02-03T08:46:47.038Z',
            'updatedAt': '2023-02-03T08:46:47.038Z'
        }];

        jest.spyOn(axios, 'get').mockResolvedValue(mockValue);
        jest.spyOn(CompanySectorRelation, 'create').mockResolvedValue(mockValue);
        const body = {
            urlLink: 'https://store-0001.s3.amazonaws.com/input.csv'
        };
        const returnedValue = await apiService.postCompanyInformation(body);


        expect(returnedValue).toBe(mockValue);
    });
});
describe('getTasks', () => {
    it('should return list of objects', async () => {
        const mockValue = [{
            'id': 1,
            'company_id': '95b5a067-808a-44a9-a490-b4ef8a045f61',
            'company_sector': 'Automobile',
            'createdAt': '2023-02-03T08:46:47.038Z',
            'updatedAt': '2023-02-03T08:46:47.038Z'
        }];

        jest.spyOn(CompanySectorRelation, 'findAll').mockResolvedValue(mockValue);

        const returnedValue = await apiService.getCompanyInformation();


        expect(returnedValue).toBe(mockValue);
    });
});
describe('postCompanyDetails', () => {
    it('should return list of objects', async () => {
        const mockValue = [{
            'id': 1,
            'company_id': '95b5a067-808a-44a9-a490-b4ef8a045f61',
            'company_sector': 'Automobile',
            'createdAt': '2023-02-03T08:46:47.038Z',
            'updatedAt': '2023-02-03T08:46:47.038Z'
        }];
        const csvValue = {data :{data: 'company_id,company_sector\n' +
        '95b5a067-808a-44a9-a490-b4ef8a045f61,Automobile\n' +
        '46e1d061-e39d-4d5c-8e0e-3fa5d45d9efc,Software\n' +
        '728ae3b7-89dd-41eb-9608-4fc20c839d4c,Automobile\n' +
        '8727cc61-8c4b-4285-8853-2db808392c04,Software\n' +
        'e90a7bc7-47fa-49af-bfa1-391fe7768b56,Software\n' +
        'b6472c52-732a-4fd2-a463-ae604c0a2c79,Software\n' +
        'ed4fc91d-8ac8-4882-a9e9-071a88423ca5,Retail\n' +
        'c144e397-bef9-4aa1-aef4-842f4da44f9c,Retail\n' +
        '24ca0568-d946-4c14-a0d7-eb81295b7a9e,Retail\n' +
        '296247ef-c553-4704-ad67-0878c87ff729,Banking\n' +
        'c1634e16-17c8-42f6-8513-b8c50a4f230c,Banking\n' +
        'e245b12c-5b3b-4a83-a4ad-391974b34a37,Banking'
    }
    };

        jest.spyOn(axios, 'get').mockResolvedValue(csvValue);
       
        jest.spyOn(CompanyDetails, 'create').mockResolvedValue(mockValue);

        const returnedValue = await apiService.postCompanyDetails('https://store-0001.s3.amazonaws.com/input.csv');
        console.log('*****' + returnedValue.type);
        expect(returnedValue).toBe(mockValue);
    });
});
