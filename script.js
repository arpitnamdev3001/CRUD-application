let form = document.querySelector('form');
let id = document.querySelector('.id');
let firstName = document.querySelector('.firstname');
let lastName = document.querySelector('.lastname');
let button = document.querySelector('.btn');
let msg = document.querySelector('.msg');
let checkList = document.querySelector('.check-list');

let table = document.querySelector('.table-section');
table.style.display = 'none';

const saveData = (id, firstName, lastName) => {
const existingData = JSON.parse(localStorage.getItem('userData')) || [];
existingData.push({id, firstName, lastName});
localStorage.setItem('userData', JSON.stringify(existingData));
};


const updateTable = () => {
    const data = JSON.parse(localStorage.getItem('userData')) || [];
    checkList.innerHTML = '';
    data.forEach(element => {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${element.id}</td>
        <td>${element.firstName}</td>
        <td>${element.lastName}</td>
        `
        checkList.appendChild(row);
    });
    table.style.display = 'block';
}
button.addEventListener('click', () => {
        let idValue = id.value;
        let firstValue = firstName.value;
        let lastValue = lastName.value;
        let msgValue = msg.innerHTML;
    if (idValue || lastValue || firstValue) {
        saveData(idValue, firstValue, lastValue);
        updateTable();
        msg.innerHTML = `Dear ${firstValue} ${lastValue}, your data has been submitted.`;
        id.value = '';
        firstName.value = '';
        lastName.value = '';
        setTimeout(() => {
            msg.style.display = 'none';
        }, 3000);
    }
   
}); 
document.addEventListener('DOMContentLoaded', updateTable);