const{findScore,findFrame}=('./bowlingScoreFrameFinder');
describe('Calculating Score', () => {
    it('Should return score when inpout is array', () => {
        const result= findScore([10,10,10,10,10,10,10,10,10,10,5,5]);
        expect(result).toEqual(290);
                 
    });
});
describe('Calculating Score', () => {
    it('Should return score when inpout is arra', () => {
        const result= findScore([10,10,10,10,10,10,10,10,10,10,1,1]);
        expect(result).toEqual(282);
                     
    });
});