const should = require("should"); 
const request = require("request"); 
const expect = require("chai").expect; 
const baseUrl = "http://localhost/wordpress"; 
const util = require("util"); 
const assert = require("assert");

describe('returns page',function(){
	it('returns page',function(done){
		request.get({url: baseUrl + '/wp-json/wp/v2/pages/2/'},
            function(error,response,body){
				var bodyObj = JSON.parse(body);
				expect(bodyObj.status).to.equal("publish");
				expect(bodyObj.slug).to.equal("sample-page");
				expect(response.statusCode).to.equal(200);
				console.log(body);
			done(); 
		}); 
	}); 
});
