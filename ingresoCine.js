const startWars7 = 'Start wars: El despertar de la fierza'
const pgStarwars7 = 13

const nameCamilo = 'Camilo'
const ageCamilo = '22'

const nameKaren = 'Karen'
const ageKaren = '12'

function peliStarWars(name, age, adult = false){
  if( age >= pgStarwars7){
    alert(`${name} puede pasar a ver ${startWars7}  `)
  }else if (adult) {
    alert(`${name} puede pasar a ver ${startWars7} Aunque su edad es ${age}, puede pasar a ver una película`)

  } else{

    alert(` ${name} no puede pasar a ver ${startWars7}. tiene ${age} años y necesita tener ${pgStarwars7} `)
  }

  }

  peliStarWars(nameCamilo, ageCamilo)
  peliStarWars(nameKaren, ageKaren, true)
