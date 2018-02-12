$('#wish-submit').on('click', () => {
  const inputText = $('#wish-input').val();

  addItemtoDB(inputText);
});

const appendItem = (itemData) => {
  $('#wish-container').append(`<p>Wish: ${itemData}</p>`);
};

const addItemtoDB = (itemData) => {
  fetch('api/v1/wishes', {
    method: 'POST',
    body: JSON.stringify({ title: itemData }),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  })
  .then(response => response.json())
  .then(parsedResponse => {
    appendItem(parsedResponse.title);
  })
  .catch(err => {
    console.error('Error submitting wish to DB:', err);
  });
};

const getItemsfromDB = (items) => {
  fetch('api/v1/wishes', {
    method: 'GET'
  })
  .then(response => response.json())
  .then(items => {
    items.forEach((item) => {
      appendItem(item.title);
    });
  })
  .catch(err => {
    console.error('Error getting wishes from DB:', err);
  });
};

getItemsfromDB();