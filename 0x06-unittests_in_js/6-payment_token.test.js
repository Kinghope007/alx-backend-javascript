const getPaymentTokenFromAPI = require('./6-payment_token');
const { expect } = require('chai');

describe('getPaymentTokenFromAPI', () => {
    it('should return a resolved promise with the correct object when success is true', (done) => {
        getPaymentTokenFromAPI(true).then((response) => {
            expect(response).to.eql({ data: 'Successful response from the API' });
            done();
        }).catch(done);
    });
});
