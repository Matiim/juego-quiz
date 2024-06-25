//armo el arreglo de las preguntas
const preguntas = [
    {
        id:1,
        categoria:"general",
        titulo:"¿Con cuál de estos países limita Argentina?",
        opcionA:"Uruguay",
        opcionB:"Bolivia",
        opcionC:"Chile",
        opcionD:"Todas las anteriores",
        correcta:"d"
    },
    {
        id:2,
        categoria:"general",
        titulo:"¿Cuál es la capital de Argentina?",
        opcionA:"Buenos Aires",
        opcionB:"Santa Fe",
        opcionC:"Mendoza",
        opcionD:"Cordoba",
        correcta:"a"
    },
    {
        id:3,
        categoria:"general",
        titulo:"¿Cuántas provincias tiene Argentina?",
        opcionA:"24",
        opcionB:"30",
        opcionC:"23",
        opcionD:"19",
        correcta:"c"
    },
    {
        id:4,
        categoria:"general",
        titulo:"¿Cómo se llama la moneda del país?",
        opcionA:"Euro",
        opcionB:"Peso",
        opcionC:"Dolar",
        opcionD:"Libre",
        correcta:"b"
    },
    {
        id:5,
        categoria:"general",
        titulo:"¿Cuáles de estas maravillas naturales del mundo se encuentra en Argentina?",
        opcionA:"Montaña de Mesa",
        opcionB:"Amazonía",
        opcionC:"Isla Jeju",
        opcionD:"Catarata de Iguazú",
        correcta:"d"
    },
    {
        id:6,
        categoria: "musica",
        titulo: "¿Quién es el famoso guitarrista de la banda Queen?",
        opcionA: "John Lennon",
        opcionB: "Jimi Hendrix",
        opcionC: "Brian May",
        opcionD: "Eric Clapton",
        correcta: "c"
    },
    {
        id:7,
        categoria:"musica",
        titulo:"¿Comó es el nombre del artista 'Duki'?",
        opcionA:"Mauro Lombardo",
        opcionB:"Santiago Rodrigres",
        opcionC:"Valentin Oliva",
        opcionD:"Mauro Monzón",
        correcta:"a"
    },
    {
        id:8,
        categoria: "musica",
        titulo: "¿Cuál es el instrumento principal en una orquesta sinfónica?",
        opcionA: "Guitarra",
        opcionB: "Piano",
        opcionC: "Violín",
        opcionD: "Flauta",
        correcta: "c"
    },
    {
        id:9,
        categoria: "musica",
        titulo: "¿Cuál es el género musical más popular en todo el mundo?",
        opcionA: "Rock",
        opcionB: "Electrónica",
        opcionC: "Rap",
        opcionD: "Pop",
        correcta: "d"
    },
    {
        id:10,
        categoria: "musica",
        titulo: "¿Quién es conocido como el pimer Rey del Pop?",
        opcionA: "Elvis Presley",
        opcionB: "Michael Jackson",
        opcionC: "Madonna",
        opcionD: "Prince",
        correcta: "b"
    },
    {
        id:11,
        categoria:"deportes",
        titulo:"¿Cómo se le conoce a la selección de fútbol argentina?",
        opcionA:"La fiera celeste",
        opcionB:"La del che",
        opcionC:"La albiceleste",
        opcionD:"Los tangos",
        correcta:"c"
    },
    {
        id:12,
        categoria:"deportes",
        titulo:"El primer gol anotado en el partido entre Argentina e Inglaterra en la Copa Mundial de Fútbol de 1986 es también conocido como ”la mano de Dios” porque:",
        opcionA:"Fue anotado con la mano",
        opcionB:"Muchos argentinos rezaron en un acto multitudinario para que Maradona hiciese gol.",
        opcionC:"El jugador guardaba una estampita religiosa dentro del calcetín del pie con el que pateó para anotar el gol",
        opcionD:"Diego Maradona dijo haber tenido una visión divina antes de anotarlo.",
        correcta:"b"
    },
    {
        id:13,
        categoria:"deportes",
        titulo:"¿Cómo es el apodo del Club Atletico River Plate?",
        opcionA:"Los diablos",
        opcionB:"Los cultureros",
        opcionC:"Los millonarios",
        opcionD:"Los xeneises",
        correcta:"c"
    },
    {
        id:14,
        categoria:"deportes",
        titulo:"¿En que año la selección Argentina salio Campeón del Mundo?",
        opcionA:"2022",
        opcionB:"2019",
        opcionC:"2024",
        opcionD:"2023",
        correcta:"a"
    },
    {
        id:15,
        categoria:"deportes",
        titulo:"¿Cuantas Copas del Mundo tiene la Selección Argentina?",
        opcionA:"3",
        opcionB:"5",
        opcionC:"2",
        opcionD:"4",
        correcta:"a"
    },
    {
        id:16,
        categoria:"programacion",
        titulo: "¿Qué significa HTML en el contexto de desarrollo web?",
        opcionA: "HyperText Markup Language",
        opcionB: "High-Level Text Management Language",
        opcionC: "HyperTransfer Markup Language",
        opcionD: "High-Level Transfer Management Language",
        correcta: "a"
    },
    {
        id:17,
        categoria: "programacion",
        titulo: "¿Cuál de los siguientes lenguajes de programación es de tipado fuerte?",
        opcionA: "JavaScript",
        opcionB: "Python",
        opcionC: "C++",
        opcionD: "Java",
        correcta: "c"
    },
    {
        id:18,
        categoria: "programacion",
        titulo: "¿Cuál de los siguientes no es un sistema de gestión de bases de datos?",
        opcionA: "MySQL",
        opcionB: "MongoDB",
        opcionC: "Express",
        opcionD: "SQLite",
        correcta: "c"
    },
    {
        id:19,
        categoria: "programacion",
        titulo: "¿Cuál es el propósito principal de CSS en desarrollo web?",
        opcionA: "Manejar la lógica del lado del servidor",
        opcionB: "Estilizar la presentación de las páginas web",
        opcionC: "Gestionar la interactividad del usuario",
        opcionD: "Definir las rutas de la aplicación",
        correcta: "b"
    },
    {
        id:20,
        categoria: "programacion",
        titulo: "¿Qué es un bucle 'for' en la programación?",
        opcionA: "Un tipo de dato",
        opcionB: "Una estructura condicional",
        opcionC: "Una función",
        opcionD: "Una estructura de control de flujo que se repite",
        correcta: "d"
    },
    {
        id:21,
        categoria: "juegos",
        titulo: "¿Cuál es el juego más vendido de todos los tiempos?",
        opcionA: "Minecraft",
        opcionB: "Tetris",
        opcionC: "Grand Theft Auto V",
        opcionD: "Super Mario Bros.",
        correcta: "b"
    },
    {
        id:22,
        categoria:"juegos",
        titulo:"¿EA Sports lanza entregas anuales de qué serie de juegos deportivos?",
        opcionA:"GTA",
        opcionB:"Fifa",
        opcionC:"Minecraft",
        opcionD:"Sonic  ",
        correcta:"b"
    },
    {
        id:23,
        categoria:"juegos",
        titulo:" ¿Cuál fue uno de los primeros juegos de la consola Atari?",
        opcionA:"Pac Man",
        opcionB:"Space Invaders",
        opcionC:"Combat",
        opcionD:"Mario",
        correcta:"c"
    },
    {
        id:24,
        categoria: "juegos",
        titulo: "¿Cuál es el fontanero más famoso en el mundo de los videojuegos?",
        opcionA: "Sonic",
        opcionB: "Link",
        opcionC: "Mario",
        opcionD: "Master Chief",
        correcta: "c"
    },
    {
        id:25,
        categoria: "juegos",
        titulo: "¿Cuál es la empresa creadora de la consola PlayStation?",
        opcionA: "Microsoft",
        opcionB: "Sony",
        opcionC: "Nintendo",
        opcionD: "Sega",
        correcta: "b"
    },
    {
        id:26,
        categoria: "peliculas",
        titulo: "¿Quién es el monstruo protagonista en 'Monsters, Inc.'?",
        opcionA: "Sulley",
        opcionB: "Buzz Lightyear",
        opcionC: "Slinky",
        opcionD: "Boo",
        correcta: "a"
    },
    {
        id:27,
        categoria: "peliculas",
        titulo: "¿Qué juguete es el protagonista de la película 'Toy Story'?",
        opcionA: "Mike Wazowski",
        opcionB: "Woody",
        opcionC: "Randall",
        opcionD: "Mr. Potato Head",
        correcta: "b"
    },
    {
        id:28,
        categoria: "peliculas",
        titulo: "¿Cuál es el título de la película de Pixar sobre emociones que viven en la mente de una niña?",
        opcionA: "Intensamente",
        opcionB: "Finding Nemo",
        opcionC: "Up",
        opcionD: "Ratatouille",
        correcta: "a"
    },
    {
        id:29,
        categoria: "peliculas",
        titulo: "¿Cuál es el nombre del león protagonista en 'El Rey León'?",
        opcionA: "Simba",
        opcionB: "Mufasa",
        opcionC: "Scar",
        opcionD: "Timón",
        correcta: "a"
    },
    {
        id:30,
        categoria: "peliculas",
        titulo: "¿Cuál es el título de la película de Disney en la que una sirena sueña con vivir en la tierra?",
        opcionA: "Cenicienta",
        opcionB: "La Sirenita",
        opcionC: "Blancanieves",
        opcionD: "Mulan",
        correcta: "b"
    }

]

