const OPC_TOTALES = 20;
let numeroASaltear = 0;

for (let i = 1; i <= OPC_TOTALES; i++) {
    document.querySelector("#checkboxes").innerHTML +=
        `
        <label for="${i}"><input type="checkbox" name="" id="${i}">${i}</label>
        <br>
        `
}





function saltear() {
    numeroASaltear = Number(document.querySelector("#numeroASaltear").value)

    document.querySelector("#checkboxes").innerHTML = ``;

    for (let i = numeroASaltear; i <= OPC_TOTALES; i += numeroASaltear) {

        console.log("valor de i:", { i });
        document.querySelector(`#checkboxes`).innerHTML +=
            `
        <label for="${i}"><input checked=checked type="checkbox" name="" id="${i}">${i}</label>
        <br>
        `
        

    }
}






/*for (let i = numeroASaltear; i <= OpcionesTotales; i++) {
    if (i == numeroASaltear) {
        document.querySelector("#checkboxes").innerHTML +=
        `
        <label for="${i}"><input checked=checked type="checkbox" name="" id="${i}">${i}</label>
        <br>
        `
        
    } else if (i != numeroASaltear) {
    document.querySelector("#checkboxes").innerHTML +=
        `
        <label for="${i}"><input type="checkbox" name="" id="${i}">${i}</label>
        <br>
        `
    }
}*/