// According to https://github.com/facebook/react-native/issues/3763

// Temporary do not forget update socket.io.js in node_modules:
// Line 6395, 6624, 6632 in socket.io.js (package version 1.3.7)
// make for( ... ); to for( ... ){}

import React from 'react-native';

window.navigator.userAgent = 'react-native';

const io = require('socket.io-client/socket.io');
const url = 'ws://ws.pusherapp.com/app/21752c7b30492cf90200?protocol=7&client=js&version=3.0.0&flash=false';
const socket = new io(url, { jsonp: false });

let message = JSON.stringify({ "event": "pusher:subscribe", "data": {"channel": "hello"} });

socket.emit(message, {});
socket.on('check', (msg) => {
  console.log(msg);
})

module.exports = socket;
