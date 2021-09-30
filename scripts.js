// API URL
const cardURL = "http://deckofcardsapi.com/api/deck/new/draw/?count=3";

// Call and use pre-existing HTML elements (div)
let cardContainer = document.querySelector("#cardContainer");

// Fetch to grab data from API
fetch(cardURL)
    .then(res => res.json())
    .then(json => apiDataDisplay(json))
    .catch(err => console.log(err))

// Display function to manifest data visibly to the browser
let apiDataDisplay = (jsonDataObject) => {
    // Console.log to check that display is receiving JSON object
    console.log(jsonDataObject);

    // Declaring new variable to understand object content
    let cards = jsonDataObject.cards;
    console.log(cards);

    // Declaring the Bootstrap column div and card to populate with API data for each playing card in card array using .forEach() 
    cards.forEach(card => {
        //console.log(card);

        // Declaring and creating needed Bootstrap column to hold card
        let bootstrapCol = document.createElement("div");
        bootstrapCol.className = "col";


        let bootstrapCard = document.createElement("div");
        bootstrapCard.className = "card";

        bootstrapCard.innerHTML = `
            <img src="${card.image}" class="card-img-top" alt="A playing card that is the ${card.value} of ${card.suit.toLowerCase()}.">
        `;
        bootstrapCol.appendChild(bootstrapCard);
        cardContainer.appendChild(bootstrapCol);
    });
}

fetch();