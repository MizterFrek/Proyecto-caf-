const datos ={
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input',leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);


//Evento submit
formulario.addEventListener('submit',function(evento){
    evento.preventDefault();
    const {nombre, email, mensaje} = datos;
    
    //Validar el Formulario 
    if(nombre === '' || email === '' || mensaje === ''){
        mostrarAlerta('Todos los campos son obligatorios',true);
        return;
    }
    mostrarAlerta('Mensaje enviado correctamente');  //Enviar el formulario

});

function leerTexto(e){
    // console.log(e.target.value);
    datos[e.target.id] = e.target.value;
}
function mostrarAlerta(mensaje,error=null){
    const alerta = document.createElement('P');
    alerta.textContent=mensaje;
    if(error){
        alerta.classList.add('error');
    }
    else{
        alerta.classList.add('correcto');
    }
    alerta.remove();
    formulario.appendChild( alerta );
    //Desaparece despues de 5 segs
    setTimeout(()=>{
        alerta.remove();
    },5000);
}

