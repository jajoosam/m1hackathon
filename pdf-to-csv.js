var request = require('request');
var fs = require('fs');


var url = 'https://pdftables.com/api?key='+apiKey+'&format=csv';
var req = request.post({encoding: null, url: url}, function (err, resp, body) {
 if (!err && resp.statusCode == 200) {
   fs.writeFile("output.csv", body, function(err) {
     if (err) {
       console.log('error writing file');
     }
   });
 } else {
   console.log(err);
 };
});

var form = req.form();
form.append('file', fs.createReadStream('input.pdf'));