//tomamos los elementos html
const txtPuntaje = document.querySelector("#puntos");
const nombre = document.querySelector("#nombre");

nombre.innerHTML = localStorage.getItem("nombre");
let numPreguntaActual = 0;

//Recupero el puntaje en caso que ya este jugando
let puntajeTotal = 0;
if(!localStorage.getItem("puntaje-total")){
    puntajeTotal = 0;
    txtPuntaje.innerHTML = puntajeTotal
}else{
    puntajeTotal = parseInt(localStorage.getItem("puntaje-total"));
    txtPuntaje.innerHTML = puntajeTotal;
}

//cargar las preguntas del tema que eligió
const categoriaActual = localStorage.getItem("categoria-actual");
const preguntasCategoria = preguntas.filter(pregunta => pregunta.categoria === categoriaActual);

function cargarSiguientePregunta(num){
    //tomo los elementos donde se cargaran los datos de la pregunta
    const numPregunta = document.querySelector("#num-pregunta");
    const txtPregunta = document.querySelector("#txt-pregunta");
    const opcionA = document.querySelector("#a");
    const opcionB = document.querySelector("#b");
    const opcionC = document.querySelector("#c");
    const opcionD = document.querySelector("#d");

    numPregunta.innerHTML = num + 1;
    txtPregunta.innerHTML = preguntasCategoria[num].titulo;
    opcionA.innerHTML = preguntasCategoria[num].opcionA;
    opcionB.innerHTML = preguntasCategoria[num].opcionB;
    opcionC.innerHTML = preguntasCategoria[num].opcionC;
    opcionD.innerHTML = preguntasCategoria[num].opcionD;

    

    //Agrego un eventlistener a cada boton de respuesta
    const botonesRespuesta = document.querySelectorAll(".opcion");
    //Quito los eventListen y las clases
    botonesRespuesta.forEach(opcion=>{
        opcion.removeEventListener("click", (e)=>{});
        opcion.classList.remove("correcta");
        opcion.classList.remove("incorrecta");
        opcion.classList.remove("no-events");
    })

    botonesRespuesta.forEach(opcion=>{
        opcion.addEventListener("click", agregarEventListenerBoton);
    })

    txtPuntaje.classList.remove("efecto");
}

