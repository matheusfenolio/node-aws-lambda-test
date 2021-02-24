const serverless = require('serverless-http');
const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/getIndividuals', (req, res) => {
console.log('aaaaaaaaa', req.headers.lastname)
res.send({ ...req.headers });
});
//app.listen(3000, () => console.log(`Listening on: 3000`));
module.exports.handler = serverless(app);