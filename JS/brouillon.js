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
// .on('click', e => e.target.remove()) 0513


//////////////////// CHRONO ////////////////////

// var chrono = document.getElementById('chrono');
// var sec =0;
// var min=0;
// var hrs=0;
// var t;

//fonction tick permet de changer secondes en min et heures
// function tick(){
//     sec++;
//     if (sec >= 60) { //60 secondes égal 1 min
//         sec = 0;
//         min++;
//         if (min >= 60) { //60min donne 1h
//             min = 0;
//             hrs++;
//         }
//     }
// }

// function add() {
//     tick();//incremente temps +1sec
//     chrono.textContent = (hrs > 9 ? hrs : "0" + hrs)
//         + ":" + (min > 9 ? min : "0" + min)
//         + ":" + (sec > 9 ? sec : "0" + sec);
//      var lastChar = chrono.innerText.slice(1,2);
//     if(lastChar == 1){
//                chrono.style.color = 'red';
//                //alert("temps dépassé  !")
//                window.open(
//            "../php/perdu.php"
//        );
//        chrono.stop();
//      }
//     timer();
// }

//function chrono_stop(){}

// function timer() {
//     t = setTimeout(add, 1000);
// }

// timer();
// ####AFFICHAGE CARTE####
var map = L.map('map').setView([47.50023382620123, 1.4579919877970893], 17);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
maxZoom: 30,
minZoom: 1,
id: 'mapbox/streets-v11',
tileSize: 512,
zoomOffset: -1,
accessToken: 'pk.eyJ1IjoiYXhlbGxzYyIsImEiOiJja3V5MHJsOHMwemhsMnByZnJraHo3Y3NxIn0.-RSeYnibv28gdgJtmyLbMw'
}).addTo(map);

// ####VARIABLES####
var markers = new L.FeatureGroup();
var list_objets=[];
var list_marker=[];
var inventaire=document.getElementById("inventaire");
var json={};

//####CHRONO####

var chrono = document.getElementById('chrono');
var sec =0;
var min=0;
var hrs=0;
var t;
var start = document.getElementById('strt');
var stop = document.getElementById('stp');
var reset = document.getElementById('rst');

//####PERMET PASSAGE DE HEURE MINUTE ET SECONDE####
function heure_seconde_min(){
    sec++;
    if (sec >= 60) { //60 secondes égal 1 min
        sec = 0;
        min++;
        if (min >= 60) { //60min donne 1h
            min = 0;
            hrs++;
        }
    }
}

function add() {
    heure_seconde_min();//incremente temps +1sec
    chrono.textContent = (hrs > 9 ? hrs : "0" + hrs)
        + ":" + (min > 9 ? min : "0" + min)
        + ":" + (sec > 9 ? sec : "0" + sec);
     var lastChar = chrono.innerText.slice(1,2);
    if(lastChar == 1){
               chrono.style.color = 'red';
               //alert("temps dépassé  !")
               window.open(
           "../php/perdu.php"
       );
       chrono.stop();
     }
    timer();
}

//function chrono_stop(){}

function timer() {
    t = setTimeout(add, 1000);
}

start.onclick = timer;
stop.onclick = function() {
    clearTimeout(t);
}
reset.onclick = function() {
    chrono.textContent = "00:00:00";
    sec = 0; min = 0; hrs = 0;
}


function set(i){
    var data='id='+i;
    fetch('../PHP/database.php', {
      method: 'post',
      body: data,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'}
     })
      .then(result => result.json())
      .then(result => {
        // ####REGLAGE AJOUT MARQUEUR SUR CARTE####
            var objet=result[0];
            var icon = L.icon({
                                    iconUrl: result[0].image,
                                    iconSize:     [50, 100], 
                                    iconAnchor:   [22, 94], 
                                    popupAnchor:  [-3, -76] 
                                    });
              var marqueur = L.marker([result[0].x,result[0].y],{icon: icon});
              marqueur.bindPopup(result[0].texte,{maxWidth: 500});
              markers.addLayer(marqueur);


      // ####REGLAGE VISIBILITÉ DES OBJETS EN FONCTION DU ZOOM####
              map.on('zoom', function() {
                if (map.getZoom()>=result[0].niveau_zoom){
                  map.addLayer(markers);
                }
                else if(map.getZoom()<result[0].niveau_zoom){
                    map.removeLayer(markers);
                  }
            });
            list_objets.push(objet);
            console.log(json);

      // ####REGLAGE AJOUT DES OBJETS DANS L'INVENTAIRE####
              function click(m){
                var img = document.createElement("img");
                img.src=objet.image;
                img.setAttribute('id','myimg');
                if(objet.type_objet==="recup"){
                  m.on("click",function onClick(){
                    inventaire.appendChild(img);
                  },{once:true});
                }
            }
      // ####ENLEVER UN MARQUEUR DE LA CARTE APRÈS USAGE####
            marqueur.on('click',function remove1(){
              marqueur.on('click',function remove2(){
                marqueur.setOpacity([0.0]);
                marqueur.getPopup().remove();
              })
            })
      // ####VOYAGER D'UNE DESTINATION À UNE AUTRE####
              if(objet.type_objet==='transport'){
                marqueur.on("click",function voyage(){
                map.flyTo([objet.coord_x_suivant,objet.coord_y_suivant],16);
                })
              }
              click(marqueur);
        })}

for (var i = 1; i < 10; i++){
  set(i);
}

function recup(){
  if(list_objets[0].type_objet=='b_code'){

  }
}

