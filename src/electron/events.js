const conversion = require('./controllers/conversion');

module.exports = [
  {
    event: 'conversion:start',
    handler: conversion
  }
];
