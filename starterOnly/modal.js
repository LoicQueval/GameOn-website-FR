function editNav() {
    const x = document.getElementById('myTopnav');
    if (x.className === 'topnav') {
        x.className += ' responsive';
    } else {
        x.className = 'topnav';
    }
}

// DOM Class Elements
const modalbg = document.querySelector('.bground');
const closeIcon = document.querySelector('.close');
const confirmation = document.querySelector('.confirmation');
const closeButton = document.querySelector('.close-button');
const modalBtn = document.querySelectorAll('.modal-btn');
const errorMessage = document.querySelectorAll('.error');

// DOM Forms Element
const form = document.forms['reserve'];
const firstName = document.forms['reserve']['first'];
const lastName = document.forms['reserve']['last'];
const email = document.forms['reserve']['email'];
const birthdate = document.forms['reserve']['birthdate'];
const quantityInput = document.forms['reserve']['quantity'];
const location1 = document.forms['reserve']['location1'];
const location2 = document.forms['reserve']['location2'];
const location3 = document.forms['reserve']['location3'];
const location4 = document.forms['reserve']['location4'];
const location5 = document.forms['reserve']['location5'];
const location6 = document.forms['reserve']['location6'];
const checkbox1 = document.forms['reserve']['checkbox1'];

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener('click', launchModal));

// launch modal form
function launchModal() {
    modalbg.style.display = 'block';
}

// close modal event
if (closeIcon !== null) {
    closeIcon.addEventListener('click', closeModal);
}

// close/reset modal form
function closeModal() {
    modalbg.style.display = 'none';
    form.reset();
    confirmation.style.zIndex = '-1';
    confirmation.style.display = 'none';
}

// button close modal event
if (closeButton !== null) {
    closeButton.addEventListener('click', closeButtonModal);
}

// button close/reset modal form
function closeButtonModal() {
    modalbg.style.display = 'none';
    form.reset();
    confirmation.style.zIndex = '-1';
    confirmation.style.display = 'none';
}

// Submit function
function validate() {
    // boolean event error variable
    let noErrors = true;

    // check if firstName is an empty input or a number for error message
    const firstNameIsNumber = parseInt(firstName.value)
    if (firstName.value === '' || firstNameIsNumber) {
        firstName.focus();
        firstName.style.border = '1px solid red';
        errorMessage[0].style.display = 'block';
        errorMessage[0].innerHTML = 'Vous devez entrer votre prénom';
        noErrors = false;
    }
    // check if firstName have min 2 characters for error message
    else if (firstName.value.length < 2) {
        firstName.focus();
        firstName.style.border = '1px solid red';
        errorMessage[0].style.display = 'block';
        errorMessage[0].innerHTML = 'Veuillez entrer 2 caractères ou plus pour le champ du prénom';
        noErrors = false;

    }
    // hidden error message because input is valid
    else {
        firstName.style.border = '0px solid red';
        errorMessage[0].style.display = 'none';
    }

    // check if lastName is an empty input or a number for error message
    const lastNameIsNumber = parseInt(lastName.value)
    if (lastName.value === '' || lastNameIsNumber) {
        lastName.focus();
        lastName.style.border = '1px solid red';
        errorMessage[1].style.display = 'block';
        errorMessage[1].innerHTML = 'Vous devez entrer votre nom';
        noErrors = false;
    }
    // check if lastName have min 2 characters for error message
    else if (lastName.value.length < 2) {
        lastName.focus();
        lastName.style.border = '1px solid red';
        errorMessage[1].style.display = 'block';
        errorMessage[1].innerHTML = 'Veuillez entrer 2 caractères ou plus pour le champ du nom';
        noErrors = false;
    }
    // hidden error message because input is valid
    else {
        lastName.style.border = '0px solid red';
        errorMessage[1].style.display = 'none';
    }

    // check if email is an empty input
    if (email.value === '') {
        email.focus();
        email.style.border = '1px solid red';
        errorMessage[2].style.display = 'block';
        errorMessage[2].innerHTML = 'Veuillez entrer un email';
        noErrors = false;
    }
    // check if email is conform, reset errors
    else if (checkEmail(email.value)) {
        email.style.border = '0px solid red';
        errorMessage[2].style.display = 'none';
    }
    // errors message mail no valid
    else {
        email.focus();
        email.style.border = '1px solid red';
        errorMessage[2].style.display = 'block';
        errorMessage[2].innerHTML = 'Veuillez entrer un email valide';
        noErrors = false;
    }

    // regular expression for email validity
    function checkEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@]+(\.[^<>()[\]\\.,;:\s@]+)*)|(.+))@((\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})|(([a-zA-Z\-\d]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    // check if birthdate is an empty input
    if (birthdate.value === '') {
        birthdate.focus();
        birthdate.style.border = '1px solid red';
        errorMessage[3].style.display = 'block';
        errorMessage[3].innerHTML = 'Veuillez entrer une date de naissance';
        noErrors = false;
    }
    // hidden error message because input is valid
    else {
        birthdate.style.border = '0px solid red';
        errorMessage[3].style.display = 'none';
    }

    // check if quantity is not a 0 to 99 number, reset message error because input is valid
    const quantity = parseInt(quantityInput.value)

    if (quantity <= 99 && quantity >= 0) {
        quantityInput.style.border = '0px solid red';
        errorMessage[4].style.display = 'none';
    }
    // check if quantity is a number for error message
    else if (!quantity) {
        quantityInput.focus();
        quantityInput.style.border = '1px solid red';
        errorMessage[4].style.display = 'block';
        errorMessage[4].innerHTML = 'Veuillez entrer un nombre';
        noErrors = false;
    }
    // quantity is not a 0 to 99 number
    else {
        quantityInput.focus();
        quantityInput.style.border = '1px solid red';
        errorMessage[4].style.display = 'block';
        errorMessage[4].innerHTML = 'Veuillez entrer un nombre de 0 à 99';
        noErrors = false;
    }

    // hidden error message because a radio button is selected
    if (location1.checked || location2.checked || location3.checked || location4.checked || location5.checked || location6.checked) {
        errorMessage[5].style.display = 'none';
    }
    // error message for radio button not selected
    else {
        location1.focus();
        errorMessage[5].style.display = 'block';
        errorMessage[5].innerHTML = 'Veuillez sélectionner une ville';
        noErrors = false;
    }

    // hidden error message because terms of use checkbox is selected
    if (checkbox1.checked) {
        errorMessage[6].style.display = 'none';
    }
    // error message terms of use checkbox is not selected
    else {
        checkbox1.focus();
        checkbox1.style.border = '1px solid red';
        errorMessage[6].style.display = 'block';
        errorMessage[6].innerHTML = 'Veuillez accepter les conditions d\'utilisation';
        noErrors = false;
    }
    console.log(noErrors);
    // check if there is no form error, launch complet modal
    if (noErrors === true) {
        confirmation.style.zIndex = '1';
        confirmation.style.display = 'flex';
        closeButton.style.zIndex = '1';
        form.reset();
    }
    return false;
}
