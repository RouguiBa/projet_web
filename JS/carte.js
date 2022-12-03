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
var list_marker_code=[];
var list_marker_obj=[];
var inventaire=document.getElementById("inventaire");
var objet_bloque_code=[];
var objet_bloque_obj=[];
var id_objet_select_inventaire=null;
var list_obj_inventaire=[];
var list_obj_inventaire_final=[];
var result_pas_affi=[];
var chrono = document.getElementById('chrono');
var sec =0;
var min=0;
var hrs=0;
var t;
var popup = L.popup()
    .setLatLng([47.50023382620123,1.457991987797089])
    .setContent("<p>Bienvenue au château de Moulinsart où Milou à été aperçu pour la dernière fois.</p><p>Tu peux zoomer et chercher aux alentours du château pour trouver des indices qui pourrait nous aider à retouver Milou.</p><p>Selon Nestor, Milou aime bien s'amuser près de la rivière Le Courpin</p>")
    .openOn(map);


//####CHRONO####
function heure_seconde_min(){
  /**
 * Fonction qui permet le passage des heures en minutes et des minutes en secondes 
 */
  sec++;
  if (sec >= 60) { 
      sec = 0;
      min++;
      if (min >= 60) { 
          min = 0;
          hrs++;
      }
  }
}

function add() {
  /**
 * Function qui permet d'ajouter dans l'heure sur la page
 */
    heure_seconde_min();
    chrono.textContent = (hrs > 9 ? hrs : "0" + hrs)
        + ":" + (min > 9 ? min : "0" + min)
        + ":" + (sec > 9 ? sec : "0" + sec);
    timer();
}


function timer() {
  /**
 * Function qui lance la fonction précédente une seconde après chargement de la page
 */
    t = setTimeout(add, 1000);
}
timer();

// ####FONCTION PRINCIPALE####
function set(i){
  /**
 * Cette fonction permet de récupérer l'emplacement des objets dans la base de donnée
 * Et de crée les marqueurs selon les coordonnées
 */
    var data='id='+i;
    fetch('../PHP/database.php', {
      method: 'post',
      body: data,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'}
     })
      .then(result => result.json())
      .then(result => {
        // ####REGLAGE AJOUT MARQUEUR SUR CARTE###
        if(result[0].type_objet!="pas_affi"){
          var icon = L.icon({
            iconUrl: result[0].img,
            iconSize:     [50, 100], 
            iconAnchor:   [22, 94], 
            popupAnchor:  [-3, -76],
            className: result[0].type_objet
            });
          var marqueur = L.marker([result[0].x,result[0].y],{icon: icon,alt:result[0].rep_code});
          marqueur.bindPopup(result[0].replique,{maxWidth: 500,className:result[0].est_bloque_par,id:result[0].id});
          markers.addLayer(marqueur);
          if(result[0].type_objet==="b_code"){
          objet_bloque_code.push(result[0]);
          list_marker_code.push(marqueur);
          marqueur.setOpacity([0.5]);
          }
          else if(result[0].type_objet==="b_objet"){
          objet_bloque_obj.push(result[0]);
          list_marker_obj.push(marqueur);
          marqueur.setOpacity([0.5]);
          }

          // ####APPEL DES FONCTIONS####
          voyage(marqueur,i);
          config_inventaire(marqueur,i);
          remove_marqueur(marqueur,i);
          niveau_zoom(markers,i);
          debloque_obj_b_code(i);
          // debloque_obj_b_code(j);
        }else{
          voyage(marqueur,i);
          config_inventaire(marqueur,i);
          remove_marqueur(marqueur,i);
          niveau_zoom(markers,i);
          debloque_obj_b_code(i);
          if(parseInt(result[0].id)==14){
            var marqueur = L.marker([result[0].x,result[0].y],{icon: icon,alt:result[0].rep_code});
            marqueur.bindPopup(result[0].replique,{maxWidth: 500,className:result[0].est_bloque_par,id:result[0].id});
            }
        }
                
        })
}

function config_inventaire(marqueur,i){
  /**
 * Cette fonction permet d'ajouter des objets récupérable dans l'inventaire
 * lorsque l'on clique sur ces derniers sur la carte 
 * @param {markers} marqueur correspond au marqueur des objets
 */
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
            list_obj_inventaire.push(image);
            inventaire.appendChild(image);
          },{once:true});
        }
        image.addEventListener("click",selectionne_inventaire)
      })
}

