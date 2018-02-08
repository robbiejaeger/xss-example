const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.static('public'));

app.locals.penguins = [{species: 'gentoo'}, {species: 'adelie'}];

app.get('/api/v1/penguins', (request, response) => {
  response.status(200).json(app.locals.penguins);
});

app.listen(app.get('port'), () => {
  console.log(`XSS example server running on http://localhost:${app.get('port')}`);
});