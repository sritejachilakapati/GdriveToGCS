const fs = require('fs');
const drive = require('./gdriveClient');

class DriveUtil {
  async getFiles() {
    const fileList = await drive.files.list({
      pageSize: 10,
      q: "mimeType='image/jpeg'"
    });

    return fileList;
  }

  async downloadFile(fileId) {
    const filePath = '../downloads/downloadedImage.png';
    const fileStream = fs.createWriteStream(filePath);
    drive.files.get({
      fileId: fileId,
      alt: "media"
    })
    .on('end', function () {
      console.log('Done');
      return filePath;
    })
    .on('error', function (err) {
      console.log('Error during download', err);
      return null;
    })  
    .pipe(fileStream);
  }
}

module.exports = new DriveUtil();