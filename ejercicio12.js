
const mutants = [
    { name: 'Wolverine', power: 'regeneration' },
    { name: 'Magneto', power: 'magnetism' },
    { name: 'Professor X', power: 'telepathy' },
    { name: 'Jean Grey', power: 'telekinesis' },
    { name: 'Rogue', power: 'power absorption' },
    { name: 'Storm', power: 'weather manipulation' },
    { name: 'Mystique', power: 'shape-shifting' },
    { name: 'Beast', power: 'superhuman strength' },
    { name: 'Colossus', power: 'steel skin' },
    { name: 'Nightcrawler', power: 'teleportation' }
  ];
  
  function findMutantByPower(mutants, power) {

    let foundMutants = [];

    for (const mutant of mutants){
        if (mutant.power === power){
            foundMutants.push(mutant.name);
        }
    }

    if (foundMutants.length > 0){
        return "El poder es " + power+ ": " + foundMutants.join(", ");
    } else{
        return "No se econtro ningun poder de " + power;
    }
  }
  
  console.log(findMutantByPower(mutants, "superhuman")); 