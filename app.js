var express = require('express'), controller = require('./controller');
var app = express();
//Express configuration
app.set('port', process.env.PORT || 3000);
//cross configuration
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
controller.init(app);
//app.get('/', (request, response) => {
//    response.send('index.html');
//});
app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
//# sourceMappingURL=app.js.map