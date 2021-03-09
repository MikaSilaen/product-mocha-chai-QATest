let mongoose = require("mongoose");
let Product = require('../data/product');

const supertest = require('supertest');
const env = require('dotenv').config();

const api = supertest(process.env.OMDB_BASE_URL);

const getProduct = () => api.get('')
 .set('Content-Type', 'application/json')
 .set('Accept', 'application/json')
 .set('Authorization', 'e3479c4068b18c10ce220f5665f1c206bff27b3e9a722bcc35cf52e36708a1fb')
 
module.exports = {
   getProduct,
}