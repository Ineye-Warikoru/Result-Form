const nameInput = document.querySelector(".name");

const caInput = document.querySelector(".ca");

const examInput = document.querySelector(".exam");

const Submit = document.querySelector(".submit");

const resultPrintout = document.querySelector(".results tbody");

function addNewRow(event){
    event.preventDefault();

    let nameValue = nameInput.value;

    let caValue = caInput.value;

    let examValue = examInput.value;

    const newRow = document.createElement('tr');

    newRow.innerHTML = `<td>${nameValue}</td><td>${caValue}</td><td>${examValue}</td>`;
    
    resultPrintout.appendChild(newRow);

    nameInput.value = "";

    caInput.value = "";

    examInput.value = "";
}

Submit.addEventListener('click', addNewRow);
