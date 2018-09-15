const fs = require('fs');
var pdfUtil = require('pdf-to-text');
var pdf_path = "input.pdf";
 
pdfUtil.pdfToText(pdf_path, function(err, data) {
  if (err) throw(err);
  fs.writeFile('pdf.txt', JSON.stringify(p), function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
});