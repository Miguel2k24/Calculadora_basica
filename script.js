const uno = document.querySelector(".uno");
const dos = document.querySelector(".dos");
const tres = document.querySelector(".tres");
const cuatro = document.querySelector(".cuatro");
const cinco = document.querySelector(".cinco");
const seis = document.querySelector(".seis");
const siete = document.querySelector(".siete");
const ocho = document.querySelector(".ocho");
const nueve = document.querySelector(".nueve");
const cero = document.querySelector(".cero");
const borrar = document.querySelector(".borrar");
const igual = document.querySelector(".igual");
const division = document.querySelector(".division");
const resta = document.querySelector(".resta");
const sumar = document.querySelector(".sumar");
const multiplicacion = document.querySelector(".multiplicacion");
const pantalla = document.getElementById("pantalla");

pantalla.scrollBy(1, 5);
let presion = {
    uno: 1,
    dos: 2,
    tres: 3,
    cuatro: 4,
    cinco: 5,
    siete: 7,
    seis: 6,
    ocho: 8,
    nueve: 9,
    cero: 0,
    sumar: "+",
    resta: "-",
    multiplicacion: "*",
    division: "/"
}

igual.addEventListener("click", ()=>{
    let expresion = pantalla.value;
    try {
        let resultado = new Function("return " + expresion)(); // Evaluae la operación de forma segura
        pantalla.value = resultado; // Muestra el resultado en el mismo input
    } catch (error) {
        pantalla.value = "Error"; // Si hay un error, muestra "Error"
    }
})
igual.addEventListener("keydown", (e)=>{
    if(e.key === "Enter"){
        igual.click();
    }
})

borrar.addEventListener("click", ()=>{
    pantalla.value = "";
});

function borrar1(){
    resultado.textContent = "";
}


multiplicacion.addEventListener("click", () =>{
    pantalla.value += presion.multiplicacion;
});

division.addEventListener("click",()=>{
    pantalla.value += presion.division
})

resta.addEventListener("click", () => {
    pantalla.value += presion.resta;
});

sumar.addEventListener('click', ()=>{
     pantalla.value += presion.sumar
});


uno.addEventListener("click", ()=>{
    pantalla.value += presion.uno;
});

dos.addEventListener("click", ()=>{
    pantalla.value += presion.dos;
});

tres.addEventListener("click", () => {
    pantalla.value += presion.tres;
});
cuatro.addEventListener("click", () => {
    pantalla.value += presion.cuatro;
});
cinco.addEventListener("click", () => {
    pantalla.value += presion.cinco;
});


seis.addEventListener("click", () => {
    pantalla.value += presion.seis;
})


siete.addEventListener("click", () => {
    pantalla.value += presion.siete;
});


ocho.addEventListener("click", () => {
    pantalla.value += presion.ocho;
});
nueve.addEventListener("click", () => {
    pantalla.value += presion.nueve;
});
cero.addEventListener("click", () => {
    pantalla.value += presion.cero;
});






