//tomamos los elmentos del html
const txtPuntaje = document.querySelector("#puntos");
const nombre = document.querySelector("#nombre");
const nombreJugador = document.querySelector("#nombre-jugador");

nombre.innerHTML = localStorage.getItem("nombre");
nombreJugador.innerHTML = localStorage.getItem("nombre");


//recupero el puntaje en caso que ya este jugando
let puntajeTotal = 0
if(!localStorage.getItem("puntaje-total")){
    puntajeTotal = 0
    txtPuntaje.innerHTML = puntajeTotal
}else{
    puntajeTotal = parseInt(localStorage.getItem("puntaje-total"))
    txtPuntaje.innerHTML = puntajeTotal
}

//necesitamos una estructura para guardar las categorias ya jugadas
let categoriasJugadas
//controlo si hay algo cargado en el localstorage, para cargar las categorias ya jugadas
const categoriasJugadasLS = JSON.parse(localStorage.getItem("categorias-jugadas"))
if(categoriasJugadasLS){
    categoriasJugadas = categoriasJugadasLS
}else{//si todavia no se jugo ninguna categoria se empieza con un array vacio
    categoriasJugadas = []
}

//agrego un event listener click a todos las opciones de categorias
function agregarEventListernerOpctiones(){
    const categorias = document.querySelectorAll(".categoria")
    categorias.forEach(categoria =>{
        categoria.addEventListener("click", (e)=>{
            console.log(e.currentTarget.id);
            //guardo la categoria que se eligio en el local storage
            localStorage.setItem("categoria-actual",e.currentTarget.id)
            //agrego al arreglo la categoria
            categoriasJugadas.push(e.currentTarget.id)
            localStorage.setItem("categorias-jugadas", JSON.stringify(categoriasJugadas))
            console.log(categoriasJugadas);
            //re dirijo a la pantalla del juego
            location.href = "juego.html" 
        })
    })

    //desabilito las categorias que se jugaron
    categorias.forEach(categoria =>{
        if(categoriasJugadas.includes(categoria.id)){
            categoria.classList.add("desabilitada")
            categoria.classList.add("no-events")
        }
    })
}
agregarEventListernerOpctiones()