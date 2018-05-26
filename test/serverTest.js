var request = require('supertest');

describe('server', function () {
    var server;
    beforeEach(function () {
        server = require('../app/server/server.js');
    });
    afterEach(function () {
        server.close();

    });

    it('should have valid API response on /apihomepage', function testSlash(done) {
        
        const index = 'news'
        const value = 'english'
        
        request(server)
            .get(`/apihomepage?index=${index}&value=${value}`)
            .expect(200)
            .expect(function (res) {
                res.body.should.exist();
            }, done());
    });

});
