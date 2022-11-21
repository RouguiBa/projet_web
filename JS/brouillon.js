// window.addEventListener("load",intro,{once: true});

// castafiore.addEventListener("click",intro1);
// haddock.addEventListener("click",intro2);
// duppont.addEventListener("click",intro3);
// tournesol.addEventListener("click",intro4);

// var val1=false;
// var val2=false;
// var val3=false;
// var val4=false;

// function intro1(){
//     val1=true;
//     return val1;
// }
// function intro2(){
//     val2=true;
//     return val2;
// }
// function intro3(){
//     val3=true;
//     return val3;
// }
// function intro4(){
//     val4=true;
//     return val4;
// }


// // ################faire un popup plutot sur l'image du chateau qui introduit premier indice!!!###################@





// function intro(){
//     if(intro1()){
//         console.log(1);
//         alert("Per la Madonna ! Milou a Disparu depuis ce matin selon Nestor, mon fidèle majordome, il a été aperçu pour la dernière fois vers le musée de Tintin, nous devrions commencé à chercher des pistes par là-bas!");
//     }
//      else if(intro2()){
//         console.log(2);
//         alert("Mille Milliard de Mille Sabords ! Milou a Disparu depuis ce matin selon Nestor, le fidèle majordome de Tintin, il a été aperçu pour la dernière fois vers le musée de Tintin, nous devrions commencé à chercher des pistes par là-bas!");
//     }
//     else if(intro3()){
//         alert("Milou a Disparu depuis ce matin selon Nestor, le fidèle majordome de Tintin, il a été aperçu pour la dernière fois vers le musée de Tintin. Foi de Dupondt, nous allons mener l'enquête. Nous devrions commencé à chercher des pistes près du musée!");
//     }
//     else if(intro4()){
//         alert("Milou a Disparu depuis ce matin selon Nestor, le fidèle majordome de Tintin, il a été aperçu pour la dernière fois vers le musée de Tintin, nous devrions commencé à chercher des pistes par là-bas!");
//     }
    
// }

// function jeu(){
//     for(var i=0;i<list_objets.length;i++){
//       if (list_objets[i].objets_suivant!=0){
//         if(list_objets[i].type_objet==='transport'){
//           var idx_lieu_suivant=list_objets[i].objets_suivant;
//           if(list_objets[i].id==idx_lieu_suivant){
//             var x=list_objets[i].x;
//             var y=list_objets[i].y;
//             map.flyTo([x,y], 18);
//           }
//         }
//       }
//     }
//   }

//   function jeu(){
//     for(var i=0;i<list_objets.length;i++){
//       if (list_objets[i].objets_suivant!=0){
//         if(list_objets[i].type_objet==='transport'){
//           var idx_lieu_suivant=list_objets[i].objets_suivant;
//             var x=list_objets[idx_lieu_suivant-1].x;
//             var y=list_objets[idx_lieu_suivant-1].y;
//             map.flyTo([x,y], 18);
          
//         }
//       }
//     }
//   }

// L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
// maxZoom: 20,
// minZoom: 1,
// id: 'mapbox/streets-v11',
// tileSize: 512,
// zoomOffset: -1,
// accessToken: 'pk.eyJ1IjoiYXhlbGxzYyIsImEiOiJja3V5MHJsOHMwemhsMnByZnJraHo3Y3NxIn0.-RSeYnibv28gdgJtmyLbMw'
// }).addTo(map);
// L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', { 
//   maxZoom: 20,  
//   attribution : '&copy; <a href="osm.org/copyright">OpenStreetMap</a> contributors'
//   }).addTo(map);
// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map);
// .on('click', e => e.target.remove())