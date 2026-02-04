import {TabsManual} from "./TabsManual.js"
import {History} from "./History.js";

'use strict';

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

let A_tableau = [];

for (let I_cpt=0 ; I_cpt < 20; I_cpt++) {
    let I_randomNumber = getRandomArbitrary(-10, 40);
    I_randomNumber = Math.round(I_randomNumber);
    A_tableau.push(I_randomNumber);
    console.log(I_randomNumber);
}

let O_element = document.getElementById("donnee");
let O_element2 = document.getElementById("donnees");
let O_title = document.getElementById("title");
let O_tableaudedonne = document.getElementById("tableaudedonnee");

let test = new History(O_element, A_tableau, O_tableaudedonne, O_element2, O_title);
let intervalleDeChangement = setInterval(test.makeHistory(), 2000)
// Initialize tablist

  window.addEventListener('load', function () {
  var tablists = document.querySelectorAll('[role=tablist].manual');
  for (var i = 0; i < tablists.length; i++) {
    new TabsManual(tablists[i]);
  }
});


