for (let stat in statistics) {
    if (((`${statistics[stat]}` % 2)== 1) || (`${stat}`[0] == 'r')) {
        console.log(`${statistics[stat]}`);
    }
}