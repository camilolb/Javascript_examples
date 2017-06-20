function nativoMedallo(str){
  let translation = str
}
//Si la palabra termina en "ar" se le quitan esos dos caracteres
if(str.ToLowerCase().endSwith('ar')){
translation = str.slice(0,-2)
}

//Si la palabra inicia con Z, se le añade "pe" al form-horizontal
if (str.ToLowerCase().startSwith('z')){
translation += 'pe'
}

// SI la palabra traducida tiene 10 0 mas caracteres
// se debe partir a la mitad y unir con un gion del media-object

let long = translation.length

if(long >= 10){
  const firstHalf =translation.slice(0, math.round(long / 2))
  const secondHalf = translation.slice(math.round(long / 2))
  translation = `${firstHalf} - ${secondHalf}`
}

return translation

console.log(nativoMedallo("Programar")) //program
console.log(nativoMedallo("Zorro")) // zorrope
console.log(nativoMedallo("Zarpar")) //zarppe
console.log(nativoMedallo("Abecedario")) //abece-diario
