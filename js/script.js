// https://jsonplaceholder.typicode.com/users
// images: https://thispersondoesnotexist.com/

const usuarios = document.getElementById('listaUsuarios');


function createUserCard(user, imageNum) {

    const imageUrl = `./assets/img/${imageNum}.jpg`;
  
    const card = document.createElement('div');
    card.classList.add('card'); // a Bootstrap card class
  
    card.innerHTML = `
    <div class="card1">
        <img src="${imageUrl}" class="card-img" alt="Random User Image">
        <div class="card-body-main">
            <h3 class="card-title">Name: ${user.name}</h3>
            <p class="card-text"><b>Username:</b> ${user.username}</p>
            <p class="card-text"><b>Email:</b> ${user.email}</p>
            <p class="card-text"><b>Number:</b> ${user.phone}</p>
        </div>
        </div>
        <div class="card-body-secondary">
            <p class="card-text"><b>Company:</b> ${user.company.name}</p>
            <p class="card-text"><b>Address:</b> ${user.address.street}</p>
            <p class="card-text"><b>Suite:</b> ${user.address.suite}</p>
        </div>
    `;
  
    usuarios.appendChild(card);
  }


fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    if (!response.ok) {
      throw new Error('Error in the request: ' + response.status);
    }
    return response.json();
  })
  .then(data => {
    // data is an array of user objects
    data.forEach((user, index) => {
        const imageNum = (index % 10) +1;
        createUserCard(user, imageNum);
    });
    })
    .catch(error => {
    console.error('Fetch error:', error);
    }
  );