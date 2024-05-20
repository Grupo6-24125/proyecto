
//     let numeroMayor = 0;
// for (i=0; i<3; i++){
//     let numeroNuevo = parseInt(prompt("nuevo numero"));
//     if(numeroNuevo>numeroMayor){
//         numeroMayor = numeroNuevo
//         }
// }
// document.write(numeroMayor);

let nro = parseInt(prompt("Ingresa el 1er nro"));

let max = 0;

for (let i = 0; i < 10; i++) {
  if (i == 0) {
    max = nro;
  } else {
    nro > max;
  }
  console.log((max = nro));
}