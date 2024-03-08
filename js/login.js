function loguear(){
    let user=document.getElementById("usuario").value;
    let pass=document.getElementById("contraseña").value;

    if(user =="Joel" && pass=="1234"){
        window.location="contacto.html"
        ingresar = true;
    }
    else{
       alert("El usuario no existe"); 
    }
}
