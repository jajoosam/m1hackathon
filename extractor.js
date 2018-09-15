const vision = require('@google-cloud/vision').v1p3beta1;
const fs = require('fs');

const client = new vision.ImageAnnotatorClient();

const fileName = `1.jpg`;

const request = {
  image: {
    content: fs.readFileSync(fileName)
  },
  feature: {
    type: 'TEXT_DETECTION'
  },
};
client
  .documentTextDetection(request)
  .then(results => {
    extract(results)
  })
  .catch(err => {
    console.error('ERROR:', err);
  });

function extract(data){
  data = data.responses[0].textAnnotations;

  var len = 100;
  var range = 5;

  var p = {};

  function between(x, min, max) {
    return x >= min && x <= max;
  }

  for(i = 0; i<len; i++){
    var r = range;
    var t = false;
    var z = data[i].boundingPoly.vertices[3].y;
      for (var key in p) {
          if (p.hasOwnProperty(key)) {
              if(between(z, parseInt(key)-r, parseInt(key)+r)){
          p[key].push(data[i].description);
          t = true;
          break;
        }
          }
      }
    if(!t){
      p[z.toString()] = [data[i].description]
    }
  }
  fs.writeFile('output.json', JSON.stringify(p), function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
}