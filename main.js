// 1 buscar elementos 

const listaIndice =  document.querySelector('#indice');

const titulosArticulo =  document.querySelectorAll('main h2');

const botonModo = document.querySelector('#boton-modo');
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

 botonModo.addEventListener('click', function(){

    document.body.classList.toggle('modo-oscuro');

    if(document.body.classList.contains('modo-oscuro')){

        botonModo.textContent = 'Modo claro';
        } else {
            botonModo.textContent = 'Modo oscuro';
        }
    });

    


 //4 secciones plegables





 //5 discusion (comentarios, validacion, etc.> 