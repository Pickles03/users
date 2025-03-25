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
            <p class="card-text"><b>Age: </b>${Math.floor(Math.random()* 20) + 20}</p> 
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
    `; //the math.random() is just to generate a random age for the user and the weay to get a random value between 30 and 50 is to multiply the random value by 21 and add 30 since first you have to subtract the minimum value from the maximum value and then add the minimum value to get the random value between the two values. It is 21 and not 20 because the random value is between 0 and 1 and not 1 and 2.
  
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

  /* in class solution

  