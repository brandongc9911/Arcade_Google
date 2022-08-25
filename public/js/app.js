import { juegos } from "./classJuegos.js"
import { gameSnake } from "./snake.js"

const homeArcade = document.querySelector(".init")
const gameArcade = document.querySelector(".game")
const flechaDesplegue = document.querySelectorAll(".mostrar-opciones")
const opciones = document.querySelector(".opciones")
const titulo = document.querySelector("#titulo")
const contenedorImagen = document.querySelector('.contenedor-game')
const contendorCards = document.querySelector(".opciones__selectContent")
const seleccionJuego = document.querySelector("#jugar-select")
seleccionJuego.addEventListener("click", initJuego)


let juegoSeleccionado;

flechaDesplegue.forEach((flecha) =>{
    flecha.addEventListener("click", () =>{
        const flechaDown = document.querySelector("#down")
        const flechaUp = document.querySelector("#up")

        if(flechaUp.style.display === "none"){
            opciones.style.display = "block"
            flechaDown.style.display = "none"
            flechaUp.style.display = "block"
        } else if(flechaUp.style.display = "block"){
            opciones.style.display = "none"
            flechaDown.style.display = "block"
            flechaUp.style.display = "none"
        } 
        
    })
    
})

function arcade(game){
    juegoSeleccionado = game
    // console.log(juegoSeleccionado);
    
    juegos.forEach((juego =>{
        titulo.textContent = juegoSeleccionado.titulo
        contenedorImagen.innerHTML = `
            <img src="${juegoSeleccionado.imagenFondo}">
        `

        
        

        if(juegoSeleccionado.titulo !== juego.titulo){
            contendorCards.innerHTML += `

            <div class="opcion__card">
                <img src="${juego.imagenCard}" id="${juego.titulo}">
                <p>${juego.titulo}</p>
            </div>
                
            `
        }
        
    }))
}


function gameAleatorio(){
    juegoSeleccionado = juegos[Math.floor(Math.random() * juegos.length)]
    arcade(juegoSeleccionado)
     
    
}




contendorCards.addEventListener("click",(e) =>{

    juegoSeleccionado = juegos.find((selected) => selected.titulo === e.target.id)
    arcade(juegoSeleccionado)
    eliminarCard(juegoSeleccionado)
    
})


function initJuego(){
    homeArcade.style.opacity = 0.3
    switch (juegoSeleccionado.titulo) {
        case 'Snake':
            gameSnake()
        default:
            break
    }
    
}

function eliminarCard(game){
    let cards = contendorCards.children

    let gameCard = Object.values(cards)

    gameCard.forEach((card =>{
        if(card.children[0].id === game.titulo){
            contendorCards.removeChild(card)
        }
        
    }))
    
    
    
    
}


gameAleatorio()



