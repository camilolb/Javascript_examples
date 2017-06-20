const nacimiento = new date(1995, 2,26 )
const hoy = new date();

const tiempo = hoy-nacimiento
const tiempoSegundos = tiempo / 1000
const tiempoMinutos = tiempoSegundos / 60
const tiempoHoras = tiempoMinutos / 60

const proximo = new date(hoy.getFullYear(), nacimiento.getMonth(), nacimiento.getDate())

const diasSemana = [
 'Domingo',
 'Lunes',
 'Martes',
 'Miercoles',
 'Jueves',
 'Viernes',
 'Sábado'
]
diasSemana[proximo.getDay()]
console.log(diasSemana)
