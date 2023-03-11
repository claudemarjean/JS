import { ajoutListenersAvis } from "./avis.js";
// Récupération des pièces depuis le fichier JSON
const reponse = await fetch("http://localhost:8081/pieces");
const pieces = await reponse.json();

function genererPieces(pieces){
    for (let i = 0; i < pieces.length; i++) {

        const article = pieces[i];
        // Récupération de l'élément du DOM qui accueillera les fiches
        const sectionFiches = document.querySelector(".fiches");
        // Création d’une balise dédiée à une pièce automobile
        const pieceElement = document.createElement("article");
        // Création des balises 
        const imageElement = document.createElement("img");
        imageElement.src = article.image;
        const nomElement = document.createElement("h2");
        nomElement.innerText = article.nom;
        const prixElement = document.createElement("p");
        prixElement.innerText = `Prix: ${article.prix} € (${article.prix < 35 ? "€" : "€€€"})`;
        const categorieElement = document.createElement("p");
        categorieElement.innerText = article.categorie ?? "(aucune catégorie)";
        const descriptionElement = document.createElement("p");
        descriptionElement.innerText = article.description ?? "Pas de description pour le moment.";
        const stockElement = document.createElement("p");
        stockElement.innerText = article.disponibilite ? "En stock" : "Rupture de stock";
        const avisElement = document.createElement("button");
        avisElement.innerText = "Afficher les avis";
        avisElement.setAttribute("data-id",i);
        
        // On rattache la balise article a la section Fiches
        sectionFiches.appendChild(pieceElement);
        // On rattache l’image à pieceElement (la balise article)
        pieceElement.appendChild(imageElement);
        pieceElement.appendChild(nomElement);
        pieceElement.appendChild(prixElement);
        pieceElement.appendChild(categorieElement);
        //Ajout des éléments au DOM pour l'exercice
        pieceElement.appendChild(descriptionElement);
        pieceElement.appendChild(stockElement);
        pieceElement.appendChild(avisElement);
    
     }
     ajoutListenersAvis();
}

//génération de premier page
genererPieces(pieces);

 const boutonTrier = document.querySelector(".btn-trier");
 
 boutonTrier.addEventListener("click",function(){
    const piecesOrdonnees = Array.from(pieces);
    piecesOrdonnees.sort(function(a,b){
        return a.prix - b.prix;
    });
    //effacement de l'écran et regénération de la page
    document.querySelector(".fiches").innerHTML = "";
    genererPieces(piecesOrdonnees);
 })

 const boutonFilter = document.querySelector(".btn-filtrer");

 //liste des pièces abordable
 boutonFilter.addEventListener("click",function(){
    trieParPrix(35);
 })

 function trieParPrix(price){
    const pieceFiltrees = pieces.filter(function(piece){
        return piece.prix <= price;
    });
    //effacement de l'écran et regénération de la page
    document.querySelector(".fiches").innerHTML = "";
    genererPieces(pieceFiltrees);
 }

 const boutonAfficher = document.querySelector(".btn-afficher");

 boutonAfficher.addEventListener("click",function(){
    const pieceDescription = pieces.filter(function(piece){
        return piece.description;
    })
    //effacement de l'écran et regénération de la page
    document.querySelector(".fiches").innerHTML = "";
    genererPieces(pieceDescription);
 });

const boutonTrierDecroissant = document.querySelector(".btn-trier-decroissant");

boutonTrierDecroissant.addEventListener("click",function(){
    const pieceOrdreDecroissant = Array.from(pieces);
    pieceOrdreDecroissant.sort(function(a,b){
        return b.prix - a.prix;
    })
    //effacement de l'écran et regénération de la page
    document.querySelector(".fiches").innerHTML = "";
    genererPieces( pieceOrdreDecroissant);
});

const noms = pieces.map(piece => piece.nom);
for(let i = pieces.length -1 ; i >= 0; i--){
   if(pieces[i].prix > 35){
       noms.splice(i,1)
   }
}

//Création de la liste
const abordablesElements = document.createElement('ul');
//Ajout de chaque nom à la liste
for(let i=0; i < noms.length ; i++){
   const nomElement = document.createElement('li');
   nomElement.innerText = noms[i];
   abordablesElements.appendChild(nomElement)
}
// Ajout de l'en-tête puis de la liste au bloc résultats filtres
document.querySelector('.abordables')
   .appendChild(abordablesElements)

   const nomsDisponibles = pieces.map(piece => piece.nom);
   const prixDisponibles = pieces.map(piece => piece.prix);
   
   for(let i = pieces.length -1 ; i >= 0; i--){
       if(pieces[i].disponibilite === false){
           nomsDisponibles.splice(i,1);
           prixDisponibles.splice(i,1);
       }
   }
   
   const disponiblesElement = document.createElement('ul');
   
   for(let i=0 ; i < nomsDisponibles.length ; i++){
       const nomElement = document.createElement('li');
       nomElement.innerText = `${nomsDisponibles[i]} - ${prixDisponibles[i]} €`;
       disponiblesElement.appendChild(nomElement);
   }
   
   document.querySelector('.disponible-piece').appendChild(disponiblesElement);

   const valPrix = document.querySelector("#max-price");
   const prixMax = document.querySelector(".prix-max");
   const prixAfficher = document.createElement("span");
   valPrix.addEventListener("change",function(){
        document.querySelector(".prix-max").innerHTML = "";
        prixAfficher.innerHTML = valPrix.value;
        prixMax.appendChild(prixAfficher);
        trieParPrix(valPrix.value);
   });
   