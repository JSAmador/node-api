// const {SHA256} = require('crypto-js');
//
// var message = 'Ia ma a new user';
//
// var hash = SHA256(message).toString();
//
// console.log(message);
//
// console.log(hash);

const jwt = require('jsonwebtoken');

var data = {
  id: 10
};


var token = jwt.sign(data, '123abc');

console.log(token);

var decoded = jwt.verify(token, '123abc');

console.log(decoded);
