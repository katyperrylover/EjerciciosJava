let cuadradopa = () => {
    let num = prompt("Ingresa un vlaor");
    alert("el cuadrado es " + num*num);
}

let mayusculacion = () => {
    let texto = prompt("Ingresa un vlaor");
    texto = texto.toUpperCase();
    texto = texto.trim();
    alert(texto);
}

let majoramask = () => {
    let p = [2,5,10,501,234,45,2];
    alert(p.filter(mayores => mayores >= 10));

}

let verificartexto = () => {
    let p = "chano";
    let texto = prompt("Ingresame el valor");
    alert(texto.includes(p));
}

let unirarrays = ()  => {
    let bienahi = [6,7,8,9,10];
    let malahi = [];
    for (let i = 0; i < 6; i++) {
        malahi[i] = i;
    }   
    malahi = malahi.concat(bienahi);
    alert(malahi);
}

let sumararrays = () => {
    let arrayUno = [1,2,4,5];
    let j=0;
    arrayUno.forEach(i => {
        j = j +  i}
    );
    alert(j);
}

let evolucion = () => {
    let palabras = ["hola", "bue", "ayuda", "correr"];
    let nuevasPalabras = []
    for (let i = 0; i < palabras.length; i++) {
        if(palabras[i].length >= 4){
            nuevasPalabras.push(palabras[i])
        }
    }
    alert(nuevasPalabras)
}

let devolverVocales = () => {
    let cantidad = 0
    let palabra = prompt("Ingresa una palabra").toUpperCase()
    let vocales = "AEIOU"
    alert(palabra)
    for (let i = 0; i < palabra.length; i++){
        if(vocales.includes(palabra[i])){
            cantidad = cantidad + 1;
        }
    }
    alert(cantidad)
}

let reemplazarTextillo = () => {
    let texto = prompt("pone tu texto asqueroso aca")
    let palabraOriginal = prompt("palabra que quieras cambiar?").trim()
    let palabraReemplazada = prompt("cambiala a:").trim() 
    alert(texto.replace(palabraOriginal, palabraReemplazada))
}

let arrayOrden = () => {
    let numeros = [1,6,7,2]
    alert(numeros.sort((b, a) => a - b))
}