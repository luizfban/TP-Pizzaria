import app from './server'; // Link to your server file
import supertest from 'supertest';
const request = supertest(app)

describe('POST /customer', function () {
    it('create customer with success', async done => {
        const response = await request.post('/customer')
            .send({ name: 'john', email: 'john_doe@pucminas.br' })
            .set('Accept', 'application/json')

        response.expect(200, {
            name: 'john',
            email: 'joe_doe@pucminas.br'
        }, done);
    })

    describe('with user already registred', function () {
        beforeEach(() => {
            await request.post('/customer')
                .send({ name: 'john', email: 'john_doe@pucminas.br' })
        });
        it('try to create user with same email and return error', async done => {
            const response = await request.post('/customer')
                .send({ name: 'john', email: 'john_doe@pucminas.br' })
                .set('Accept', 'application/json')

            response.expect(400, {
                error: 'customer already exists',
            }, done);
        })
    });
});