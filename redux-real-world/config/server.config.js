'use strict';

const rewrite = require('connect-modrewrite');
const core = require('./core.config');

module.exports = {
  "server": core.basePath,  // ドキュメントルート
  "port": 3000,             // ポート
  "middleware": [
    rewrite([
      '^[^\\.]*$ /index.html [L]'
    ])
  ],
  "ghostMode": {
    "clicks": true,
    "scroll": true,
    "forms": {
      "submit": true,
      "inputs": true,
      "toggles": true
    }
  }
};
