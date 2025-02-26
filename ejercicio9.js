

const xMen = [
    { name: 'Wolverine', year: 1974 },
    { name: 'Cyclops', year: 1963 },
    { name: 'Storm', year: 1975 },
    { name: 'Phoenix', year: 1963 },
    { name: 'Beast', year: 1963 },
    { name: 'Gambit', year: 1990 },
    { name: 'Nightcrawler', year: 1975 },
    { name: 'Magneto', year: 1963 },
    { name: 'Professor X', year: 1963 },
    { name: 'Mystique', year: 1978 }
  ];
  
  function findOldestXMen(xMen) {
    
    let oldest = xMen[0];

    for(const menber of xMen){
        if (menber.year < oldest.year){
            oldest = menber;
        }
    }
    return oldest;
  }
  
  console.log("El miembro mas antiguo es: "+findOldestXMen(xMen).name + ("Año: " + findOldestXMen(xMen).year + ""));
  