let vidaGoku = 100
let vidaSuperman = 100

const MIN_ROUND = 5
const MAX_ROUND = 12

const ambosSiguenVivos = () => vidaGoku > 0 && vidaSuperman > 0
const calcularGolpe = () => Math.round(Math.random() * ( MIN_ROUND - MAX_ROUND ) * MIN_ROUND )
const gokuSigueVivo = () => vidaGoku > 0


let round = 0;

while (ambosSiguenVivos) {
    round ++
    const golpeGoku = calcularGolpe();
    const golpeSuperman = calcularGolpe();

    if(golpeGoku > golpeSuperman){
        console.log(`Goku ataca a superman con un golpe de ${golpeGoku}`);
        vidaSuperman -= golpeGoku
        console.log(`Superman queda con una vida de ${vidaSuperman}`);
    }else{
      console.log(`Superman ataca a goku con un golpe de ${golpeSuperman}`)
      vidaGoku -= golpeSuperman
      console.log(`Goku queda con una vida de ${vidaGoku}`);
    }
}

if(gokuSigueVivo()){
console.log(`Goku gano la pelea, su nivel de vida es ${vidaGoku}`)
}else{
  console.log(`superman gano la pelea, su nivel de vida es ${vidaSuperman}`)
}