function selectionne_inventaire(e){
  /**
 * Cette fonction correspond à la fonction callback lancé sur l'événement clique sur l'image
 * dans la fonction config_inventaire
 */
  var image_click=document.getElementById(e.target.id);
    if(id_objet_select_inventaire==null){
      id_objet_select_inventaire=e.target.id
      image_click.style.border="thick solid red";
    }
    else if(id_objet_select_inventaire==e.target.id){
      id_objet_select_inventaire=null
      image_click.style.border="none";
    }

    else if(id_objet_select_inventaire!=e.target.id){
      var image_select2=document.getElementById(e.target.id);
      var im=document.getElementById(id_objet_select_inventaire);
      image_select2.style.border="thick solid red";
      im.style.border="none";
      id_objet_select_inventaire=e.target.id;
    }
}

function debloque_obj_b_obj(j){
  /**
 * Cette fonction permet de débloquer les objets qui sont bloqué par un autre objet
 * Elle permet de vérifier si le bon objet est bien selectionné dans l'inventaire pour débloqué l'objet bloqué
 * Elle permet de supprimer de l'inventaire les objets qui on déjà servi à débloquer un objet
 * Elle permet également de faire apparaitre sur la carte le nouvel objet qui apparait quand on débloque l'objet
 */
  var data='id='+j;
    fetch('../PHP/debloque.php', {
      method: 'post',
      body: data,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'}
     })
      .then(r => r.json())
      .then(r => {
        list_marker_obj.forEach(el => el.on("click", function handleClick(e){
        list_obj_inventaire_final.push(_.uniq(list_obj_inventaire, 'id'));
        var id_objet_debloquant_objet_bloque=e.target._popup.options.className;
        for(var image_inven of list_obj_inventaire_final[0]){
          image_inven.addEventListener("click",function img_inv(ev){
            var id_obj_select_dans_inventaire=ev.target.id;
            if(_.isEqual(id_objet_debloquant_objet_bloque, parseInt(id_obj_select_dans_inventaire))){
              if(document.getElementById("button"+id_objet_debloquant_objet_bloque)){
                var button_debloque=document.getElementById("button"+id_objet_debloquant_objet_bloque);
                button_debloque.addEventListener("click",function new_replique(){
                  for (var objet_b of objet_bloque_obj){
                    if(el._popup.options.className===objet_b.est_bloque_par){
                      el.setOpacity([1.0]);
                      el.bindPopup(objet_b.replique_debloque);
                      if(objet_b.id==r[0].id_debloqueur){
                        var icon = L.icon({
                          iconUrl: r[0].img,
                          iconSize:     [50, 100], 
                          iconAnchor:   [22, 94], 
                          popupAnchor:  [-3, -76],
                        });
                        var marqueur = L.marker([r[0].x,r[0].y],{icon: icon});
                        marqueur.addTo(map);
                        marqueur.on("click",function voyage(){
                          map.flyTo([r[0].coord_x_suivant,r[0].coord_y_suivant],17);
                        })                
                      }
                      for (const child of inventaire.children) {
                        if(child.id==id_obj_select_dans_inventaire){
                          inventaire.removeChild(child)
                          id_objet_select_inventaire=null;
                          var idx=list_obj_inventaire_final.indexOf(image_inven);
                          if (idx > -1) {
                            list_obj_inventaire_final.splice(idx,1);
                          }
                        }
                      }
                    }
                  } 
                })
              }
            }
          })
        } 
        }));
})
}

