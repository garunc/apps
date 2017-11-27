var EasyXml = require('easyxml');
var sqlconn = require('./../db/tdpromise.js');

var serializer = new EasyXml({
	singularize: true,
	//rootElement: 'response',
	dateFormat: 'ISO',
	manifest: true
});

module.exports = {


	getDataFromserver: function (req, response) {
		//var name_of_restaurants = [{ name: "arun", city: "hospet"},{name:"abc",city:"hello"}];
		////res.set('Content-Type', 'text/xml');
        //      res.send(serializer.render(name_of_restaurants));
        //sqlconn.query();
        return sqlconn.query('SELECT * FROM recipe').then(function (res) {
           // console.log('==>' + res);
            var data = serializer.render(res);

            return response.send(data);
        });

	}
}