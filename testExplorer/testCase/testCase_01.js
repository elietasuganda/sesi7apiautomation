const request = require("supertest"); // import supertest
const { expect } = require("chai"); // import chai
const baseUrl = require("../globalVariable/baseUrl");

// const url = supertest("https://reqres.in/"); //global variable url
const url = `${baseUrl}`; // define global varible
//test suites
describe("Testing API restful", function () {
    // Test case 1
    it("Test GET", async function () {
        const response = await request(url).get("/users/2");
        //assertation / verifikasi
        expect(response.status).to.equal(200);
        console.log(response);
    });
    // Test case 2
    it("Test POST", async function () {
        const response = await request(url).post("/users");
        //assertation / verifikasi
        expect(response.status).to.equal(201);
        console.log(response);
    });
    // Test case 3
    it("Test DELETE", async function () {
        const response = await request(url).delete("/users/2");
        //assertation / verifikasi
        expect(response.status).to.equal(204);
        console.log(response);
    });
});
