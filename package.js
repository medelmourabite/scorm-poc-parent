var scopackager = require('simple-scorm-packager');

scopackager(
  {
    version: '1.2',
    organization: 'Test Company',
    title: 'Parent Course - 1.2 - with API',
    language: 'fr-FR',
    identifier: '00',
    masteryScore: 80,
    startingPage: 'index.html',
    source: './src',
    package: {
      version: '0.0.2',
      zip: true,
      outputFolder: './scormPackages',
    },
  },
  function (msg) {
    console.log(msg);
  }
);
