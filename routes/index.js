var express = require('express');
var router = express.Router();
const driveUtil = require('../util/gdriveUtil');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/files-list', async (req, res, next) => {
  const fileList = await driveUtil.getFiles();
  if (fileList) {
    return res.status(200).json(fileList);    
  }
  return res.status(500).json("Internal Server Error");
});

router.get('/file/:fileId', async(req, res, next) => {
  const file = await driveUtil.downloadFile(req.params.fileId);
  if (file) {
    return res.status(200).json(file);    
  }
  return res.status(500).json("Internal Server Error");
})

module.exports = router;
