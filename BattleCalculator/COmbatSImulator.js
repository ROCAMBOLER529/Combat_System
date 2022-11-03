const atacante = {
    nombre: "Atacante",
    vida: 100,
    daño: 15
};

const defensor = {
    nombre: "Defensor",
    vida: 100,
    daño: 15
};

const terreno = {

}

function dañoPorDia (vida, daño, terreno) {
    dado = Math.floor(Math.random() * 15) + 1;

    var dañoTotal = daño * (dado / 10);
    return vida - dañoTotal;
}

function anunciarVictoria(data) {
    console.log(`------------------------------------`);
    console.log(`Ganador es el ${data.nombre}`);
    console.log(`------------------------------------`);
}

function calcularCombate (atacante, defensor, terreno, days) {
    days++;
    console.log(`Dia: ${days}`);
    

    defensor.vida = dañoPorDia(defensor.vida, atacante.daño, terreno); // Tatar casualties
    if (defensor.vida <= 0) {
        return atacante;
    }
    
    atacante.vida = dañoPorDia(atacante.vida, defensor.daño, terreno); // MUscovite casualties
    if (atacante.vida <= 0) {
        return defensor;
    }

    console.log(`Atacante: ${atacante.vida} -+- Defensor: ${defensor.vida}`);
    return calcularCombate(atacante, defensor, terreno, days);

}


// main
const ganador = calcularCombate(atacante, defensor, terreno, 0);
anunciarVictoria(ganador);