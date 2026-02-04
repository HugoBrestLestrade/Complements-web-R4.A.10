export class History {

    constructor(O_element, A_tableau, O_tableaudedonne, O_element2, O_title) {
        this.O_element = O_element;
        this.A_tableau = A_tableau;
        this.O_tableaudedonne = O_tableaudedonne;
        this.O_element2 = O_element2;
        this.O_title = O_title;
    }

    makeHistory(){
        let I_cpt = 0;
        this.O_element.textContent = "";
        this.O_element.insertCell(0).textContent = this.A_tableau[I_cpt];
        this.O_element.insertCell(1).textContent = " °C";
        this.O_element.ariaLabel = "off";

        let I_caseTableau = this.A_tableau[I_cpt];
        I_cpt = ++I_cpt
        if (I_cpt == this.A_tableau.length){
            I_cpt = 0;
        }


        let O_newRow = this.O_tableaudedonne.insertRow(-1);
        let O_newCell = O_newRow.insertCell(0);
        let O_newText = document.createTextNode(this.O_element.textContent);
        O_newCell.appendChild(O_newText);

        if (I_caseTableau <= 0){
            O_newCell.className = "blue";
            this.O_element2.className = "blue";
            this.O_title.textContent = "Brrrrrrr, un peu froid ce matin, mets ta cagoule !";
        }
        else if(I_caseTableau <= 20){
            O_newCell.className = "green";
            this.O_element2.className = "green";
            this.O_title.textContent = "";
        }
        else if(I_caseTableau <= 30){
            O_newCell.className = "orange";
            this.O_element2.className = "orange";
            this.O_title.textContent = "";
        }
        else {
            O_newCell.className = "red";
            this.O_element2.className = "red";
            this.O_title.textContent = "Caliente ! Vamos a la playa, ho hoho hoho !!";
        }
    }
}