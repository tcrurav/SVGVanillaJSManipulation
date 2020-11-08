window.onload = initialize;

var svg;
var currentMunicipality;

function initialize() {
    var svgObject = document.getElementById('svg-object').contentDocument;
    console.log(svgObject)
    svg = svgObject.getElementById('Municipios de la provincia de Santa Cruz de Tenerife');
    console.log(svg)

    var granCanaria = svg.getElementById("Gran Canaria");
    var municipalitiesInGranCanaria = granCanaria.getElementsByTagName("path");
    var selectMunicipalitiesInGranCanaria = document.getElementById("municipalities-in-gran-canaria");

    for (var i = 0; i < municipalitiesInGranCanaria.length; i++) {
        var node = document.createElement("option");                 
        var textnode = document.createTextNode(municipalitiesInGranCanaria[i].id.toString());         
        node.appendChild(textnode); 
        node.value = municipalitiesInGranCanaria[i].id.toString();                            
        selectMunicipalitiesInGranCanaria.appendChild(node);

        municipalitiesInGranCanaria[i].addEventListener("click", clickOnMunicipality);
    }

    currentMunicipality = municipalitiesInGranCanaria[0].id.toString(); //At the beginning is selected the first municipality

    selectMunicipalitiesInGranCanaria.addEventListener("change", selectMunicipalityInMap);
}

function selectMunicipalityInMap(){
    var selectMunicipalitiesInGranCanaria = document.getElementById("municipalities-in-gran-canaria");
    var oldMunicipality = currentMunicipality;
    currentMunicipality = selectMunicipalitiesInGranCanaria.options[selectMunicipalitiesInGranCanaria.selectedIndex].text;
    svg.getElementById(oldMunicipality).style.fill = "#fff8dc";
    svg.getElementById(currentMunicipality).style.fill = "blue";
};

function clickOnMunicipality(event){
    var selectMunicipalitiesInGranCanaria = document.getElementById("municipalities-in-gran-canaria");
    selectMunicipalitiesInGranCanaria.value = event.target.id.toString();
    selectMunicipalityInMap();
}