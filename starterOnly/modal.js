function editNav() {
  var x = document.getElementById("myTopnav");

  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const close = document.querySelector(".close");
const btnSubmit = document.getElementsByClassName("btn-submit")[0];

// DOM Elements Modal de confirmation


// Implémentation entrées du formulaire

const prenom = document.getElementById("first");
const nom = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const nbConcours = document.getElementById("quantity");
const btnRadio = document.getElementsByClassName("checkbox-input");
const checkboxCondition = document.getElementById("checkbox1");
const closeSuccessModal = document.getElementsByClassName("btn-close")[0];

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

document.getElementsByClassName("btn-close")[0]
close.addEventListener("click", closeModal);
closeSuccessModal.addEventListener("click", closeModal);
// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

function closeModal () {
  modalbg.style.display = "none";
}

function validate() {
  if (prenom.value == "" || !isNaN(prenom.value)) {
    document.getElementsByClassName("error")[0].innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    prenom.parentElement.setAttribute('data-error-visible', 'true');
    prenom.style.border = '2px solid #e54858';
    return false;
  } else {
    document.getElementsByClassName("error")[0].innerHTML = "";
    prenom.parentElement.setAttribute('data-error-visible', 'false');
    prenom.style.border = 'solid #279e7a 0.19rem';
  }

  if (nom.value == "" || !isNaN(nom.value)) {
    document.getElementsByClassName("error")[1].innerHTML = "Veuillez renseigner un nom.";
    nom.parentElement.setAttribute('data-error-visible', 'true');
    nom.style.border = '2px solid #e54858';
    return false;
  } else {
    document.getElementsByClassName("error")[1].innerHTML = "";
    nom.parentElement.setAttribute('data-error-visible', 'false');
    nom.style.border = 'solid #279e7a 0.19rem';
  }

  if (email.value == "") {
    document.getElementsByClassName("error")[2].innerHTML = "Veuillez renseigner un email.";
    email.parentElement.setAttribute('data-error-visible', 'true');
    email.style.border = '2px solid #e54858';
    return false;
  } else {
    document.getElementsByClassName("error")[2].innerHTML = "";
    email.parentElement.setAttribute('data-error-visible', 'false');
    email.style.border = 'solid #279e7a 0.19rem';
  }

  if (birthdate.value == "") {
    document.getElementsByClassName("error")[3].innerHTML = "Vous devez entrer votre date de naissance.";
    birthdate.parentElement.setAttribute('data-error-visible', 'true');
    birtthdate.style.border = '2px solid #e54858';
    return false;
  } else {
    document.getElementsByClassName("error")[3].innerHTML = "";
    birthdate.parentElement.setAttribute('data-error-visible', 'false');
    birthdate.style.border = 'solid #279e7a 0.19rem';
  }

  if (nbConcours.value == "") {
    document.getElementsByClassName("error")[4].innerHTML = "Veuillez renseigner un nombre.";
    nbConcours.parentElement.setAttribute('data-error-visible', 'true');
    nbConcours.style.border = '2px solid #e54858';
    return false;
  } else {
    document.getElementsByClassName("error")[4].innerHTML = "";
    nbConcours.parentElement.setAttribute('data-error-visible', 'false');
    nbConcours.style.border = 'solid #279e7a 0.19rem';
  }

  // on parcours la liste radio, on récupère le bouton et son index si l'index est au dessus de 6 on retourne null sinon on retourne le status du bouton
  const radio = Array.from(btnRadio).map((btn, i) => (i < 6) ? btn.checked : null);

  if(!radio.includes(true)) { // si aucun bouton radio n'est coché
    document.getElementsByClassName("error")[5].innerHTML = "Veuillez sélectionner une ville.";
    return false;
  } else {
    document.getElementsByClassName("error")[5].innerHTML = "";
  }

  if(!checkboxCondition.checked) { //  si l'encoche n'est pas rempli alors return false
    document.getElementsByClassName("error")[6].innerHTML = "Veuillez accepter les conditions d'utiilisations";
    return false;
  } else {
    document.getElementsByClassName("error")[6].innerHTML = "";
  } 

  closeModal();
  return true;
}

function verification() {
  const v = validate();
  
  if(v === true) {
    

    return true;
  }

  return false;
}

// ouverture de la modale de confirmation :

btnSubmit.addEventListener('click', e => {
  e.preventDefault();  
  validate();

  const confirmationSubmit = document.getElementsByClassName('confirmation_submit')[0];
  const form = document.querySelector('.modal-body');

  form.style.display = 'none';
  confirmationSubmit.style.display = "block";
})
