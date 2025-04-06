import { series } from './data.js';
var tablaSeries = document.getElementById("tablaSeries");
mostrarSeries(series);
function mostrarSeries(series) {
    var cuerpoTabla = document.createElement("tbody");
    var textoSeries = "";
    var suma = 0;
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var s = series_1[_i];
        textoSeries += "<tr><td> ".concat(s.id, "</td><td> ").concat(s.name, "</td><td> ").concat(s.channel, "</td><td> ").concat(s.seasons, "</td> </tr>");
        suma += s.seasons;
    }
    textoSeries += "<tr><td colspan = \"4\"> Seasons average: ".concat(suma / series.length, " </td></tr>");
    cuerpoTabla.innerHTML = textoSeries;
    tablaSeries.appendChild(cuerpoTabla);
}
