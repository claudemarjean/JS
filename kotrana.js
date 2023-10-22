let tableau = [3,2,6,5,4,9];

let sommeNumberMultipleTreeAndFive = (tableau)=>{
     return tableau.reduce((accumulateur,element)=>{
        if(element % 3 === 0 || element % 5 === 0){
            return accumulateur  + element;
        }else{
            return accumulateur
        }
        
    },0);
}

let somme = sommeNumberMultipleTreeAndFive(tableau);
console.log(somme);