
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
let O_title = document.getElementById("title");
let O_tableaudedonne = document.getElementById("tableaudedonnee");

let I_cpt = 0;

function monChangementDeValeur(){
    O_element.textContent = A_tableau[I_cpt] + " °C";

    I_caseTableau = A_tableau[I_cpt];
    I_cpt = ++I_cpt
    if (I_cpt == A_tableau.length){
        I_cpt = 0;
    }


    let newRow = O_tableaudedonne.insertRow(-1);
    let newCell = newRow.insertCell(0);
    let newText = document.createTextNode(O_element.textContent);
    newCell.appendChild(newText);

   if (I_caseTableau <= 0){
    newCell.className = "blue";
    O_element.className = "blue";
    O_title.textContent = "Brrrrrrr, un peu froid ce matin, mets ta cagoule !";
   }
   else if(I_caseTableau <= 20){
    newCell.className = "green";
    O_element.className = "green";
    O_title.textContent = "";
   }
   else if(I_caseTableau <= 30){
    newCell.className = "orange";
    O_element.className = "orange";
    O_title.textContent = "";
   }
   else {
    newCell.className = "red";
    O_element.className = "red";
    O_title.textContent = "Caliente ! Vamos a la playa, ho hoho hoho !!";
   }
}

let intervalleDeChangement = setInterval(monChangementDeValeur, 2000)