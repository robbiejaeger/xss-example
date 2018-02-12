const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set('port', process.env.PORT || 3000);
app.use(express.static('public'));

app.locals.wishes = [{title: 'To be a human.'}, {title: 'To eat ice cream.'}];

app.use(bodyParser.json());

app.get('/api/v1/wishes', (request, response) => {
  response.status(200).json(app.locals.wishes);
});

app.post('/api/v1/wishes', (request, response) => {
  app.locals.wishes.push({ title: request.body.title });
  response.status(201).json(app.locals.wishes[app.locals.wishes.length - 1]);
});

app.listen(app.get('port'), () => {
  console.log(`XSS example server running on http://localhost:${app.get('port')}`);
});