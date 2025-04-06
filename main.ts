import {serie} from './serie.js';
import {series} from './data.js';

let tablaSeries: HTMLElement = document.getElementById ("tablaSeries")!;

mostrarSeries(series);

function mostrarSeries (series:serie[]){

    let cuerpoTabla = document.createElement("tbody");
    let textoSeries = "";
    let suma = 0;

    for (let s of series){

        textoSeries += `<tr><td> ${s.id}</td><td> ${s.name}</td><td> ${s.channel}</td><td> ${s.seasons}</td> </tr>`;
        suma += s.seasons;
    }
    
    textoSeries += `<tr><td colspan = "4"> Seasons average: ${suma/series.length} </td></tr>`
    cuerpoTabla.innerHTML = textoSeries;
    tablaSeries.appendChild(cuerpoTabla);


    }