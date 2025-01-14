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
const modalConfirmation = document.querySelector(".confirmation_submit");

// Implémentation entrées du formulaire

const firstname = document.getElementById("first");
const nom = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const nbConcours = document.getElementById("quantity");
const btnRadio = document.getElementsByClassName("checkbox-input");
const checkboxCondition = document.getElementById("checkbox1");
const closeSuccessModal = document.querySelector(".closeC");
const btnCloseConfirm = document.getElementsByClassName("btn-close")[0];

let page = 0;

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

close.addEventListener("click", closeModal); //X 

// close.addEventListener("click", function () {
//   closeModal();
//   launchModal(); // Pr réouvrir la modale
// } ); //X 

closeSuccessModal.addEventListener("click", closeModal); //X

btnCloseConfirm.addEventListener("click", () => {
  const form = document.querySelector('form');  
  closeModal();
  form.submit();
})

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  window.scrollTo(0, 0);

  if (page === 1 ) {
    openConfirm();
  }
}

// Fermeture des deux modales
function closeModal() {
  modalbg.style.display = "none";
  modalConfirmation.style.display = "none";

  // // Réinitialisation du formulaire
  // const form = document.querySelector('form');
  // form.reset();
}

// Ouverture de la modal de confirmation
function openConfirm() {
  page = 1;
  modalConfirmation.style.display = "block";
}


// Fonction  général pour l'affichage des erreurs ( msg et champs )
function checkValidity(inputElement, errorElement, msg, regexActive) {
  const regex = /^[a-zA-Z-]{2,50}$/;

  if((regexActive) && (inputElement.value == "" || !isNaN(inputElement.value) || !regex.test(inputElement.value) || inputElement.value == "--")) {
    errorElement.innerHTML = msg; 
    errorElement.style.color = 'red';
    errorElement.style.fontSize = '12px';  
    inputElement.parentElement.setAttribute('data-error-visible', 'true');
    inputElement.style.border = '2px solid #e54858';

    return false;
  }

  if(!regexActive && inputElement.value == "") {
    errorElement.innerHTML = msg;    
    errorElement.style.color = 'red';
    errorElement.style.fontSize = '12px';  
    inputElement.parentElement.setAttribute('data-error-visible', 'true');
    inputElement.style.border = '2px solid #e54858';

    return false;
  }

  errorElement.innerHTML = "";
  inputElement.parentElement.setAttribute('data-error-visible', 'false');
  inputElement.style.border = 'solid #279e7a 0.19rem';
  
  return true;
}

function checkBirdhate(dateString) {
  // Vérifie si la chaîne est au format AAAA-MM-JJ
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

  // Convertit la chaîne en objet Date
  const dateOfBirth = new Date(dateString);
  // Calcul de la différence d'années
    const ageDifference = new Date() - dateOfBirth;
    const ageInYears = ageDifference / (365.25 * 24 * 60 * 60 * 1000);

  // Vérifie si la date est valide
  if (isNaN(dateOfBirth.getTime()) || !dateRegex.test(dateString) || ageInYears < 18) {
    document.getElementsByClassName("error")[3].innerHTML = "Vous devez entrer votre date de naissance.";    
    document.getElementsByClassName("error")[3].style.color = 'red';
    document.getElementsByClassName("error")[3].style.fontSize = '12px';  
    birthdate.parentElement.setAttribute('data-error-visible', 'true');
    birthdate.style.border = '2px solid #e54858';
    return false;
  }
  document.getElementsByClassName("error")[3].innerHTML = "";
  birthdate.parentElement.setAttribute('data-error-visible', 'false');
  birthdate.style.border = 'solid #279e7a 0.19rem';
  // Vérifie si l'âge est supérieur ou égal à 18 ans
  return ageInYears >= 18;
}


function checkConcoursquantite () {
  if (nbConcours.value.trim() == "" || isNaN(nbConcours.value.trim()) == true || nbConcours.value.trim() < 0 || nbConcours.value.trim() > 99) {
    
      document.getElementsByClassName("error")[4].innerHTML = "Veuillez renseigner un nombre.";    
      document.getElementsByClassName("error")[4].style.color = 'red';
      document.getElementsByClassName("error")[4].style.fontSize = '12px';  
      nbConcours.parentElement.setAttribute('data-error-visible', 'true');
      nbConcours.style.border = '2px solid #e54858';
    
      return false;
  }

      document.getElementsByClassName("error")[4].innerHTML = "";    
      nbConcours.parentElement.setAttribute('data-error-visible', 'false');
      nbConcours.style.border = '2px solid #279e7a';
    
      return true;  
}

// Fonction avec valeurs des paramètres de checkvalidity 
function validate() {
  const firstnameValid = checkValidity(firstname, document.getElementsByClassName("error")[0], "Veuillez entrer 2 caractères ou plus pour le champ du prénom.", true);
  const lastnameValid = checkValidity(nom, document.getElementsByClassName("error")[1], "Veuillez renseigner un nom.", true);
  const emailValid = checkValidity(email, document.getElementsByClassName("error")[2], "Veuillez renseigner un email.", false);
  // const birthdateValid = checkValidity(birthdate, document.getElementsByClassName("error")[3], "Vous devez entrer votre date de naissance.", false);
  const nbConcoursValid = checkConcoursquantite();
  const birthdateValid = checkBirdhate(birthdate.value.trim());

  let conditions = false;

  let results = [firstnameValid, lastnameValid, emailValid, birthdateValid, nbConcoursValid ]

  if (results.includes(false)) return false;

  // on parcours la liste radio, on récupère le bouton et son index si l'index est au dessus de 6 on retourne null sinon on retourne le status du bouton
  const radio = Array.from(btnRadio).map((btn, i) => (i < 6) ? btn.checked : null);

  if(!radio.includes(true)) { // si aucun bouton radio n'est coché
    document.getElementsByClassName("error")[5].innerHTML = "Veuillez sélectionner une ville.";
    document.getElementsByClassName("error")[5].style.color = 'red';
    document.getElementsByClassName("error")[5].style.fontSize = '12px';
    return false;
  } else {
    document.getElementsByClassName("error")[5].innerHTML = "";
    conditions = true;
  }

  if(!checkboxCondition.checked) { //  si l'encoche n'est pas rempli alors return false
    document.getElementsByClassName("error")[6].innerHTML = "Veuillez accepter les conditions d'utiilisations";
    document.getElementsByClassName("error")[6].style.color = 'red';
    document.getElementsByClassName("error")[6].style.fontSize = '12px';
    return false;
  } else {
    document.getElementsByClassName("error")[6].innerHTML = "";
    conditions = true;
  } 

  if(conditions) return true;
}


// Fonction pour que la modal de confirmation s'affiche si la fonction validate renvoie true
function verification(e) {
  e.preventDefault();
  const isValid = validate();

  if(isValid) {
    const form = document.querySelector('.modal-body');
    form.style.display = 'none';

    openConfirm();
  }
}