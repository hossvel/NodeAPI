let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;
chai.use(chaiHttp);
const url= 'http://localhost:3000';

describe('get all products: ',()=>{

	it('should get all products', (done) => {
		chai.request(url)
			.get('/products')
			.end( function(err,res){
                //console.log(res.body)
				expect(res).to.have.status(200);
				done();
			});
	});

});

describe('Insert a products with error: ',()=>{

	it('should receive an ok', (done) => {
		chai.request(url)
			.post('/products')
			.send(
                {
                   title: "HP",
                   description: "HP Pavilon 3000",
                   price: 3000,
                   company: "HP"
                    
                    
                }

                )
			.end( function(err,res){
                //console.log(res.body)
				expect(res).to.have.status(200);
				done();
			});
	});

});
