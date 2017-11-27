var tp = require('tedious-promises');
var dbConfig = require('./config.json');
var TYPES = require('tedious').TYPES;
tp.setConnectionConfig(dbConfig);


var query = function(quer){
return tp.sql(quer)
.execute()
.then(function(results) {

 // console.log(results);
    return results;
  
}).fail(function(err) {
  return err;
});
};

module.exports = {
    query: query
   };
