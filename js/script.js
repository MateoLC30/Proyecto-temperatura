const temperatura = {
    celcius: null,
    farenheit: null,
    kelvin: null
}

let Cf = ((temperatura.celcius * 9)/ 5) + 32;
let Ck = temperatura.celcius + 273.15;
let Fc = ((temperatura.farenheit - 32) * 5) / 9;
let Fk = (temperatura.farenheit - 32) * 5 / 9 + 273.15
let Kc = temperatura.kelvin - 273.15;
let Kf = (temperatura.kelvin - 273.15) * 9 / 5 + 32;


const C = document.querySelector("#celcius");
const F = document.querySelector("#farenheit");
const K = document.querySelector("#kelvin");

C.addEventListener("input", leerTemperatura);
F.addEventListener("input", leerTemperatura);
K.addEventListener("input", leerTemperatura);

function leerTemperatura(e) {
    temperatura[e.target.id] = parseInt(e.target.value);
    //console.log(e.target.id);
    //console.log(e.target.value);
    
Cf = ((temperatura.celcius * 9)/ 5) + 32;
Ck = temperatura.celcius + 273.15;
Fc = ((temperatura.farenheit - 32) * 5) / 9;
Fk = (temperatura.farenheit - 32) * 5 / 9 + 273.15
Kc = temperatura.kelvin - 273.15;
Kf = (temperatura.kelvin - 273.15) * 9 / 5 + 32;

if (e.target.id === "celcius") {
    temperatura.farenheit = Cf;
    temperatura.kelvin = Ck;
} else if (e.target.id === "farenheit") {
    temperatura.celcius = Fc;
    temperatura.kelvin = Fk;
} else if (e.target.id === "kelvin"){
    temperatura.celcius = Kc;
    temperatura.farenheit = Kf;
}else{
    alert("Hay fallas")
}
    
C.value = temperatura.celcius;
F.value = temperatura.farenheit;
K.value = temperatura.kelvin;
}



