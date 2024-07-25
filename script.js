// Demande à l'utilisateur de saisir son prénom
let Name = prompt("Quel est votre prénom ?");

// Fonction pour afficher un message de salutation basé sur le prénom et l'heure
function sayHello(firstName, hour) {
  // Variable pour stocker le message de salutation
  let greetings = "";

  // Déterminer le message de salutation en fonction de l'heure
  if (hour >= 18) {
    // Si l'heure est 18h ou plus, le message sera "Bonsoir"
    greetings = "Bonsoir";
  } else {
    // Si l'heure est avant 18h, le message sera "Bonjour"
    greetings = "Bonjour";
  }

  // Construire le message complet avec le prénom et l'heure
  let message = `${greetings} ${firstName} ! Il est ${hour} heures !`;

  // Afficher le message dans l'élément <h1> du document HTML
  document.querySelector("h1").innerText = message;
}

// Appel de la fonction sayHello avec le prénom saisi par l'utilisateur et l'heure (19h)
sayHello(Name, 19);
