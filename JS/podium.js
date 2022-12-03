if(document.getElementById("premier") && document.getElementById("deuxieme") && document.getElementById("troisieme") && document.getElementById("quatrieme") && document.getElementById("cinquieme")){
  var premier = document.getElementById("premier");
var deuxieme = document.getElementById("deuxieme");
var troisieme = document.getElementById("troisieme");
var quatrieme = document.getElementById("quatrieme");
var cinquieme = document.getElementById("cinquieme");

function podium_index(i){
  /**
 *Cette fonction d'afficher le hall of fame dans la page d'index en récupérent les données 
 *depuis la base de donnée 
 */
  var podium="id="+i
  fetch("http://localhost/projet_web/PHP/podium.php",{
    method : "POST",
    body : podium,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
})
.then(result => result.json())
.then(result => {
  premier.innerHTML='<td>'+JSON.parse(JSON.stringify(result[0].pseudo))+'</td>'+'<td>'+JSON.parse(JSON.stringify(result[0].temps))+'</td>'+'<td>'+JSON.parse(JSON.stringify(result[0].points))+'</td>';
  deuxieme.innerHTML='<td>'+JSON.parse(JSON.stringify(result[1].pseudo))+'</td>'+'<td>'+JSON.parse(JSON.stringify(result[1].temps))+'</td>'+'<td>'+JSON.parse(JSON.stringify(result[1].points))+'</td>';
  troisieme.innerHTML='<td>'+JSON.parse(JSON.stringify(result[2].pseudo))+'</td>'+'<td>'+JSON.parse(JSON.stringify(result[2].temps))+'</td>'+'<td>'+JSON.parse(JSON.stringify(result[2].points))+'</td>';
  quatrieme.innerHTML='<td>'+JSON.parse(JSON.stringify(result[3].pseudo))+'</td> '+'<td>'+JSON.parse(JSON.stringify(result[3].temps))+'</td>'+'<td>'+JSON.parse(JSON.stringify(result[3].points))+'</td>';
  cinquieme.innerHTML='<td>'+JSON.parse(JSON.stringify(result[4].pseudo))+'</td> '+'<td>'+JSON.parse(JSON.stringify(result[4].temps))+'</td>'+'<td>'+JSON.parse(JSON.stringify(result[4].points))+'</td>';
})
}
podium_index();
}