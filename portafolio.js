//Hacer click en enviar y que diga mensaje enviado


window.onload= function () {

    document.getElementById('enviarmensaje').onclick=function(){
        console.log ('mensaje enviado');
        document.getElementById('mensajeenviado').innerHTML="Mensaje Enviado";
        alert('¿Esta seguro que quiere enviar el mensaje?');
    }
    
    }