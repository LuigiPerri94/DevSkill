function nomeCognome (nome:string, cognome:string): string {
let nc:string= nome+cognome;
return console.log(nc.toUpperCase() );
}

let nome: string=prompt ("Inserisci nome");
let cognome: string=prompt ("Inserisci cognome");
nomeCognome (nome,cognome); 

///////

function nomeCognome (nome:string, cognome:string): string {
let nc:string= nome+cognome;
return console.log(nc.toLowerCase() );
}

let nome: string=prompt ("Inserisci nome");
let cognome: string=prompt ("Inserisci cognome");
nomeCognome (nome,cognome); 