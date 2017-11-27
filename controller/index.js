module.exports.init = function (app) {
    var getSourcedata = require('./apis')
    app.get('/api/getData', getSourcedata.getDataFromserver);


};