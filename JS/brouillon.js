window.addEventListener("load",intro,{once: true});

castafiore.addEventListener("click",intro1);
haddock.addEventListener("click",intro2);
duppont.addEventListener("click",intro3);
tournesol.addEventListener("click",intro4);

var val1=false;
var val2=false;
var val3=false;
var val4=false;

function intro1(){
    val1=true;
    return val1;
}
function intro2(){
    val2=true;
    return val2;
}
function intro3(){
    val3=true;
    return val3;
}
function intro4(){
    val4=true;
    return val4;
}


// ################faire un popup plutot sur l'image du chateau qui introduit premier indice!!!###################@





function intro(){
    if(intro1()){
        console.log(1);
        alert("Per la Madonna ! Milou a Disparu depuis ce matin selon Nestor, mon fidèle majordome, il a été aperçu pour la dernière fois vers le musée de Tintin, nous devrions commencé à chercher des pistes par là-bas!");
    }
     else if(intro2()){
        console.log(2);
        alert("Mille Milliard de Mille Sabords ! Milou a Disparu depuis ce matin selon Nestor, le fidèle majordome de Tintin, il a été aperçu pour la dernière fois vers le musée de Tintin, nous devrions commencé à chercher des pistes par là-bas!");
    }
    else if(intro3()){
        alert("Milou a Disparu depuis ce matin selon Nestor, le fidèle majordome de Tintin, il a été aperçu pour la dernière fois vers le musée de Tintin. Foi de Dupondt, nous allons mener l'enquête. Nous devrions commencé à chercher des pistes près du musée!");
    }
    else if(intro4()){
        alert("Milou a Disparu depuis ce matin selon Nestor, le fidèle majordome de Tintin, il a été aperçu pour la dernière fois vers le musée de Tintin, nous devrions commencé à chercher des pistes par là-bas!");
    }
    
}