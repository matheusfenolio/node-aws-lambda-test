'use strict'

const express = require('express');
const awsServerlessExpress = require('aws-serverless-express');

const app = express();
app.use(awsServerlessExpress.eventContext());


app.get('/test', async (req, res) => res.json( { message: 'Hello World!', requestHeaders: req.headers } ));

module.exports = app;