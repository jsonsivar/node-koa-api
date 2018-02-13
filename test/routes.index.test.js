process.env.NODE_ENV = "test";

import chai from "chai";
import chaiHttp from "chai-http";
import server from "../src/server/index";

const should = chai.should();

chai.use(chaiHttp);

describe("routes : index", () => {
  describe("GET /", () => {
    it("should return json", (done) => {
	  chai.request(server)
	  .get("/")
	  .end((err, res) => {
	    should.not.exist(err);
	    res.type.should.eql("application/json");
	    res.body.status.should.eql("success");
	    res.body.message.should.eql("hello, world!");
	    done();
	  })
    });
  });
});