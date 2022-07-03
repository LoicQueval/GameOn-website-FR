function editNav() {
    var x = document.getElementById('myTopnav');
    if (x.className === 'topnav') {
        x.className += ' responsive';
    } else {
        x.className = 'topnav';
    }
}

// DOM Elements
const modalbg = document.querySelector('.bground');
const modalBtn = document.querySelectorAll('.modal-btn');
const closeButton = document.querySelector('.close');
const formData = document.querySelectorAll('.formData');
const errorMessage = document.querySelector('.error');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener('click', launchModal));

// launch modal form
function launchModal() {
    modalbg.style.display = 'block';
}

// launch modal event
if (closeButton !== null) {
    closeButton.addEventListener('click', closeModal);
}

// close modal form
function closeModal() {
    modalbg.style.display = 'none';
    console.log('close');
}

const firstName = document.forms['reserve']['first']
const lastName = document.forms['reserve']['last']




function validate() {
    if (firstName.value === "") {
        errorMessage.style.display = 'block';
        firstName.focus();
        firstName.style.border = '1px solid red';
        errorMessage.innerHTML = "Vous devez entrer votre prénom";
        return false;
    }
    if (firstName.value.length < 2) {
        errorMessage.style.display = 'block';
        firstName.focus();
        firstName.style.border = '1px solid red';
        errorMessage.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du prénom";
        return false
    }

}
