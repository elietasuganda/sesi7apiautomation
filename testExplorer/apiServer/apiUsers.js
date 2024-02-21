const request = require("supertest"); // import supertest
const { expect } = require("chai"); // import chai
const baseUrl = require("../globalVariable/baseUrl");

const url = `${baseUrl}`; // define global varible

async function getMethod() {
    const response = await request(url).get("/users/2");
    //assertation / verifikasi
    expect(response.status).to.equal(200);
}

async function postMethod() {
    const response = await request(url)
        .post("/users")
        .send({
                "name": "elieta suganda",
                "job": "qa"
        })
    //assertation / verifikasi
    expect(response.status).to.equal(201);
    const id = response.body.id;
    console.log("id after POST:", id);
    //return id: // Return the id;
}

async function deleteMethod() {
    const response = await request(url).delete("/users/2");
    //assertation / verifikasi
    expect(response.status).to.equal(204);
}

module.exports = { getMethod, postMethod, deleteMethod };