function debloque_obj_b_code(i){
  /**
 * Cette fonction permet de débloquer les objets qui sont bloqué par un code
 * Elle permet de vérifier si le code écrit dans le formulaire est le bon
 * Elle permet de faire apparaitre sur la carte le nouvel objet qui apparait quand on débloque l'objet
 */
  var data='id='+i;
  fetch('../PHP/database.php', {
    method: 'post',
    body: data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'}
   })
    .then(r => r.json())
    .then(r => {
      if(r[0].type_objet==="pas_affi"){
        result_pas_affi.push(r[0]);
      }      
      list_marker_code.forEach(el => el.on("click", function handleClick(e){
        if(r[0].rep_code==el.options.alt){
          for (var objet_b_code of objet_bloque_code){
            if(document.getElementById("myForm"+el.options.alt)){
              var form=document.getElementById("myForm"+el.options.alt);
              var code=form.elements["pass"+el.options.alt];
              form.addEventListener("submit",function verif_code(event){
                event.preventDefault();
                if(parseInt(code.value)==parseInt(el.options.alt)){
                  el.setOpacity([1.0]);
                  el.bindPopup(r[0].replique_debloque);
                  for(var affi of result_pas_affi){
                    if(parseInt(r[0].id)==parseInt(affi.est_bloque_par)){
                      var icon = L.icon({
                        iconUrl: affi.img,
                        iconSize:     [50, 100], 
                        iconAnchor:   [22, 94], 
                        popupAnchor:  [-3, -76],
                      });
                      var marqueur = L.marker([affi.x,affi.y],{icon: icon});
                      marqueur.bindPopup(affi.replique);
                      marqueur.addTo(map);
                      if(parseInt(affi.id)!=14){
                        marqueur.on("click",function voyage(){
                          map.flyTo([affi.coord_x_suivant,affi.coord_y_suivant],17);
                        })
                      }else{
                        marqueur.bindPopup(affi.replique);
                        button_fin(marqueur);
                      }
                    }
                  }
                }else if (code.value!=el.options.alt){
                  code.value='';
                  code.placeholder='Mauvez Code veuillez retenter';
                }
              })
            }
          
          } 
        }
      }))
})
}
function remove_marqueur(marqueur,i){
  /**
 *Cette fonction permet de supprimer de la carte les objets de type récupérable lors du deuxième clique sur l'objet
 * @param {markers} marqueur correspond au marqueur des objets de type récupérable
 */
  var data='id='+i;
    fetch('../PHP/database.php', {
      method: 'post',
      body: data,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'}
     })
      .then(result => result.json())
      .then(result => {
        if(result[0].type_objet=="recup"){
          marqueur.on('click',function remove1(){
            marqueur.on('click',function remove2(){
              marqueur.setOpacity([0.0]);
              marqueur.getPopup().remove();
            })
          })
        }
    })
}

function voyage(marqueur,i){
  /**
 *Cette fonction permet de changer de location lorsque l'on clique sur un objet de type "transport"
 * @param {markers} marqueur correspond au marqueur des objets de type "transport"
 */
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
          map.flyTo([result[0].coord_x_suivant,result[0].coord_y_suivant],17);
          })
        }
})
}

function niveau_zoom(markers,i){
  /**
 *Cette fonction permet d'afficher les objets uniquement selon le niveau de zoom 
 * qui leur ai associé dans la base de donné
 * @param {markers} marqueur correspond au marqueur des objets
 */
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
          if(result[0].type_objet!="non_affi"){
            if (map.getZoom()>=result[0].niveau_zoom){
              map.addLayer(markers);
            }
            else if(map.getZoom()<result[0].niveau_zoom){
                map.removeLayer(markers);
              }
          }
      })
      })
}

function button_fin(marqueur){
  /**
 * Cette fonction permet de faire une redirection vers la page de fin du jeu
 * lorsque l'on clique sur bouton se trouvant dans le pop up du dernier objet sur la carte
 * @param {markers} marqueur correspond au marqueur du dernier objet à trouver
 */
  marqueur.on("click", (e)=>{
            var button=document.getElementById("buttonfin");
            score()
            button.addEventListener("click",function last(e){
              location.href="../PHP/score.php";
            })
          })
}

function score(e){
  /**
 *Cette fonction permet de récupérer  le chrono du joueur et son pseudo 
 * afin de l'insérer dans la base de donnée
 */
  var pseudo = document.getElementById("pseudo").innerHTML;
  var temps = document.getElementById("chrono").innerHTML;
  var heure = temps.slice(0,2);
  var minutes = parseInt(temps.slice(3,5));
  var secondes = parseInt(temps.slice(6,8));
  var time = secondes + minutes*60 +heure*3600; 
  var points = 3600 - time // 1h max 
  let score = {'pseudo': pseudo, 'temps':temps,'points':points};
  console.log(heure,minutes,secondes);
  console.log("json",score)
  fetch("../PHP/fin.php",{
    method : "POST",
    body : JSON.stringify(score),
    headers: {
       'Content-Type': 'application/text'
    },
})
.then(function(response){
    return response.text();
})
.then(function(text){
   console.log(text);
})
.catch(function(error){
   console.log(error);
 })

}
// #########Appel de fonction#########
for (var i = 1; i < 15; i++){
  set(i);
}
for (var j = 1; j < 3; j++){
debloque_obj_b_obj(j);

}
