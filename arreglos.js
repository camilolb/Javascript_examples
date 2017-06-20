function suma(...numeros){

  return numeros.reduce(function (acum,numero){
    acum += numero
    return acum

  })
}


suma (4,8,12,8954,7,9)
