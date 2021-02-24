'use strict'

const express = require('express');

const handler = express();

handler.get('/test', async (req, res) => res.send(`Hello World!`, req.headers));

module.exports = handler;