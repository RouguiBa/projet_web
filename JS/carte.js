var map = L.map('map').setView([47.50023382620123, 1.4579919877970893], 16);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var markers = new L.FeatureGroup();
var list_objets=[];
var inventaire=document.getElementById("inventaire");

function set(i){
    var data='id='+i;
    var popup = L.popup();
    fetch('../PHP/database.php', {
      method: 'post',
      body: data,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'}
     })
      .then(result => result.json())
      .then(result => {
            var objet=result[0];
            var src= document.getElementById("inventaire");
            var icon = L.icon({
                                    iconUrl: result[0].image,
                                    iconSize:     [50, 100], 
                                    iconAnchor:   [22, 94], 
                                    popupAnchor:  [-3, -76] 
                                    });
              var marqueur = L.marker([result[0].x,result[0].y],{icon: icon});
              marqueur.bindPopup(result[0].msg,{maxWidth: 500});
              // marqueur.addTo(map);
              markers.addLayer(marqueur);
              // popup.set
              
              // console.log(JSON.parse(result[0].niveau_zoom));
          
              map.on('zoom', function() {
                if (map.getZoom()>=result[0].niveau_zoom){
                  map.addLayer(markers);
                }
                else if(map.getZoom()<result[0].niveau_zoom){
                    map.removeLayer(markers);
                  }
            });
            list_objets.push(objet);
            console.log(list_objets);

              function click(m){
                var img = document.createElement("img");
                img.src=objet.image
                img.setAttribute('id','myimg');
                // var identifiant=list_objets[i].id;
                if(objet.type_objet==="recuperable"){
                  m.on("click",function onClick(){
                    src.appendChild(img);
                  },{once:true});
                }
            }
            
            click(marqueur);
        })}

for (var i = 1; i < 4; i++){
  set(i);
  
}


