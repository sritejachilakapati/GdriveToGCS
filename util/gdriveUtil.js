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
    const file = await drive.files.get({
      fileId: fileId,
      alt: "media"
    });
    return file;
  }
}

module.exports = new DriveUtil();