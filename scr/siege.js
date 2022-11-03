/* 
-+-+-+-+-+-+-+-+-+-+-+-
     Siege script
-+-+-+-+-+-+-+-+-+-+-+-
*/

const attacker = {
    cont: 45000,
    name: "Kingdom of Portugal",

}

const defender = {
    cont: 30000,  
    enthusiasm: "Sultanate of Morocco",
};

const terrain = {
    name: "Mountain", // Grassland = 0
    width: 3000,
    dice_debuff: 4,
}

// bajas x dia
function dice(cant, damange, terrain, isDefeder) {
    let dice = Math.floor(Math.random() * 15) + 1; // dado, azar en la guerra

    // debuff de atacante
    if (!isDefeder) {
        dice = dice + terrain.dice_debuff; // + bajas por fortaleza natural
    }
    
    // cantidad de enemigos * dado
    var causualties = (damange * 0.03) * (dice * 0.5);

    // techo: si el daño supera el margen se iguala con la cant. max
    if (causualties > terrain.width) {
        causualties = terrain.width;
    }

    // se devuelve la cantidad de tropas restantes
    return cant - causualties;
}


// anuncia el ganador
function anunciarVictoria(data) {
    console.log(`------------------------------------`);
    console.log(`VICTORY of ${data.name}`);
    console.log(`------------------------------------`);
}

// batalla total
const calcularBatalla = (attacker, defender, terrain, days) => {
    days++;
    
    attacker.cont = dice(attacker, defender, terrain, false); // Tatar casualties
    defender.cont = dice(defender, attacker, terrain, true); // MUscovite casualties
    console.log(`Days passed: ${days}`);
    console.log(`${attacker.name}: ${attacker.cont} -+- ${defender.name}: ${defender.cont}`);

    if (attacker.cont <= 0) {     // si el atacante se queda sin tropas, gana el defensor
        return defender;
    } else if (defender.cont <= 0) { // si el defensor se queda sin tropas, gana el atacante
        return attacker;
    } else {
        return calcularBatalla(attacker, defender, terrain, days); // si hay tropas, siguente dia
    }
};

// main
const winner = calcularBatalla(attacker, defender, terrain, 0);
anunciarVictoria(winner);

/*

Asedio o asalto a ciudad fortificada?
agregar un tiempo estimado?


*/
