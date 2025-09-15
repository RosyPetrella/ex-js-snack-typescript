//snack 1
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

//snack 2
type Dipendente = {
  nome: string;
  cognome: string;
  annoNascita: number;
  sesso: 'm' | 'f';
  anniServizio: number[]
}

//snack 3
type Developer = Dipendente & {
  lvExp: 'junior' | 'mid' | 'senior';
  linguaggi: string[];
  certigicazioni: string[],
  
}

type ProjectManager = Dipendente & {
  teamSize: number | null,
  budget?: number;
  stakeholder: string[]
}