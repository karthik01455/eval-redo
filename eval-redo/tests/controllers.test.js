const {CompanyDetails, CompanyScores} = require('../database/models');
const apiController = require('../src/controllers/save');
const apiService = require('../src/services/save');
const axios = require('axios');
describe('postExcelValue', () => {
    it('should return values got from excel values', async () => {
        jest.spyOn(apiService, 'postExcelValue').mockResolvedValue([{
            'id': 1,
            'company_id': '95b5a067-808a-44a9-a490-b4ef8a045f61',
            'company_sector': 'Automobile',
            'createdAt': '2023-02-03T08:46:47.038Z',
            'updatedAt': '2023-02-03T08:46:47.038Z'
        }]);
        const mockReq = {
            body: {
                urlLink: 'https://store-0001.s3.amazonaws.com/input.csv'
            }
        };
        const mockRes = {
            send: jest.fn(),
            status: jest.fn().mockReturnThis()
        };
        await apiController.postExcelValue(mockReq, mockRes);
        expect(mockRes.status).toBeCalledWith(201);
        expect(mockRes.send).toBeCalledWith([{
            'id': 1,
            'company_id': '95b5a067-808a-44a9-a490-b4ef8a045f61',
            'company_sector': 'Automobile',
            'createdAt': '2023-02-03T08:46:47.038Z',
            'updatedAt': '2023-02-03T08:46:47.038Z'
        }]);
    });
});
describe('postExcelValue', () => {
    it('should return values after posting excel values', async () => {
        jest.spyOn(apiService, 'postCompanyValue').mockResolvedValue([{
            'id': 1,
            'company_id': '95b5a067-808a-44a9-a490-b4ef8a045f61',
            'company_sector': 'Automobile',
            'createdAt': '2023-02-03T08:46:47.038Z',
            'updatedAt': '2023-02-03T08:46:47.038Z'
        }]);
        const mockReq = {
            body: {
                urlLink: 'https://store-0001.s3.amazonaws.com/input.csv'
            }
        };
        const mockRes = {
            send: jest.fn(),
            status: jest.fn().mockReturnThis()
        };
        await apiController.postCompanyValue(mockReq, mockRes);
        expect(mockRes.status).toBeCalledWith(201);
        expect(mockRes.send).toBeCalledWith([{
            'id': 1,
            'company_id': '95b5a067-808a-44a9-a490-b4ef8a045f61',
            'company_sector': 'Automobile',
            'createdAt': '2023-02-03T08:46:47.038Z',
            'updatedAt': '2023-02-03T08:46:47.038Z'
        }]);
    });
});
describe('postScore', () => {
    it('should return score after calculating it ', async () => {
        jest.spyOn(apiService, 'postScore').mockResolvedValue([{
            'id': 1,
            'company_id': '95b5a067-808a-44a9-a490-b4ef8a045f61',
            'company_sector': 'Automobile',
            'createdAt': '2023-02-03T08:46:47.038Z',
            'updatedAt': '2023-02-03T08:46:47.038Z'
        }]);
        const mockReq = {
            body: {
                urlLink: 'https://store-0001.s3.amazonaws.com/input.csv'
            }
        };
        const mockRes = {
            send: jest.fn(),
            status: jest.fn().mockReturnThis()
        };
        await apiController.postScore(mockReq, mockRes);
        expect(mockRes.status).toBeCalledWith(201);
        expect(mockRes.send).toBeCalledWith([{
            'id': 1,
            'company_id': '95b5a067-808a-44a9-a490-b4ef8a045f61',
            'company_sector': 'Automobile',
            'createdAt': '2023-02-03T08:46:47.038Z',
            'updatedAt': '2023-02-03T08:46:47.038Z'
        }]);
    });
});
describe('postScore', () => {
    it('should return score after posting it ', async () => {
        jest.spyOn(apiService, 'postScore').mockResolvedValue([{
            'id': 1,
            'company_id': '95b5a067-808a-44a9-a490-b4ef8a045f61',
            'company_sector': 'Automobile',
            'score': 95,
            'createdAt': '2023-02-03T08:46:47.038Z',
            'updatedAt': '2023-02-03T08:46:47.038Z'
        }]);
        const mockReq = {
            body: {
                urlLink: 'https://store-0001.s3.amazonaws.com/input.csv'
            }
        };
        const mockRes = {
            send: jest.fn(),
            status: jest.fn().mockReturnThis()
        };
        await apiController.postScore(mockReq, mockRes);
        expect(mockRes.status).toBeCalledWith(201);
        expect(mockRes.send).toBeCalledWith([{
            'id': 1,
            'company_id': '95b5a067-808a-44a9-a490-b4ef8a045f61',
            'company_sector': 'Automobile',
            'score': 95,
            'createdAt': '2023-02-03T08:46:47.038Z',
            'updatedAt': '2023-02-03T08:46:47.038Z'
        }]);
    });
});
describe('putAddress', () => {
    it('should return address after changing it', async () => {
        jest.spyOn(apiService, 'putAddress').mockResolvedValue([{
            'id': 1,
            'company_id': '95b5a067-808a-44a9-a490-b4ef8a045f61',
            'company_sector': 'Automobile',
            'address': 'Bengaluru',
            'createdAt': '2023-02-03T08:46:47.038Z',
            'updatedAt': '2023-02-03T08:46:47.038Z'
        }]);
        const mockReq = {
            body: {
                id: '95b5a067-808a-44a9-a490-b4ef8a045f61'
            }
        };
        const mockRes = {
            send: jest.fn(),
            status: jest.fn().mockReturnThis()
        };
        await apiController.putAddress(mockReq, mockRes);
        
        expect(mockRes.send).toBeCalledWith([{
            'id': 1,
            'company_id': '95b5a067-808a-44a9-a490-b4ef8a045f61',
            'company_sector': 'Automobile',
            'address': 'Bengaluru',
            'createdAt': '2023-02-03T08:46:47.038Z',
            'updatedAt': '2023-02-03T08:46:47.038Z'
        }]);
    });
});
describe('getTopCompaniesBySector', () => {
    it('should return companies in descending order when sector is given as input', async () => {
        jest.spyOn(apiService, 'getTopCompaniesBySector').mockResolvedValue([{
            'rabk': 1,
            'company_id': '95b5a067-808a-44a9-a490-b4ef8a045f61',
            'company_sector': 'Automobile',
            'score': 95,
            'createdAt': '2023-02-03T08:46:47.038Z',
            'updatedAt': '2023-02-03T08:46:47.038Z'
        }]);
        const mockReq = {
            body: {
                id: '95b5a067-808a-44a9-a490-b4ef8a045f61'
            }
        };
        const mockRes = {
            send: jest.fn(),
            status: jest.fn().mockReturnThis()
        };
        await apiController.getTopCompaniesBySector(mockReq, mockRes);
        
        expect(mockRes.send).toBeCalledWith([{
            'id': 1,
            'company_id': '95b5a067-808a-44a9-a490-b4ef8a045f61',
            'company_sector': 'Automobile',
            'address': 'Bengaluru',
            'createdAt': '2023-02-03T08:46:47.038Z',
            'updatedAt': '2023-02-03T08:46:47.038Z'
        }]);
    });
});

