const { google } = require('googleapis');

const auth = new google.auth.GoogleAuth({
  keyFile: process.env.GOOGLE_APPLICATION_CREDENTIALS,
  scopes: ['https://www.googleapis.com/auth/drive.readonly'],
});

const gdriveClient = google.drive({
  version: 'v3',
  auth: auth
});

module.exports = gdriveClient;