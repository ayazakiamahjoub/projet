document.getElementById("signupForm").addEventListener("submit", function(event) {
    // Empêcher l'envoi du formulaire par défaut
    event.preventDefault();

    // Récupérer les valeurs des champs du formulaire
    const name = document.getElementById("name").value;
    const birthdate = document.getElementById("birthdate").value;
    const gender = document.getElementById("gender").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const preferredCourses = document.getElementById("preferred-courses").selectedOptions;

    // Variables pour stocker les messages d'erreur et de succès
    let errorMessage = "";
    let successMessage = "";

    // Validation des champs
    if (name === "") {
        errorMessage += "Le nom complet est requis.<br>";
    }
    if (birthdate === "") {
        errorMessage += "La date de naissance est requise.<br>";
    }
    if (gender === "") {
        errorMessage += "Le genre est requis.<br>";
    }
    if (email === "" || !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        errorMessage += "Veuillez entrer une adresse e-mail valide.<br>";
    }
    if (phone === "" || !/^[0-9]{10}$/.test(phone)) {
        errorMessage += "Veuillez entrer un numéro de téléphone valide.<br>";
    }
    if (address === "") {
        errorMessage += "L'adresse est requise.<br>";
    }
    if (password === "") {
        errorMessage += "Le mot de passe est requis.<br>";
    }
    if (confirmPassword === "") {
        errorMessage += "Veuillez confirmer votre mot de passe.<br>";
    }
    if (password !== confirmPassword) {
        errorMessage += "Les mots de passe ne correspondent pas.<br>";
    }
    if (preferredCourses.length === 0) {
        errorMessage += "Veuillez sélectionner au moins un cours préféré.<br>";
    }

    // Affichage des messages d'erreur ou de succès
    if (errorMessage !== "") {
        document.getElementById("errorMessage").innerHTML = errorMessage;
        document.getElementById("successMessage").innerHTML = ""; // Réinitialiser le message de succès
    } else {
        successMessage = "Formulaire soumis avec succès !";
        document.getElementById("successMessage").innerHTML = successMessage;
        document.getElementById("errorMessage").innerHTML = ""; // Réinitialiser les erreurs
        // Si vous voulez soumettre le formulaire, vous pouvez décommenter cette ligne :
        // document.getElementById("signupForm").submit();
    }
});


