import readline from "readline";
import keypress from 'keypress';
import chalk from "chalk";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Définition des options du menu
const options = [
  { name: "Option 1", action: "" },
  { name: "Option 2", action: "" },
  { name: "Option 3", action: "" },
  { name: "Quitter", action: "" },
];

let selectedOption = 0; // Option sélectionnée

// Fonction pour afficher les options du menu
function printMenu() {
  console.clear();

  console.log(
    chalk.blue(`
 **********************************************
*  ░█▄─░█ █▀▀█ █▀▀▄ █▀▀ 　 █▀▀█ █── █▀▀█ █──█  *
*  ░█░█░█ █──█ █──█ █▀▀ 　 █──█ █── █▄▄█ █▄▄█  *
*  ░█──▀█ ▀▀▀▀ ▀▀▀─ ▀▀▀ 　 █▀▀▀ ▀▀▀ ▀──▀ ▄▄▄█  *
 **********************************************
  `)
  );
  console.log("\nSélectionnez une option : \n");
  options.forEach((option, index) => {
    if (index === selectedOption) {
      console.log(`\x1b[32m> ${option.name}\x1b[0m`);
    } else {
      console.log(`  ${option.name}`);
    }
  });
}

// Initialisation de la bibliothèque keypress
keypress(process.stdin);

// Fonction pour gérer les événements clavier
function handleKeypress(ch, key) {
  if (key && key.name === "return") {
    // L'utilisateur a appuyé sur la touche Entrée
    console.log(
      `Vous avez sélectionné l'option ${selectedOption + 1}: ${
        options[selectedOption]
      }`
    );
    if (selectedOption === options.length - 1) {
      // L'utilisateur a choisi de quitter le programme
      console.log("Au revoir !");
      process.stdin.pause();
    } else {
      // L'utilisateur a choisi une option
      selectedOption = 0;
      printMenu();
    }
  } else if (key && key.name === "up") {
    // L'utilisateur a appuyé sur la touche flèche haut
    selectedOption = Math.max(0, selectedOption - 1);
    printMenu();
  } else if (key && key.name === "down") {
    // L'utilisateur a appuyé sur la touche flèche bas
    selectedOption = Math.min(options.length - 1, selectedOption + 1);
    printMenu();
  }
}

// Écoute des événements clavier
process.stdin.on("keypress", handleKeypress);
process.stdin.setRawMode(true);
process.stdin.resume();

// Affichage du menu
printMenu();
