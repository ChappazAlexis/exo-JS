// UC First: 1ère lettre en MAJ
// ○ hello world => Hello world
function capitalizeFirst(string) {
    if(typeof string == "string" && string.length > 0) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    return "String non valable"
}

console.log(capitalizeFirst("hello world"));


// ● Capitalize : 1ère lettre de chaque mot en MAJ
// ○ hello world => Hello World
function capitalizeAll(string) {
    let word = string.split(" ");
    
    for (let i = 0; i < word.length; i++) {
        word[i] = word[i][0].toUpperCase() + word[i].substring(1);
    }
    str = word.join(" ");
    return str;
}

console.log(capitalizeAll("cette phrase a des mots"));



// ● camelCase : Capitalize + coller les mots
// ○ hello world => HelloWorld
function camelCase(string) {

    let wordCamel = string.split(" ");
    
    for (let i = 0; i < wordCamel.length; i++) {
        wordCamel[i] = wordCamel[i][0].toUpperCase() + wordCamel[i].substring(1);
    }
    
    string = wordCamel.join("");
    return string;
}
    
console.log(camelCase("cette phrase a aussi des mots"));



// ● snake_case: Joindre les mots par des
// Underscores
function snakeCase(string) {

    let wordSnake = string.split(" ");
    
    string = wordSnake.join("_");
    return string;
}

console.log(snakeCase("cette phrase a encore des mots"));



// ● l33t speek : Cryptage (uniquement les voyelles)
// ○ anaconda => 4n4c0nd4
// ○ A=>4, E=>3, I=>1, O=>0 ,U=> (_), Y=>7
function leet(string) {
    string = string.replaceAll('a', '4').replaceAll('e', '3').replaceAll('i', '1').replaceAll('o', '0').replaceAll('u', '(_)').replaceAll('y', '7');
    
    return string;
}

console.log(leet("dans cette phrase il y a toujours des mots"));




// ● findLongestWord : retourne le mot le plus long d’une pharse.
// ○ Le chemin le plus cours n'est pas toujours le meilleur => toujours

function longestWord(string) {
    let str = string.split(" ");
    let longest = 0;
    let word = null;
    
    for (let i = 0; i < str.length - 1; i++) {
        if (longest < str[i].length) {
            longest = str[i].length;
            word = str[i];
        }
    }
    return word;
}

console.log(longestWord("Le chemin le plus cours n'est pas toujours le meilleur"))