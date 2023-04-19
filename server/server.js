const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
//const { logger } = require('./middleware/logEvents');
const PORT = process.env.PORT || 5000;
const dicomParser = require('dicom-parser');
const cv = require('opencv4nodejs');

// custom middleware logger
//app.use(logger);

// Cross Origin Resource Sharing
app.use(cors);

// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json 
app.use(express.json());

// body-parser middleware
app.use(bodyParser.json({ limit: '50mb'} ));

// get request

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });

  async function convertDicomToTiff(dicomBuffer, tiffFilePath) {
    // parse the DICOM buffer
    const dataSet = dicomParser.parseDicom(dicomBuffer);
  
    // extract the pixel data from the DICOM dataset
    const pixelDataElement = dataSet.elements.x7fe00010;
    const pixelData = new Uint16Array(
      dicomBuffer,
      pixelDataElement.dataOffset,
      pixelDataElement.length / 2
    );
  
    // create a Mat object from the pixel data
    const rows = dataSet.uint16('x00280010');
    const cols = dataSet.uint16('x00280011');
    const mat = new cv.Mat(rows, cols, cv.CV_16UC1, pixelData);
  
    // save the Mat object as a TIFF file
    await cv.imwriteAsync(tiffFilePath, mat);
  }


app.post('/api/upload', (req, res) => {
    const dicomImage = req.body.dicomImage;
  
    // Check if the file is a DICOM image (has .dcm extension)
    const isDicomImage = req.body.fileName && req.body.fileName.endsWith('.dcm');
  
    if (isDicomImage) {
      // Process the DICOM image data here
      convertDicomToTiff(dicomImage, 'test.tiff');
      console.log(dicomImage);
      res.send({ success: true });
    } else {
      // File is not a DICOM image
      res.status(400).send({ error: 'Invalid file type. Expected .dcm file.' });
    }
  });
  
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});