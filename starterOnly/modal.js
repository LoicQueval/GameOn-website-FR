function editNav() {
    const x = document.getElementById('myTopnav');
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
const errorMessage = document.querySelectorAll('.error');
/*const formData = document.querySelectorAll('.formData');*/

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
}

const firstName = document.forms['reserve']['first'];
const lastName = document.forms['reserve']['last'];
const email = document.forms['reserve']['email']

function validate() {

    if (firstName.value === '') {
        firstName.focus();
        firstName.style.border = '1px solid red';
        errorMessage[0].style.display = 'block';
        errorMessage[0].innerHTML = 'Vous devez entrer votre prénom';
    } else if (firstName.value.length < 2) {
        firstName.focus();
        firstName.style.border = '1px solid red';
        errorMessage[0].style.display = 'block';
        errorMessage[0].innerHTML = 'Veuillez entrer 2 caractères ou plus pour le champ du prénom';
    } else {
        firstName.style.border = '0px solid red';
        errorMessage[0].style.display = 'none';
    }

    if (lastName.value === '') {
        lastName.focus();
        lastName.style.border = '1px solid red';
        errorMessage[1].style.display = 'block';
        errorMessage[1].innerHTML = 'Vous devez entrer votre nom';
    } else if (lastName.value.length < 2) {
        lastName.focus();
        lastName.style.border = '1px solid red';
        errorMessage[1].style.display = 'block';
        errorMessage[1].innerHTML = 'Veuillez entrer 2 caractères ou plus pour le champ du nom';
    } else {
        lastName.style.border = '0px solid red';
        errorMessage[1].style.display = 'none';
    }

    if (email.value === '') {
        email.focus();
        email.style.border = '1px solid red';
        errorMessage[2].style.display = 'block';
        errorMessage[2].innerHTML = 'Veuillez entrer un email';
    } else if (checkEmail(email.value)) {
        email.style.border = '0px solid red';
        errorMessage[2].style.display = 'none';
    } else {
        email.focus();
        email.style.border = '1px solid red';
        errorMessage[2].style.display = 'block';
        errorMessage[2].innerHTML = 'Veuillez entrer un email valide';
    }

    function checkEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@]+(\.[^<>()[\]\\.,;:\s@]+)*)|(.+))@((\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})|(([a-zA-Z\-\d]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    return false
}
