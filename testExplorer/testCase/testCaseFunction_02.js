const { getMethod, postMethod, deleteMethod } = require("../apiServer/apiUsers");

//test suites
describe("Testing API restful", function () {
    // Test case 1
    it("Test GET from function", async function () {
        getMethod();
    });
    it("Test POST from function", async function () {
        postMethod();
    });
    it("Test DELETE from function", async function () {
        deleteMethod();
    });
});