function agregarEventListenerBoton(e){
    console.log(e.currentTarget.id);
    console.log(numPreguntaActual);
    console.log(preguntas[numPreguntaActual].correcta);
    //Controlo si la respuesta es correcta
    if(e.currentTarget.id === preguntasCategoria[numPreguntaActual].correcta){
        e.currentTarget.classList.add("correcta");
        puntajeTotal = puntajeTotal + 100;
        txtPuntaje.innerHTML = puntajeTotal;
        localStorage.setItem("puntaje-total", puntajeTotal);
        txtPuntaje.classList.add("efecto");
    }else{
        e.currentTarget.classList.add("incorrecta");
        const correcta = document.querySelector("#"+preguntasCategoria[numPreguntaActual].correcta);
        correcta.classList.add("correcta");
    }
    //Agrego un eventlistener a cada boton de respuesta
    const botonesRespuesta = document.querySelectorAll(".opcion");
    //Quito los eventListen para que no pueda seguir haciendo clic
    console.log(botonesRespuesta)
    botonesRespuesta.forEach(opcion=>{
        opcion.classList.add("no-events");
    })
}

cargarSiguientePregunta(numPreguntaActual);

//tomo el boton siguiente
const btnSiguiente = document.querySelector("#siguiente")
btnSiguiente.addEventListener("click",()=>{
    numPreguntaActual++;
    if(numPreguntaActual<=4){
        cargarSiguientePregunta(numPreguntaActual);
    }
    else{
        const categoriasJugadasLS = JSON.parse(localStorage.getItem("categorias-jugadas"));
       
        console.log(categoriasJugadasLS.length);
        if(parseInt(categoriasJugadasLS.length) < 6){
            //alert(categoriasJugadasLS.length);
            location.href = "menu.html";
        }else{
            //lo mando a la pantalla final
            location.href = "final.html";
        }
        
    }
    
})