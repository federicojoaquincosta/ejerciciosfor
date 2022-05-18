let opcionInicial = 0; 
let opcionFinal = 0; 

function generarOpciones(){
    opcionInicial = document.querySelector("#primera_opcion").value;
    opcionFinal = document.querySelector("#ultima_opcion").value;

    document.querySelector("#opciones").innerHTML = `
    <option value="0">Seleccione</option>
    `

    let opcionInicialNum = parseInt(opcionInicial);
    let opcionFinalNum = parseInt(opcionFinal);

    if ((opcionFinalNum < opcionInicialNum) || (opcionInicialNum === 0)) {
        document.querySelector("#mensaje_error").innerHTML = `
        <h3>La primera opción tiene que ser menor que la segunda opción!</h3>
        <br>
        <h3>Por favor ingrese un valor que no sea 0 como valor inicial</h3>
        `
    } else {
        for ( opcionInicialNum; opcionInicialNum <= opcionFinalNum; opcionInicialNum++) {
            document.querySelector("#opciones").innerHTML += `
            <option value="${opcionInicialNum}">Opción ${opcionInicialNum}</option>
            `
        }
    }
    console.log('opcionInicialNum: ', opcionInicialNum, 'typeOfInicial: ', typeof opcionInicialNum);

} 