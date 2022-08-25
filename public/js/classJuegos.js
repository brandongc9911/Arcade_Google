class Juego {
        constructor(titulo,imagenCard,imagenFondo = null){
            this.titulo = titulo
            this.imagenFondo = imagenFondo
            this.imagenCard = imagenCard
    }
}



    
    
    
    let snake = new Juego('Snake','/public/assets/card-snake.png','/public/assets/bg-snake.png')
    let gato = new Juego('Tres en raya',"/public/assets/card-gato.png")
    
    let Juegos = []
    Juegos.push(snake,gato)


    export let juegos =  Juegos