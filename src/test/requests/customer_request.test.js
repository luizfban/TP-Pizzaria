import app from './server'; // Link to your server file
import supertest from 'supertest';
const request = supertest(app)

describe('POST /signup', function () {
    it('create customer with success', async done => {
        const response = await request.post('/signup')
            .send({ name: 'john', email: 'john_doe@pucminas.br' })
            .set('Accept', 'application/json')

        response.expect(200, {
            name: 'john',
            email: 'joe_doe@pucminas.br'
        }, done);
    })

    describe('with user already registred', function () {
        beforeEach(() => {
            await request.post('/signup')
                .send({ name: 'john', email: 'john_doe@pucminas.br' })
        });
        it('try to create user with same email and return error', async done => {
            const response = await request.post('/signup')
                .send({ name: 'john', email: 'john_doe@pucminas.br' })
                .set('Accept', 'application/json')

            response.expect(400, {
                error: 'customer already exists',
            }, done);
        })
    });
});

describe('GET /customer/:id', function () {
    describe('with customer already registred', function () {
        beforeEach(() => {
            await request.post('/customer')
                .send({ name: 'john', email: 'john_doe@pucminas.br' })
        });
        it('try to get customer by id', async done => {
            app.get('/customer/1', function(req, res) {
              res.status(200).json({ name: 'john', email: 'john_doe@pucminas.br' });
            });
        })
    });
    it('try to get customer by id', async done => {
        app.get('/customer/99', function(req, res) {
          res.status(400).json({ error: "customer doesn't exists" });;
        });
    })
});