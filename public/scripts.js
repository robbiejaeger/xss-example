$('#wish-submit').on('click', () => {
  const inputText = $('#wish-input').val();

  addItemtoDB(inputText);
});

const addItemtoDB = (itemData) => {
  fetch('api/v1/penguins', {
    method: 'POST',
    body: JSON.stringify({ species: itemData }),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  })
  .then(response => {
    return response.json();
  })
  .then(parsedResponse => {
    console.log(parsedResponse);
  })
  .catch(err => {
    console.error('Error submitting wish:', err);
  })
};