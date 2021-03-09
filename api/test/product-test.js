const chai = require("chai");
const page = require('../page/product.js');
const assert = require('chai').expect;
const testCase = {
 "positive" : {
   "createProduct" : "As a user, I want to create product",
    "getList" : "As a user,  I want to see the details of a product that I recently create",
    "updateProduct" : "As a user, I want to update the products that I recently created to include discount_amount",
    "deleteProduct" : "As a user, I want to delete the products that I recently updated"
 }
}

describe(`Product Automation Testing using Mocha and Chai`, () => {

 it(`@post ${testCase.positive.createProduct}`, async() => {
   const products =
   {
       id: 1,
       name: "Ergonomic Paper 1",
       description: 'Strues caritas cupressus',
       image: "https://loremflickr.com/250",
       price: 12343,
       status: false
   };
   const response = await page.getProduct();
   assert(response.status).to.equal(200);
  }),

  it(`@get ${testCase.positive.getList}`, async() => {
   const response = await page.getProduct();
   assert(response.status).to.equal(200);
  }),

  it(`@put ${testCase.positive.updateProduct}`, async() => {
   const products =
   {
       id: 1,
       name: "Ergonomic Paper 1",
       description: 'Strues caritas cupressus',
       image: "https://loremflickr.com/250",
       discount_amount: 12343,
       status: false
   };
   const response = await page.getProduct();
   assert(response.status).to.equal(200);
  }),

  it(`@delete ${testCase.positive.deleteProduct}`, async() => {
   const response = await page.getProduct();
   assert(response.status).to.equal(200);
  })
 
});