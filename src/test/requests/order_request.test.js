import app from './server'; // Link to your server file
import supertest from 'supertest';
const request = supertest(app)

describe('POST /order', function () {
    beforeEach(() => {
        await request.post('/product')
            .send({ name: 'pizza 01', ingredients: ["ingredient 01", "ingredient 02"] })
        await request.post('/product')
            .send({ name: 'pizza 02', ingredients: ["ingredient 03", "ingredient 04"] })
        await request.post('/signup')
            .send({ name: 'john', email: 'aluno@pucminas.br' })
    })
    it('create order with success', async done => {
        const response = await request.post('/order')
            .send({ customerEmail: 'aluno@pucminas.br', products: [1, 2] })
            .set('Accept', 'application/json')

        response.expect(200, {
            customerEmail: 'aluno@pucminas.br',
            products: [1, 2]
        }, done);
    })
});

describe('PUT /order/:id', function () {
    describe('with order already registred', function () {
        beforeEach(() => {
            await request.post('/product')
                .send({ name: 'pizza 01', ingredients: ["ingredient 01", "ingredient 02"] })
            await request.post('/product')
                .send({ name: 'pizza 02', ingredients: ["ingredient 03", "ingredient 04"] })
            await request.post('/signup')
                .send({ name: 'john', email: 'aluno@pucminas.br' })
        })
        it('try to update order by id', async done => {
            app.put('/order/1', function(req, res) {
                res.expect(200, { customerEmail: 'aluno@pucminas.br', products: [1, 2]}, done);
            });
        })
    });
    it('try to update order by id', async done => {
        app.put('/order/99', function(req, res) {
          res.status(400).json({ error: "order doesn't exists" });;
        });
    })
});

describe('GET /orders', function () {
    describe('with order already registred', function () {
        beforeEach(() => {
            await request.post('/order')
                .send({ name: 'pizza', ingredients: ["ingredient 01", "ingredient 02"] })
        });
        it('try to get orders', async done => {
            app.get('/orders', function(req, res) {
              res.status(200).json([{ customerEmail: 'aluno@pucminas.br', products: [1, 2]}]);
            });
        })
    });
    it('try to get orders', async done => {
        app.get('/orders', function(req, res) {
          res.status(200).json({ });;
        });
    })
});