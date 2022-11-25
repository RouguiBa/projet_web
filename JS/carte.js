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
    // if(lastChar == 1){
    //            chrono.style.color = 'red';
    //            //alert("temps dépassé  !")
    //            window.open(
    //        "../php/perdu.php"
    //    );
    //    chrono.stop();
    //  }
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

// ####FONCTION PRINCIPALE####

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
                                    iconUrl: result[0].img,
                                    iconSize:     [50, 100], 
                                    iconAnchor:   [22, 94], 
                                    popupAnchor:  [-3, -76] 
                                    });
              var marqueur = L.marker([result[0].x,result[0].y],{icon: icon});
              marqueur.bindPopup(result[0].replique,{maxWidth: 500});
              markers.addLayer(marqueur);
            
            // ####APPEL DES FONCTIONS####
              voyage(marqueur,i);
              config_inventaire(marqueur,i);
              remove_marqueur(marqueur,i);
              niveau_zoom(markers,i);
        })
}
for (var i = 1; i < 10; i++){
          set(i);
        }

// ####FONCTION AJOUT DES OBJETS DANS L'INVENTAIRE####
function config_inventaire(marqueur,i){
  var data='id='+i;
    fetch('../PHP/database.php', {
      method: 'post',
      body: data,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'}
     })
      .then(result => result.json())
      .then(result => {
                  var image = document.createElement("img");
                    image.src=result[0].img;
                    image.setAttribute('id',result[0].id); //mettre id image de la base 
                    image.setAttribute('class',"myimg"); 
                  if(result[0].type_objet==="recup"){
                    marqueur.on("click",function onClick(){
                      inventaire.appendChild(image);
                    },{once:true});
                  }
                  var select=true;
                  image.addEventListener("click",function selectionne(e){
                    if(select==true){
                      console.log(e.target.id);
                      console.log(result[0]);
                      image.style.border="thick solid red";
                      select=false;
                      if(result[0].type_objet==="b_objet" || result[0].type_objet==="b_code"){
                      marqueur.on("click",function debloque(event){
                        console.log(event);
                        // if(){.originalEvent.srcElement.attributes.src.nodeValue

                        // }
                      })
                      
                    }
                  }else if(select==false){
                      image.style.border="none";
                      select=true;
                    }
                  })
       })
}

// ####FONCTION QUI SUPPRIME UN MARQUEUR DE LA CARTE APRÈS USAGE####
function remove_marqueur(marqueur,i){
  var data='id='+i;
    fetch('../PHP/database.php', {
      method: 'post',
      body: data,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'}
     })
      .then(result => result.json())
      .then(result => {
        marqueur.on('click',function remove1(){
          marqueur.on('click',function remove2(){
            marqueur.setOpacity([0.0]);
            marqueur.getPopup().remove();
          })
        })
    })
}

// ####FONCTION QUI PERMET DE VOYAGER D'UNE DESTINATION À UNE AUTRE####
function voyage(marqueur,i){
  var data='id='+i;
    fetch('../PHP/database.php', {
      method: 'post',
      body: data,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'}
     })
      .then(result => result.json())
      .then(result => {
        if(result[0].type_objet==='transport'){
          marqueur.on("click",function voyage(){
          map.flyTo([result[0].coord_x_suivant,result[0].coord_y_suivant],16);
          })
        }
})
}

// ####FONCTION QUI PERMET D'AFFICHER LES OBJETS EN FONCTION DU ZOOM####
function niveau_zoom(markers,i){
  var data='id='+i;
    fetch('../PHP/database.php', {
      method: 'post',
      body: data,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'}
     })
      .then(result => result.json())
      .then(result => {
        map.on('zoom', function() {
          if (map.getZoom()>=result[0].niveau_zoom){
            map.addLayer(markers);
          }
          else if(map.getZoom()<result[0].niveau_zoom){
              map.removeLayer(markers);
            }
      })
      })
}

// function recup(image){
//   var data='id='+i;
//     fetch('../PHP/database.php', {
//       method: 'post',
//       body: data,
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded'}
//      })
//       .then(result => result.json())
//       .then(result => {
        
//           // if(result[0].type_objet==='b_code' || result[0].type_objet==='b_objet'){
//           //   var idx_obj_a_recup=result[0].id_debloque;
//           //   marqueur.bindPopup("Ce objet est bloqué, pour le débloquer chercher l'item approprié",{maxWidth: 500});
//           // }
// })
// }

