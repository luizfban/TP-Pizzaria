import app from './server'; // Link to your server file
import supertest from 'supertest';
const request = supertest(app)

describe('POST /employee', function () {
    it('create employee with success', async done => {
        const response = await request.post('/add-employee')
            .send({ name: 'john', email: 'john_doe@pucminas.br', admin: true, password: '123456' })
            .set('Accept', 'application/json')

        response.expect(200, {
            name: 'john',
            email: 'joe_doe@pucminas.br'
        }, done);
    })

    describe('with employee already registred', function () {
        beforeEach(() => {
            await request.post('/add-employee')
                .send({ name: 'john', email: 'john_doe@pucminas.br', admin: true, password: '123456' })
        });
        it('try to create user with same email and return error', async done => {
            const response = await request.post('/add-employee')
                .send({ name: 'john', email: 'john_doe@pucminas.br', admin: true, password: '123456' })
                .set('Accept', 'application/json')

            response.expect(400, {
                error: 'employee already exists',
            }, done);
        })
    });
});

describe('GET /employee/:id', function () {
    describe('with employee already registred', function () {
        beforeEach(() => {
            await request.post('/employee')
                .send({ name: 'john', email: 'john_doe@pucminas.br', admin: true, password: '123456' })
        });
        it('try to get employee by id', async done => {
            app.get('/employee/1', function(req, res) {
              res.status(200).json({ name: 'john', email: 'john_doe@pucminas.br', admin: true);
            });
        })
    });
    it('try to get employee by id', async done => {
        app.get('/employee/99', function(req, res) {
          res.status(400).json({ error: "employee doesn't exists" });;
        });
    })
});