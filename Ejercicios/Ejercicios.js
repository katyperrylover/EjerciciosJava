let ej1 = () => {
    let numero1 = Number(prompt("INGRESA UN VALOR"));
    const resultadofinal = document.getElementById("res1");
    resultadofinal.innerHTML = "la potencia de " + numero1 + ": " + numero1 * numero1;
}

let ej2 = () => {
    let texto1 = prompt("ESCRIBA TEXTO (EN MINUSCULA): ");
    const numero = document.getElementById("res2");
    numero.innerHTML = "texto mayusculeado: " + texto1.trim().toUpperCase();
}

let ej3 = () => {
    let arr =[8,3,21,67,76];
    let filtrado = arr.filter(b=>b>10);
    const elemento = document.getElementById('DIV');
    const parrafonuevo = document.createElement("res3"); 
    elemento.appendChild(parrafonuevo);
    parrafonuevo.textContent = filtrado;
}

let ej4 = () => {
    let texto1=prompt("INGRESA UN TEXTO: ");
    let palabra=prompt("ingresa una palabrilla: ");
    const elemento = document.getElementById("res4");
    if(texto1.includes(palabra)) {
        elemento.innerHTML = "Incluye :) "; 
        elemento.style.backgroundColor = "green";}
    else {
        elemento.innerHTML = "no tiene esa palabra :(";
        elemento.style.backgroundColor = "red";}
}

let ej5 = () => {
    let palabra1 = prompt("INGRESA UN TEXTO: ");
    let palabra2 = prompt("INGRESA UNA PALABRA: ");
    let resultadofinal = palabra1.concat(palabra2);
    const elem = document.getElementById("res5");
    elem.classList.add("resaltado");
    elem.innerHTML = "Union de ambas palabras: " + resultadofinal;
}

let ej6 = () => {
    let array=[6,10,2];
    let acumulador=0;
    array.forEach(i => acumulador = acumulador + i);
    const elemento = document.getElementById("res6");
    elemento.innerHTML=acumulador;
}

let ej7 = () => {
    let array = ["SoL", "LUna", "estrELLA", "maR"];
    const container = document.getElementById("res7");
    array.forEach(palabras => {
        if (palabras.length >= 4) {
            const parrafo = document.createElement("p");
            parrafo.textContent = palabras.toUpperCase();
            container.appendChild(parrafo);
        }
    });
}

let ej8 = () => {
    let texto1 =prompt("ESCRIBI UN TEXO: ").toUpperCase();
    let contador=0;
    let vocaless = ["A", "E", "I", "O", "U"];
    for (let letrita of texto1) {
        if (vocaless.includes(letrita)) {
            contador++;
        };
    }
    const elemento1 = document.getElementById("res8");
    const elemento2 = document.getElementById("res8_parte2");
    elemento2.innerHTML= contador;
}

let ej9 =() => {
    let textito1 = prompt("ESCRIBA UN TEXTO: ");
    let textito2 = prompt("CAMBIOS A REALIZAR: ");
    let textito3 = prompt("ALGO: ");

    let textofinal = textito1;
    while (textofinal.includes(textito2)) {
        textofinal = textofinal.replace(textito2, textito3);
        const parrafonuevo = document.createElement('p');
        parrafonuevo.textContent = textofinal;
        const container = document.getElementById("res9");
        container.appendChild(parrafonuevo);
    }
}

let ej10 = () => {
    let array=[9,10,20,5];
    let res = array.sort((b, a) => a - b).join();
    const parrafo = document.createElement('p');
    parrafo.textContent = res;
    const container = document.getElementById("res10");
    container.appendChild(parrafo);
}