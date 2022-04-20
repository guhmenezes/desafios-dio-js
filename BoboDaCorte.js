// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados
// Abaixo segue um exemplo de código que você pode ou não utilizar

const c = parseInt(gets());
var v = new Array(c);

for (let i = 0; i < c; i++){
  v[i] = parseInt(gets());
}

let  primeiroInscrito = true;

const teste  = Number(v.shift());


for(let i = 0; i < v.length ; i++) {
  let bobo = Number(v[i]);

  if ( teste < bobo  ) {
    primeiroInscrito = false;
  }
};

print(primeiroInscrito ? "S" : "N");