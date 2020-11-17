const path = require('path');

module.exports = path.dirname(process.mainModule.filename);

// TODO Refactor process.mainModule to require.main
