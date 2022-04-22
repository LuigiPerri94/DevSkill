///// funzioni ////

function kmInMiglia (distanza:number):number{
    return distanza/1.609
}
function migliaInKm (distanza:number):number{
    return distanza*1.609
} 
function celsiusInFahre (temp:number):number {
    return ((9 / 5)*temp) + 32;
}
function fahreIncelsius (temp:number):number {
    return (temp - 32) * (5 / 9);
}
function stampaDistanza(risulato1: number): void {
  console.log(" " + risulato1);
}
/////// codice /////


let distanzaTemperatura: string= prompt ("Convertire distanza o temperatura?");
if (distanzaTemperatura== "distanza") {
    let kmMi: string=prompt ("Convertire km/mi o mi/km ?" );
     if (kmMi == "km/mi") {
         let distanza:number= prompt ("Inserire numero")*1; {
             stampaDistanza (kmInMiglia(distanza));
         }
          }
        else if  (kmMi == "mi/km") {
             let distanza:number =prompt ("Inserire numero")*1; {
                 stampaDistanza (migliaInKm(distanza));
             } 
         }
         


     
   
    }


else if (distanzaTemperatura == "temperatura") {
    let conversione: string= prompt ("Convertire C/F o viceversa?");
    if (conversione == "C/F") {
        let temp: number= prompt ("Inserire numero")*1;{
           
        }

    }
}