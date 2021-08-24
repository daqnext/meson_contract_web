const {assert} = require('chai');
const {args,ROOTDIR,redis,sqlpool,axios,randomstring} =require("../src/global.js");

 

describe('Args', function() {
  it('show all args', function() {
      assert.notEqual(args,null);
  });
});


describe('Redis', function() {

    it('key-value', async function() {
      let result= await redis.set("testkey","value",'ex',10);
      assert.equal(result,"OK"); 
    });


    it('increase', async function() {
      // Test implementation goes here
      let result_set= await redis.set("test-increase",0,'ex',30);
      let result_inr= await redis.incr("test-increase");
      assert.notEqual(result_inr,null);
    });


    it('hashset', async function() {
      // Test implementation goes here
      let result=await redis.hset('testhashset',1,"dasd","xx","fasdf");
      assert.notEqual(result,null);
      redis.expire('testhashset',50);
    });
 
});


describe('sqldb', function() {
  it('pool-query', async function() {
      //const [rows,fields] = await sqlpool.query("select * from test");
      //await sqlpool.query("INSERT INTO test VALUES ('xdd','asdf')");
      
  });
 
});


describe('axios', function() {

    it('get', async function() {
      //var result=await axios.get('https://baidu.com');
      //console.log(result);            
    });
 
});


describe('randomstring', function() {

  it('20len', async function() {
      let rs=randomstring.generate(20);
      assert.equal(rs.length,20);
  });

});


 





