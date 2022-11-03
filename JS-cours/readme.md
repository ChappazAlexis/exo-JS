# Partie 2

## EXERCICE 2

#### Horloge :

1) Créez un paragraphe dans votre fichier HTML

2) Récupérez l’heure et l’afficher au format “H:m:s” dans ce
paragraphe

3) Mettre l’affichage des secondes, minutes et heures à jour
en utilisant la méthode setInterval ou setTimer

## EXERCICE 2 - a

#### Navigation

- 1) Créez une navbar avec une liste à puce (ul, li, a) contenant
5 liens

- 2) Changer le style (background-color, color, etc.) du seul
élément cliqué

- 3) Si un autre lien à été cliqué avant, réinitialiser son style
d’origine

## EXERCICE 2 - b

#### Liste de course

- 1) Créez le HTML pour avoir le visuel suivant : 
(champs de recherche, bouton 'ok', bouton 'suppr')

- 2) Au clic sur le bouton OK, ajouter le texte saisie dans la
liste.

- 3) Au clic sur le bouton Supprime, supprimer le dernier
élément de la liste.


## EXERCICE 2 - b

#### Formulaire

* 1) Créez un formulaire avec les champs :
    - Prénom
    - Nom
    - Email
    - Téléphone
    - Password

* 2) Ajouter un bouton de Validation

* 3) Au clic sur le bouton de validation vérifier :
    - Prénom : Requis
    - Nom : Requis
    - Email : Requis, doit respecter un format de mail
    - Téléphone : Requis, uniquement valeur numérique et de
    longueur maximale de 10
    - Password : Requis, minimum 8 caractères + 1 caractère
    spécial (!, ?, #) (utiliser une regex)

* 4) Afficher les messages d’erreur dans une div

____

# Partie 3

*  Créez un bouton qui va quand il est cliqué exécuter une
fonction testPromise
*  Créez une fonction testPromise qui va :
    - Quand elle commence afficher le text “1”
    - Créez une Promise qui va dans sa callback afficher le
    text “2” puis va dans un setTimeout avec un temps
    aléatoire (Math.random() * 2000 + 1000) resolve “3”
    - Utilisez le then sur la Promise créez précédemment
    pour récupérer la valeur que vous avez résolue et
    afficher la
    - Avant de finir la fonction afficher le text “4“

*  Avant d'exécuter le code, essayer de deviner l’ordre de
sortie

## EXERCICE 

* 1) Créez une fonction getToken
* 2) Cette fonction retourne une promesse
* 3) Utiliser un setTimeout qui durera 2000 millisecondes
* 4) Tester dans la callbask du setTimeout :

if (Math.random() > 0.5)

* 5) resolve avec la valeur d’un token = "qsdfEDLSoie5d8899;dEDd"
* 6) Sinon reject avec l’erreur "Vous n'avez pas pu obtenir de token"
* 7) Utiliser le then sur la promise pour récupérer la valeur et
l’afficher

* 8) Utiliser le catch sur la promise pour récupérer le message
d’erreur et l’afficher

## Exercice chainage de promesses

* 1) Créez une fonction getUser qui prend un token en paramètre
* 2) Cette fonction retourne une promesse
* 3) Utiliser un setTimeout qui durera 2000 millisecondes
* 4) Tester dans la callbask du setTimeout :

if (Math.random() > 0.5)

* 5) resolve avec la valeur correspondant à un objet user : { id: 1, token:
token}
* 6) Sinon reject avec l’erreur "Pas d’utilisateur"
* 7) Le premier then appel la promise getToken pour récupérer le token qui
va retourner l’appel à la promise getUser en lui passant le token
récupéré.
* 8) Le deuxième then afficher la valeur renvoyer par la promise getUser
* 9) Un catch affiche le message d’erreur

## Exercice

* 1) En utilisation les deux promise précédente : getToken et getUser
* 2) Créez une fonction getTokenUser qui sera async
* 3) Dans un try ... catch, appeler dans cette fonction la promise
getToken pour récupérer le token avec await
* 4) Appeler la promise getUser pour récupérer le user avec await
* 5) Afficher le token et le user
* 6) Afficher dans le catch le message d’erreur


## Exercice – Récupérer des GIF


* 1) Document : https://developers.giphy.com/docs/api#quick-start-guide

* 2) Créer un compte et récupérez votre API KEY

* 3) Créer un fichier gifs.html qui contient un formulaire avec 2 champs: un pour du
texte qui servira au terme recherché, et l’autre pour le nombre max de gif à
récupérer

* 4) Depuis un fichier JS, écrire le code pour faire un appel à l’API (fetch) sur
https://api.giphy.com/v1/gifs/search
    a) Vous devez y renseigner plusieurs QueryStrings :
        - Q = le terme utilisé pour la recherche
        - api_key = Votre API KEY
        - Limit = le nombre de résultat
        - lang = langue des gifs récupérés

Exemple :
https://api.giphy.com/v1/gifs/search?api_key=WlXD6BcSdEdBFJ4viI8NVLE6toKAbpxy&q=javascript&limit=10&lang=fr

* 5) Récupérer les urls des gifs (.gif) et les injecter dans des balises <img> dans votre
page HTML