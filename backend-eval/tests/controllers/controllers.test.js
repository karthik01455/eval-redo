const apiController = require('../../source/controllers/api');
const apiService = require('../../source/services/api');
describe('postCompanyInformation', () => {
    it('should return an tasks which is created', async () => {
        jest.spyOn(apiService, 'postCompanyInformation').mockResolvedValue([{
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
        await apiController.postCompanyInformation(mockReq, mockRes);
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
describe('getCompanyInformation', () => {
    it('Should return all company Information when it is called', async () => {
        jest.spyOn(apiService, 'getCompanyInformation').mockResolvedValue([{
            'id': 1,
            'company_id': '95b5a067-808a-44a9-a490-b4ef8a045f61',
            'company_sector': 'Automobile',
            'createdAt': '2023-02-03T08:46:47.038Z',
            'updatedAt': '2023-02-03T08:46:47.038Z'
        }]);
        const mockReq = {

        };
        const mockRes = {
            send: jest.fn(),
            status: jest.fn().mockReturnThis()
        };
        await apiController.getCompanyInformation(mockReq, mockRes);
        expect(mockRes.send).toBeCalledWith([{
            'id': 1,
            'company_id': '95b5a067-808a-44a9-a490-b4ef8a045f61',
            'company_sector': 'Automobile',
            'createdAt': '2023-02-03T08:46:47.038Z',
            'updatedAt': '2023-02-03T08:46:47.038Z'
        }]);
    });
});
describe('postCompanyDetails', () => {
    it('Should return company Information when it is called', async () => {
        jest.spyOn(apiService, 'getCompanyInformation').mockResolvedValue([{
            'id': 1,
            'company_id': '95b5a067-808a-44a9-a490-b4ef8a045f61',
            'company_sector': 'Automobile',
            'createdAt': '2023-02-03T08:46:47.038Z',
            'updatedAt': '2023-02-03T08:46:47.038Z'
        }]);
        jest.spyOn(apiService, 'postCompanyDetails').mockResolvedValue([{
            'id': 1,
            'company_id': '95b5a067-808a-44a9-a490-b4ef8a045f61',
            'company_sector': 'Automobile',
            'createdAt': '2023-02-03T08:46:47.038Z',
            'updatedAt': '2023-02-03T08:46:47.038Z'
        }]);
        const mockReq = {

        };
        const mockRes = {
            send: jest.fn(),
            status: jest.fn().mockReturnThis()
        };
        await apiController.postCompanyDetails(mockReq, mockRes);
        expect(mockRes.send).toBeCalledWith([{
            'id': 1,
            'company_id': '95b5a067-808a-44a9-a490-b4ef8a045f61',
            'company_sector': 'Automobile',
            'createdAt': '2023-02-03T08:46:47.038Z',
            'updatedAt': '2023-02-03T08:46:47.038Z'
        }]);
    });
});
describe('postCompanyInformation', () => {
    it('should throw error when urlLink is invalid', async () => {
        jest.spyOn(apiService, 'postCompanyInformation').mockImplementation(() => {
            throw new Error();
        });
        const mockReq = {
            body: {
                urlLink: 'erhttps://store-0001.s3.amazonaws.com/input.csv'
            }
        };
        const mockRes = {
            send: jest.fn(),
            status: jest.fn().mockReturnThis()
        };
        await apiController.postCompanyInformation(mockReq, mockRes);

        expect(mockRes.status).toBeCalledWith();
    });
});