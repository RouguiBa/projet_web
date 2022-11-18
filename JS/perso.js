
var message=document.getElementById("msg");
var castafiore=document.getElementById("1");
var duppont=document.getElementById("2");
var haddock=document.getElementById("3");
var tournesol=document.getElementById("4");

castafiore.addEventListener("click",message1);
haddock.addEventListener("click",message2);
duppont.addEventListener("click",message3);
tournesol.addEventListener("click",message4);

function message1(){
    message.innerText="Bienvenue à toi Castafiore dans cette nouvelle aventure avec Tintin";
}
function message2(){
    message.innerText="Bienvenue à toi Dupond Dupont dans cette nouvelle aventure avec Tintin";

}
function message3(){
    message.innerText="Bienvenue à toi Haddock dans cette nouvelle aventure avec Tintin";

}
function message4(){
    message.innerText="Bienvenue à toi Tournesol dans cette nouvelle aventure avec Tintin";
}

setTimeout(function choix1(){
    window.location.href='../PHP/carte.php';
}, 3000)
setTimeout(function choix2(){
    window.location.href='../PHP/carte.php';
},3000)
setTimeout(function choix3(){
    window.location.href='../PHP/carte.php';
},3000)
setTimeout(function choix4(){
    window.location.href='../PHP/carte.php';
},3000)
