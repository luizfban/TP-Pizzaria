import app from './server'; // Link to your server file
import supertest from 'supertest';
const request = supertest(app)

describe('POST /employee', function () {
    describe('with employee already registred', function () {
        beforeEach(() => {
            await request.post('/add-employee')
                .send({ name: 'john', email: 'john_doe@pucminas.br', admin: true, password: '123456' })
        });
        it('try to create user with same email and return error', async done => {
            const response = await request.post('/login')
                .send({ email: 'john_doe@pucminas.br', password: '123456' })
                .set('Accept', 'application/json')

            response.expect(200, {
                token: '1234567'
            }, done);
        })
    });
});