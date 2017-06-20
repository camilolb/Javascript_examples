const punto = {

  init: function init (x,y){
    this.x = x
    this.y = y
  },
  moverEnX: function moverEnX(x){
    this.x += x
  },
  moverEnY: function moverEnY(y){
    this.y += y
  },
  distancia : function distancia(p){
    const x = this.x - p.x
    const y = this.y - p.y
    return math.sqrt(x * x + y * y)
  }
}

const p1 = object.create (punto)
const p2 = new punto (3,0)

p1.init(0, 4)

console.log(p1.distancia(p2))
console.log(p2.distancia(p1))
