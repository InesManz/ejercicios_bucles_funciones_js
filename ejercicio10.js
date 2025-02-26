

const capitals = {
    Spain: 'Madrid',
    France: 'Paris',
    Italy: 'Rome',
    Germany: 'Berlin',
    Portugal: 'Lisbon',
    Poland: 'Warsaw',
    Greece: 'Athens',
    Austria: 'Vienna',
    Hungary: 'Budapest',
    Ireland: 'Dublin'
  };
  
  function getCapital(country) {

    return capitals[country] || "No tengo esa informacion sobre el pais"
  }

    const countries = ["Spain", "France", "Italy", "Germany", "Portugal", "Poland", "Greece", "Austria", "Hungary", "Ireland"]

    for(const country of contries) {
        console.log("La capital es: " +country + getCapital(country));
    }
    
    