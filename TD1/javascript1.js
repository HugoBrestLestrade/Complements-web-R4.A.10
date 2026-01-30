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

let I_cpt = 0;

function monChangementDeValeur(){
    O_element.textContent = "";
    let O_row1 = O_element.insertCell(0);
    O_row1.textContent = A_tableau[I_cpt];
    let O_row2 = O_element.insertCell(1);
    O_row2.textContent = " °C";
    O_element.ariaLabel = "off";

    let I_caseTableau = A_tableau[I_cpt];
    I_cpt = ++I_cpt
    if (I_cpt == A_tableau.length){
        I_cpt = 0;
    }


    let O_newRow = O_tableaudedonne.insertRow(-1);
    let O_newCell = O_newRow.insertCell(0);
    let O_newText = document.createTextNode(O_element.textContent);
    O_newCell.appendChild(O_newText);

   if (I_caseTableau <= 0){
    O_newCell.className = "blue";
    O_element2.className = "blue";
    O_title.textContent = "Brrrrrrr, un peu froid ce matin, mets ta cagoule !";
   }
   else if(I_caseTableau <= 20){
    O_newCell.className = "green";
    O_element2.className = "green";
    O_title.textContent = "";
   }
   else if(I_caseTableau <= 30){
    O_newCell.className = "orange";
    O_element2.className = "orange";
    O_title.textContent = "";
   }
   else {
    O_newCell.className = "red";
    O_element2.className = "red";
    O_title.textContent = "Caliente ! Vamos a la playa, ho hoho hoho !!";
   }
}

let intervalleDeChangement = setInterval(monChangementDeValeur, 2000)






class TabsManual {
  constructor(groupNode) {
    this.tablistNode = groupNode;

    this.tabs = [];

    this.firstTab = null;
    this.lastTab = null;

    this.tabs = Array.from(this.tablistNode.querySelectorAll('[role=tab]'));
    this.tabpanels = [];

    for (var i = 0; i < this.tabs.length; i += 1) {
      var tab = this.tabs[i];
      var tabpanel = document.getElementById(tab.getAttribute('aria-controls'));

      tab.tabIndex = -1;
      tab.setAttribute('aria-selected', 'false');
      this.tabpanels.push(tabpanel);

      tab.addEventListener('keydown', this.onKeydown.bind(this));
      tab.addEventListener('click', this.onClick.bind(this));

      if (!this.firstTab) {
        this.firstTab = tab;
      }
      this.lastTab = tab;
    }

    this.setSelectedTab(this.firstTab);
  }

  setSelectedTab(currentTab) {
    for (var i = 0; i < this.tabs.length; i += 1) {
      var tab = this.tabs[i];
      if (currentTab === tab) {
        tab.setAttribute('aria-selected', 'true');
        tab.removeAttribute('tabindex');
        this.tabpanels[i].classList.remove('is-hidden');
      } else {
        tab.setAttribute('aria-selected', 'false');
        tab.tabIndex = -1;
        this.tabpanels[i].classList.add('is-hidden');
      }
    }
  }

  moveFocusToTab(currentTab) {
    currentTab.focus();
  }

  moveFocusToPreviousTab(currentTab) {
    var index;

    if (currentTab === this.firstTab) {
      this.moveFocusToTab(this.lastTab);
    } else {
      index = this.tabs.indexOf(currentTab);
      this.moveFocusToTab(this.tabs[index - 1]);
    }
  }

  moveFocusToNextTab(currentTab) {
    var index;

    if (currentTab === this.lastTab) {
      this.moveFocusToTab(this.firstTab);
    } else {
      index = this.tabs.indexOf(currentTab);
      this.moveFocusToTab(this.tabs[index + 1]);
    }
  }

  /* EVENT HANDLERS */

  onKeydown(event) {
    var tgt = event.currentTarget,
      flag = false;

    switch (event.key) {
      case 'ArrowLeft':
        this.moveFocusToPreviousTab(tgt);
        flag = true;
        break;

      case 'ArrowRight':
        this.moveFocusToNextTab(tgt);
        flag = true;
        break;

      case 'Home':
        this.moveFocusToTab(this.firstTab);
        flag = true;
        break;

      case 'End':
        this.moveFocusToTab(this.lastTab);
        flag = true;
        break;

      default:
        break;
    }

    if (flag) {
      event.stopPropagation();
      event.preventDefault();
    }
  }

  // Since this example uses buttons for the tabs, the click onr also is activated
  // with the space and enter keys
  onClick(event) {
    this.setSelectedTab(event.currentTarget);
  }
}

// Initialize tablist

window.addEventListener('load', function () {
  var tablists = document.querySelectorAll('[role=tablist].manual');
  for (var i = 0; i < tablists.length; i++) {
    new TabsManual(tablists[i]);
  }
});
