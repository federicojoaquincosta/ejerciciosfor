const NUM_OPCIONES = 7;
let opcionVip = 0;

function cambiarVip(){
opcionVip = document.querySelector("#numero_vip").value;
document.querySelector("#num_opcion").innerHTML = `
<option value="0">Seleccione</option>`

for (let i = 1; i <= NUM_OPCIONES; i++) {
    if (i == opcionVip) {
        document.querySelector("#num_opcion").innerHTML += `
<option value="${i}">Opción ${i} VIP</option>`
    } else {
        document.querySelector("#num_opcion").innerHTML += `
        <option value="${i}">Opción ${i}</option>`
    }
} 
}

