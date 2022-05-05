import app from './server'; // Link to your server file
import supertest from 'supertest';
const request = supertest(app)

describe('POST /product', function () {
    it('create product with success', async done => {
        const response = await request.post('/product')
            .send({ name: 'pizza', ingredients: ["ingredient 01", "ingredient 02"] })
            .set('Accept', 'application/json')

        response.expect(200, {
            name: 'john',
            email: 'joe_doe@pucminas.br'
        }, done);
    })

    describe('with product already registred', function () {
        beforeEach(() => {
            await request.post('/product')
                .send({ name: 'pizza 01', ingredients: ["ingredient 01", "ingredient 02"] })
        });
        it('try to create user with same email and return error', async done => {
            const response = await request.post('/product')
                .send({ name: 'pizza 01', ingredients: ["ingredient 01", "ingredient 02"] })
                .set('Accept', 'application/json')

            response.expect(400, {
                error: 'product already exists',
            }, done);
        })
    });
});

describe('GET /product/:id', function () {
    describe('with product already registred', function () {
        beforeEach(() => {
            await request.post('/product')
                .send({ name: 'pizza', ingredients: ["ingredient 01", "ingredient 02"] })
        });
        it('try to get product by id', async done => {
            app.get('/product/1', function(req, res) {
              res.status(200).json({ name: 'pizza', ingredients: ["ingredient 01", "ingredient 02"] });
            });
        })
    });
    it('try to get product by id', async done => {
        app.get('/product/99', function(req, res) {
          res.status(400).json({ error: "product doesn't exists" });;
        });
    })
});

describe('GET /products', function () {
    describe('with product already registred', function () {
        beforeEach(() => {
            await request.post('/product')
                .send({ name: 'pizza', ingredients: ["ingredient 01", "ingredient 02"] })
        });
        it('try to get products', async done => {
            app.get('/products', function(req, res) {
              res.status(200).json([{ name: 'pizza', ingredients: ["ingredient 01", "ingredient 02"] }]);
            });
        })
    });
    it('try to get products', async done => {
        app.get('/products', function(req, res) {
          res.status(200).json({ });;
        });
    })
});