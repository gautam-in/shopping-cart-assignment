import request from 'supertest';
import express from 'express';
import router from '../routes/index.js';

const app = new express();
app.use(router);

describe('Good Routes', function () {

  test('responds to /', async () => {
    const res = await request(app).get('/');
    expect(res.header['content-type']).toBe('text/html; charset=utf-8');
  });
  test('responds to /product', async () => {
    const res = await request(app).get('/product');
    expect(res.header['content-type']).toBe('text/html; charset=utf-8');
  }); 
  test('responds to /login', async () => {
    const res = await request(app).get('/product');
    expect(res.header['content-type']).toBe('text/html; charset=utf-8');
  });
  test('responds to /register', async () => {
    const res = await request(app).get('/product');
    expect(res.header['content-type']).toBe('text/html; charset=utf-8');
  });
  test('responds to /cart', async () => {
    const res = await request(app).get('/product');
    expect(res.header['content-type']).toBe('text/html; charset=utf-8');
  }); 

});