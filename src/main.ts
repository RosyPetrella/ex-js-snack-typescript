//snak 1
let dato: unknown;
if(typeof dato === 'string') {
  console.log(dato.toUpperCase());
  
} else if(typeof dato === 'number') {
  console.log(dato * 2);
} else if(typeof dato === 'boolean') {
  console.log(dato ? 'si' : 'no');
} else {
  console.log('tipo non supportato');
  
}
