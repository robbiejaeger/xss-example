$('#wish-submit').on('click', () => {
  const inputText = $('#wish-input').val();

  addWishToDB(inputText);
});

const appendWish = (wishData) => {
  $('#wish-container').append(`<p class="wish">Wish: ${wishData}</p>`);
};

const addWishToDB = (wishData) => {
  fetch('api/v1/wishes', {
    method: 'POST',
    body: JSON.stringify({ title: wishData }),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  })
  .then(response => response.json())
  .then(parsedResponse => {
    appendWish(parsedResponse.title);
    $('#wish-input').val('');
  })
  .catch(err => {
    console.error('Error submitting wish to DB:', err);
  });
};

const getWishesFromDB = (wishes) => {
  fetch('api/v1/wishes', {
    method: 'GET'
  })
  .then(response => response.json())
  .then(parsedResponse => {
    parsedResponse.forEach((wish) => {
      appendWish(wish.title);
    });
  })
  .catch(err => {
    console.error('Error getting wishes from DB:', err);
  });
};

getWishesFromDB();