'use strict';

const fs = require('fs');
const path = require('path');
const cert = fs.readFileSync(path.resolve(__dirname, '../../KEY.key'));
const jwt = require('jsonwebtoken');

const verifyJwt = (token, id) => new Promise((resolve, reject) => {
  jwt.verify(token, cert, (err, decoded) => {
    decoded = decoded || {};
    if (err) {
      reject(err);
    } else if (decoded.ID === id) {
      resolve();
    } else {
      reject();
    }
  });
});

module.exports = verifyJwt;
