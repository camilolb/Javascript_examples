const nombre = "Camilo"
const dias= [
'Lunes',
'Martes',
'Miercoles',
'Jueves',
'viernes',
'Sábado',
'Domingo'
]

function correr() {
  const min 5
  const max 15
  return math.round(math.random() * (max - min)) + min
}

const size = dias.length
let totalKms = 0
for (let i = 0; i <= size; i++){
  const kms = correr()
  totalKms += kms
  console.log(`El día ${dias[i]} ${nombre} corrio ${kms}kms`)
}

//Promedio de cuanto se corrio
const promedio = totalKms / size
console.log(`En promedio, ${nombre} corrio ${promedio}` )
