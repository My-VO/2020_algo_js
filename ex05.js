/* Chaîne de caractères */
var helloWorld = '      Hello world    ';
console.log(helloWorld);

/* Supprimer les espaces vides au début */
console.log(helloWorld = helloWorld.trim());

/* Séparer la chaîne en deux avec l'espace vide centrale */
helloWorld = helloWorld.split(" ");

/* Afficher le tableau retourné par la méthode .split() */
console.log(helloWorld);
