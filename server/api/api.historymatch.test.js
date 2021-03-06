var axios = require('axios');
jest.mock('axios');
var {
  historymatch
} = require('./api.historymatch.js');

describe("History method test", () => {
  test("should be return expected result", async (done) => {
    var resultExpect = "MyEXPECT123";
    var mockResult = {
      data: {
        data: {
          historymatch: "MyEXPECT123",
          statusCode: 200
        }
      }
    };
    axios.get.mockResolvedValue(mockResult);
    var result = await historymatch('serie-a','a9ef824ba73b0a57e982df21467c3efc');
    expect(result).toEqual(resultExpect);
    done();
  })
})