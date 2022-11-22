var map = L.map('map').setView([47.50023382620123, 1.4579919877970893], 17);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
maxZoom: 20,
minZoom: 1,
id: 'mapbox/streets-v11',
tileSize: 512,
zoomOffset: -1,
accessToken: 'pk.eyJ1IjoiYXhlbGxzYyIsImEiOiJja3V5MHJsOHMwemhsMnByZnJraHo3Y3NxIn0.-RSeYnibv28gdgJtmyLbMw'
}).addTo(map);
var markers = new L.FeatureGroup();
var list_objets=[];
var list_marker=[];
var inventaire=document.getElementById("inventaire");

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

      // ####REGLAGE AJOUT DES OBJETS DANS L'INVENTAIRE####
              function click(m){
                var img = document.createElement("img");
                img.inventaire=objet.image
                img.setAttribute('id','myimg');
                if(objet.type_objet==="recup"){
                  m.on("click",function onClick(){
                    inventaire.appendChild(img);
                  },{once:true});
                }
            }
            marqueur.on('click',function remove(){
              marqueur.on('click',function remove2(){
                marqueur.setOpacity([0.0]);
              })
            })
            click(marqueur);
            // if (objet.coord_x_suivant!=0 && objet.coord_y_suivant!=0){
              if(objet.type_objet==='transport'){
                marqueur.on("click",function voyage(){
                map.flyTo([objet.coord_x_suivant,objet.coord_y_suivant],16);
                })
              }
        })}

for (var i = 1; i < 10; i++){
  set(i);
}
// console.log(list_objet);



// function jeu(){
//   for(var i=0;i<list_objets.length;i++){
//     if (list_objets[i].objets_suivant!=0){
//       if(list_objets[i].type_objet==='transport'){
//         var idx_lieu_suivant=list_objets[i].objets_suivant;
//         if(list_objets[i].id==idx_lieu_suivant){
//           var x=list_objets[i].x;
//           var y=list_objets[i].y;
//           map.flyTo([x,y], 18);
//         }
//       }
//     }
//   }
// }