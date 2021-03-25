const cardNumber = {
  0: "A",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  10: "10",
  11: "J",
  12: "Q",
  13: "K"
};

const cardSuits = {
  0: "spade",
  1: "heart",
  2: "diamond",
  3: "club"
};

let getRandomNumber = function(limit) {
  return Math.floor(Math.random() * limit);
};

window.onload = function() {
  const number = getRandomNumber(14);
  const suit = getRandomNumber(4);

  const numberElement = document.getElementById("number");
  const cardElement = document.getElementById("card");

  numberElement.innerText = cardNumber[number];
  cardElement.classList.add(cardSuits[suit]); // class="card heart"
};
