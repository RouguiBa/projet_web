formulaire=document.getElementById("form");
var input=document.getElementById("pseudo");
var pseudo=formulaire.elements["pseudo"];
var bouton=document.getElementById("bouton");

formulaire.addEventListener("submit",function form(event){
  if(pseudo.value == ""){
      event.preventDefault();
      // form_OK = false;
      input.placeholder="Veuillez rentrer un pseude";
    }else{
      bouton.addEventListener("click",function form(event){
          location.href="../PHP/carte.php";
      })
    }
})