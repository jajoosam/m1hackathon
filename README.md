# HackureOne Scripts

`extractor.js` - uses Google Cloud Vision APIs to parse an image, and then makes blocks of each line based on each text entities' four boundaries. 

API Pricing: $3/1000 images


`pdf-to-json.js` - uses Mozilla's open source PDF.js library to extract JSON from a PDF/A files.

`pdf-to-text.js` - uses xpdf to extract PDD/A files as simple text.

`pdf-to-csv.js` -  uses PDFTables API to convert a PDF/A file to CSV, can export an excel sheet too. This is worth considering due to an encryption layer on PDFs, which open source extractors can't work with.

API Pricing: $30/1000 pages