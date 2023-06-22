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

// Implémentation entrées du formulaire

const prenom = document.getElementById("first");
const nom = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const nbConcours = document.getElementById("quantity");
const btnRadio = document.getElementsByClassName("checkbox-input");
const checkboxCondition = document.getElementById("checkbox1");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
close.addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

function closeModal () {
  modalbg.style.display = "none";
}

// fonction qui récupère chacune des classes error pour lui attribué un msg d'erreur par la suite, 
function validate() {
  const regex = /^[a-zA-Z-]+$/; // Expression régulière pour les lettres min, maj et tirets

  if (prenom.value == "" || !isNaN(prenom.value) || !regex.test(prenom.value) || prenom.value == "--") {
    document.getElementsByClassName("error")[0].innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    prenom.classList.add(input); // Ajoute la classe CSS d'erreur 
    return false;
  } else {
    document.getElementsByClassName("error")[0].innerHTML = "";
    prenom.classList.remove(input); // Retire la classe CSS d'erreur 
  }

  if (nom.value == "" || !isNaN(nom.value) || !regex.test(nom.value) || nom.value == "--") {
    document.getElementsByClassName("error")[1].innerHTML = "Veuillez renseigner un nom.";
    nom.classList.add('text-control'); 
    return false;
  } else {
    document.getElementsByClassName("error")[1].innerHTML = "";
    nom.classList.remove('text-control'); 
  }

  if (email.value == "") {
    document.getElementsByClassName("error")[2].innerHTML = "Veuillez renseigner un email.";
    return false;
  } else {
    document.getElementsByClassName("error")[2].innerHTML = "";
  }

  if (birthdate.value == "") {
    document.getElementsByClassName("error")[3].innerHTML = "Vous devez entrer votre date de naissance.";
    return false;
  } else {
    document.getElementsByClassName("error")[3].innerHTML = "";
  }

  if (nbConcours.value == "") {
    document.getElementsByClassName("error")[4].innerHTML = "Veuillez renseigner un nombre.";
    return false;
  } else {
    document.getElementsByClassName("error")[4].innerHTML = "";
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
    setTimeout(() => {
      alert('Merci ! Votre réservation a été reçue.');
    }, 0);

    return true;
  }

  return false;
}