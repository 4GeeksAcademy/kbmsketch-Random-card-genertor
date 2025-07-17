import "./style.css";

window.onload = () => {
 
  document.querySelector('.card').classList.add(generateRandomSuit());
  document.querySelector('.card').innerHTML = generateRandomNumber();

};

let generateRandomNumber = () => {
  let numbers = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
  let indexNumber = Math.floor(Math.random()*numbers.length);
  return numbers[indexNumber];
};

let generateRandomSuit = () => {
  let suit = ['diam','spade','heart','club'];
  let indexSuit = Math.floor(Math.random()*suit.length);
  return suit[indexSuit];
}