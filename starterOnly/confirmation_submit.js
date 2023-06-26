// DOM Elements confirmation du formulaire
const confirmationSubmit = document.getElementsByClassName("confirmation_submit");
const btnClose = document.getElementsByClassName("btn-close");
const form = document.getElementsByClassName("form")
const btnSubmit = document.getElementsByClassName("btn-submit")[0];


// Apparition du msg de confirmation

btnSubmit.addEventListener('click', e => {
    e.preventDefault();
    
    if(prenom() && nom() && email() && birthdate() && nbConcours() && btnRadio() && checkboxCondition()){
        form.style.display = 'none';
        confirmationSubmit.style.display = "block";
        
    } 

    return false
})

btnClose.addEventListener("click", () => {
    window.location.reload();
});
