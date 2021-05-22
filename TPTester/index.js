let texto = 'Lorem ipsum dolor sit amet consectetur adipisicing elit Voluptates accusantium mollitia cum asperiores quidem accusamus sapiente alias repellat illo Deleniti consectetur veritatis nisi id similique labore mollitia temporibus iure'.toLowerCase()
const entrada_texto = document.querySelector('.entradatexto')
let obtener_span = []
let contador = 0
const boton_comenzar = document.getElementById('boton_comenzar')
const timer = document.getElementById('timer')
let timer_var = 0
let clicked = false
let interval = null

let objeto = {
    numero:1,
    nombre:'Jesus'
}

boton_comenzar.addEventListener('click',()=>{
    if(!clicked){
        setTimeout(()=>{
            timer.style.display = 'none'
            render()
        entrada_texto.disabled = false
        boton_comenzar.innerText = 'Detener'
        interval = setInterval(()=>{
            timer_var++
        },1000)
        clicked = true

        },5000)
    }
    else{
        render()
        boton_comenzar.innerText = 'Comenzar'
        clicked = false
        entrada_texto.disabled = true
        clearInterval(interval)
    }
})

function buscar_palabra(palabra){
    for(let i=0;i<obtener_span.length;i++){
        if(palabra === obtener_span[i].innerText && obtener_span[i].className !== 'completado'){
            return i
        }
    }
}


function validar_palabra(event){
    if(buscar_palabra(entrada_texto.value) !== undefined){
        let pos = buscar_palabra(entrada_texto.value)
        obtener_span[pos].className = 'completado'
        entrada_texto.value = ''
        contador++
        if(contador === obtener_span.length){
            clearInterval(interval)
            timer.style.display = 'block'
            timer.innerText='Tiempo total: '+timer_var+' Segundos'
            boton_comenzar.innerText = 'Comenzar'
            clicked = false
            entrada_texto.disabled = true
            contador = 0
            render()
        }
    }
}

function render(){
    timer_var = 0
    const texto_separado = texto.split(' ')
    const texto_contenedor = document.querySelector('.texto')
    const span_texto = texto_separado.map((palabra)=>'<span>'+palabra+'</span>')
    texto_contenedor.innerHTML = span_texto.join(' ')
    obtener_span = document.querySelectorAll('span')
}

window.onload = () =>{
    render()
}