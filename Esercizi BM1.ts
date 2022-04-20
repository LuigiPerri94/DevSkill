let h:number= prompt("Altezza/piedi")*1;
let p:number= prompt("peso/libbre")*1;
h= (h*0.3);
p= (p*0.4);
//console.log (h);
//console.log (p);
let BMI:number= p/(h*h);
//console.log (BMI);

if (BMI<16.5) {
    console.log ("Sottopeso Severo");
}
else if (BMI>=16.5 && BMI<=18.5) {
    console.log("Sottopeso");
}
else if (BMI>=18.5 && BMI<=24.9) {
    console.log("Normale");
}
else if (BMI>=25 && BMI<=30)  {
    console.log("Sovrappeso");
}
else if (BMI>=30.1 && BMI<=34.9)  {
    console.log("Obesità primo grado");
}
else if (BMI>=35 && BMI<=40) {
    console.log("Obesità secondo grado"); 
}
else if (BMI>40) {
    console.log("Grassone");
}

let input:string= prompt("Vuoi effettuare una misurazione approfondita?");
let risposta:number= +input;
if (input =="si") {
    let Sesso: string= prompt ("M o F?") ;
    let Polso: string= prompt ("Inserisci Circonferenza polso in Cm");
    if (Sesso== "M") {
        if (Polso <17) {
            console.log ("Esile");
        } if  (Polso==17 && Polso<=18) {
            console.log("Normale") ;
            if (Polso>19) {
                console.log("Robusta");
            }
        }
    }
    else if (Sesso=="F") {
        if (Polso<15) {
            console.log("Esile");
        } if (Polso==15 && Polso==16) {
            console.log("Normale");
        } if (Polso>19) {
            console.log("Robusta");
        }

    }


}
else if (input !"si") {
    console.log ("Addio per sempre");
}

