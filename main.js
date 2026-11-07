// 1 buscar elementos 

const listaIndice =  document.querySelector('#indice');

const titulosArticulo =  document.querySelectorAll('main h2');

const botonModo = document.querySelector('#boton-modo');

const botonesTamano = document.querySelectorAll('.boton-tamano');

 const articulo = document.querySelector('main');

 const formularioDiscusion = document.querySelector('#formulario-discusion');

const campoNombre = document.querySelector('#campo-nombre');

const campoComentario = document.querySelector('#campo-comentario');

const contadorCaracteres = document.querySelector('#contador-caracteres');

const avisoDiscusion = document.querySelector('#aviso-discusion');

const listaComentarios = document.querySelector('#lista-comentarios');


const MINIMO = 10;

const MAXIMO = 200;

 //2 indice automatico

titulosArticulo.forEach(function (titulo){

    const item = document.createElement('li');

    const enlace = document.createElement('a');



    enlace.textContent = titulo.textContent;

    enlace.href = '#' + titulo.id;
    

    
    item.append(enlace)
    
    listaIndice.append(item);
});



 //3 panel apariencia 

 //modo oscuro

 botonModo.addEventListener('click', function(){

    document.body.classList.toggle('modo-oscuro');

    if(document.body.classList.contains('modo-oscuro')){

        botonModo.textContent = 'Modo claro';
        } else {
            botonModo.textContent = 'Modo oscuro';
        }
    });

    //tamano del texto

botonesTamano.forEach(function (boton) {
    boton.addEventListener('click', function () {

        botonesTamano.forEach(function (otro) {
            otro.classList.remove('activo');
        });
        boton.classList.add('activo');

        articulo.classList.remove('texto-pequeno', 'texto-grande');
        const tamano = boton.getAttribute('data-tamano');
        if (tamano !== 'estandar') {
            articulo.classList.add(`texto-${tamano}`);
        }
    });
});

 //4 secciones plegables


titulosArticulo.forEach(function (titulo) {
    titulo.addEventListener('click', function () {
        titulo.parentElement.classList.toggle('plegada');
    });
});


 //5 discusion (comentarios, validacion, etc.> 

 //contador de caracteres

 campoComentario.addEventListener('input', function () {

    const usados = campoComentario.value.length;

    contadorCaracteres.textContent = `${usados} / ${MAXIMO}`;
 });

 //validacion 
 formularioDiscusion.addEventListener('submit', function (event) {
    event.preventDefault();

    
    avisoDiscusion.textContent = '';


campoNombre.classList.remove('error');


campoComentario.classList.remove('error');

    const nombre = campoNombre.value.trim();
    const comentario = campoComentario.value.trim();

    if (nombre ==='')
    {
        avisoDiscusion.textContent = 'El nombre es obligatorio.';

        campoNombre.classList.add('error');

        return;
    };

    if (comentario.length < MINIMO || comentario.length > MAXIMO) {
        avisoDiscusion.textContent = `El comentario debe tener entre ${MINIMO} y ${MAXIMO} caracteres.`;
        campoComentario.classList.add('error');
        return;
    }

    crearComentario(nombre, comentario);

    formularioDiscusion.reset();

    contadorCaracteres.textContent = `0 / ${MAXIMO}`;
});

//crear comentario 

function crearComentario(nombre, comentario){

    const item = document.createElement('li');

    const autor = document.createElement('strong');

    autor.textContent = nombre;

    const mensaje = document.createElement('p');

    mensaje.textContent = comentario;

    const borrar = document.createElement('button');

    borrar.textContent = 'Borrar';

    borrar.classList.add ('borrar');


    item.append(autor, mensaje, borrar);

    listaComentarios.append(item);

}
listaComentarios.addEventListener('click', function (event) {
    if (event.target.classList.contains('borrar')){
        event.target.parentElement.remove();
    }});