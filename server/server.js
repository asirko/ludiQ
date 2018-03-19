const express = require('express');
const app = express();

const questions = require('./data/questionnaire');

app.get('/questionList', function (req, res) {
  res.send(questions);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
