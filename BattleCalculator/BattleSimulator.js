const attacker = {
    cont: 26000,
    name: "Golden Horde",
    morale: 3.0,
    discipline: 1.0,
    maneuver: 1.0,
    supply: 30000,
    tech: 7,
    tactics: 1.5,
    spy: 0.4,
    enthusiasm: 10
};

const defender = {
    cont: 24000,
    name: "Muscovites",
    morale: 3.5,
    discipline: 1.0,
    maneuver: 1.2,
    supply: 18000,
    tech: 6,
    tactics: 1.4,
    spy: 0.5,
    enthusiasm: 9.0
};

const terrain = {
    name: "Mountain", // Grassland = 0
    width: 3000,
    dice_debuff: 7,
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
    
    attacker.cont = dice(attacker.cont, defender.cont, terrain, false); // Tatar casualties
    defender.cont = dice(defender.cont, attacker.cont, terrain, true); // MUscovite casualties
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
