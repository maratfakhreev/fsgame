// According to https://github.com/facebook/react-native/issues/3763

// Temporary do not forget update socket.io.js in node_modules:
// Line 6395, 6624, 6632 in socket.io.js (package version 1.3.7)
// make for( ... ); to for( ... ){}

window.navigator.userAgent = 'react-native';
const io = require('socket.io-client/socket.io');

module.exports = io;
