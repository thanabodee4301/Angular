var axios = require('axios');
jest.mock('axios');
var {
  OverAll
} = require('./api.overall');

describe("League method test", () => {
  test("should be return expected result", async (done) => {
    var resultExpect = "overALL";
    var mockResult = {
      data: {
        data: {
          OverAll: "overALL",
          statusCode: 200
        }
      }
    };
    axios.get.mockResolvedValue(mockResult);
    var result = await OverAll('serie-a','1');
    expect(result).toEqual(resultExpect);
    done();
  })
})