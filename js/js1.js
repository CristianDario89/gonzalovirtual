function takeInput(){
         var txt = alert("GRACIAS POR SU COMPRA. Le enviaremos un mensaje de confirmacion avisando que tu pedido ya esta disponible.") ;
         var output = document.getElementById("output");
         output.innerHTML = txt;
    
}
/*-----------------------------

 var names = ["Anna", "Bob", "Charles", "Daniel",
         "Allison", "Beatrice", "Cindy", "Fiona"];

var filteredNames = names.filter(function(word) {
    return word[0] === "C";
});

console.log(filteredNames);

/*----------------------
function filterMatches(words, regexp) {
    return names.filter(function (word) {
         return regexp.test(word);
    });
}
   
console.log(filterMatches(cervezas, /^A/));

console.log(filterMatches(cervezas, /^.{2}b/));
/*-----------------------/

function createCallback(position, letter) {
  return function (word) {
    return word.length > position && word[position] === letter;
  }
}

var filteredNames = names.filter(createCallback(0, "F"));
console.log(filteredNames);
/*---------------
 var array =["Anna", "Bob", "Charles", "Daniel", "Allison", "Beatrice", "Cindy", "Fiona"];
var matched_terms = [];
var search_term = "An";
/*search_term  = search_term.toLowerCase();
           array.forEach(item => {
                  if(item.indexOf(search_term) !== -1 ){
                  console.log(item);
                  matched_terms.push( item ); 
      }

console.log(matched_terms);
})----*/


 
