const express = require('express');

const handler = express();

handler.get('/test', async (req, res) => {
    console.log(req.headers);

    return formatResponse(req.headers);
})

const formatResponse = function(body){
    var response = {
      "statusCode": 200,
      "headers": {
        "Content-Type": "application/json"
      },
      "isBase64Encoded": false,
      "multiValueHeaders": { 
        "X-Custom-Header": ["My value", "My other value"],
      },
      "body": JSON.stringify(body)
    }
    return response
  }

  module.exports = handler;