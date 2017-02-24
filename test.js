// JavaScript for Tamaulipas Map //

var map = L.mapbox.map('map')
          .setView([23.7717,-99.0581],12)
          .addControl(L.mapbox.shareControl());

map.addControl(L.mapbox.geocoderControl('zeroing.h9b10074'));

var legend = document.getElementById('legend-content');

map.legendControl.addLegend(legend.innerHTML);

new L.Hash(map);
/*
map.fitBounds([
    [16.92085, -99.94675],
    [16.83165, -99.76959]

], {
    paddingBottomRight: [50, 0]
});
*/

var gridLayer = L.mapbox.gridLayer('zeroing.h9b10074');
map.addLayer(gridLayer);


L.mapbox.tileLayer('zeroing.h9b10074').addTo(map)


// Set fitBounds and paddingBottomRight
/* 
var click = document.getElementById('click'),
    mousemove = document.getElementById('mousemove');

map.on('mousemove click', function(e) {
    window[e.type].innerHTML = e.containerPoint.toString() + ', ' + e.latlng.toString();
});
*/


/* Global objects */

var internet = {
  string: "Internet",
  stringEng: "Internet",
  styled: this.percentWith + "%",
  svgClassName: "svgInternet",
  percentWith: 0,
  percentWithout: 100 - this.percentWith,
  isOn: true,
  dataset: [[this.percentWithout, this.percentWith]]
};

var car = {
  string: "Auto",
  stringEng: "Car",
  styled: this.percentWith + "%",
  svgClassName: "svgCar",
  percentWith: 0,
  percentWithout: 100 - this.percentWith,
  dataset: [this.percentWithout, this.percentWith]
};

var movil = {
  string: "Móvil",
  stringEng: "Mobile",
  styled: this.percentWith + "%",
  svgClassName: "svgMobile",
  percentWith: 0,
  percentWithout: 100 - this.percentWith,
  dataset: [this.percentWithout, this.percentWith]
};

var joven = {
  string: "Joven",
  stringEng: "Youth",
  styled: this.percentWith + "%",
  svgClassName: "svgYoung",
  percentWith: 0,
  percentWithout: 100 - this.percentWith,
  dataset: [this.percentWithout, this.percentWith]
};

var escolaridad = {
  string: "Sin Escolaridad",
  stringEng: "Without Education",
  styled: this.percentWith + "%",
  svgClassName: "svgEscolaridad",
  percentWith: 0,
  percentWithout: 100 - this.percentWith,
  dataset: [this.percentWithout, this.percentWith]
};

var pop = {
  string: "Población Total",
  stringEng: "Total Population",
  styled: this.total,
  svgClassName: "svgPopTotal",
  total: 0,
  vivencias: 0
};

var rows = [internet, car, movil, joven, escolaridad];




/* gridLayer's 'mousemove' functionality
*/

gridLayer.on('mousemove',function(o) {

// New Table Creation with Graphics //
// Notes:
//          Must be embedded in the function to access the data



function createTable() {
var table = document.createElement('table');
    table.style.width = "335px";
    
    
    function createRows() {

      internet.percentWith = (o.data && o.data.PORCintern);
      car.percentWith = (o.data && o.data.PORCauto);
      movil.percentWith = (o.data && o.data.PORCmovil);
      joven.percentWith = (o.data && o.data.PORCjo);
      escolaridad.percentWith = (o.data && o.data.PORCsinESC);

      // Put the block in

    
    pop.total = (o.data && o.data.POBtotal);
    pop.vivencias = (o.data && o.data.TotalVIV);

    if (pop.total === undefined) {
          pop.total = 0;
          pop.styled = 'N/A';
    }

    else {
      pop.styled = pop.total + ' personas';
    }


      var trB = document.createElement('tr');

      var tdDataB = document.createElement('td');
      var tdTextB = document.createElement('td');   

        var dataB = document.createTextNode(pop.styled);
        var textB = document.createTextNode(pop.string);

        tdDataB.appendChild(dataB);
        tdTextB.appendChild(textB);
    
        tdDataB.style.color = "#fdbd12";
        tdTextB.style.color = "#fdbd12";

        tdDataB.style['text-align'] = "right";
        tdTextB.style['text-align'] = "left";


        trB.appendChild(tdTextB);
        trB.appendChild(tdDataB);

        table.appendChild(trB);  




      for (var i = 0; i < rows.length; i++) {
        
        var tr = document.createElement('tr');

        var tdData = document.createElement('td');
        var tdText = document.createElement('td');
        var tdSVG = document.createElement('td');
        
         if (rows[i].percentWith < 0 || rows[i].percentWith === undefined) {
          rows[i].percentWith = 0;
          rows[i].styled = 'N/A';
        }

        else {
          rows[i].percentWithout = 100 - rows[i].percentWith;
          rows[i].styled = rows[i].percentWith + '%';
        }

        var data = document.createTextNode(rows[i].styled);
        var text = document.createTextNode(rows[i].string);
        var SVG = document.createTextNode('');

        tdData.appendChild(data);
        tdText.appendChild(text);
        tdSVG.appendChild(SVG);
    
        tdData.style.color = "#fdbd12";
        tdText.style.color = "#fdbd12";
        tdSVG.style.color = "#fdbd12";

        tdSVG.className = rows[i].svgClassName;

        tdText.style['text-align'] = "left";

        tr.appendChild(tdText);
        tr.appendChild(tdData);
        tr.appendChild(tdSVG);

        table.appendChild(tr);  
        h3 = document.getElementsByTagName('h3')[0];
        h3.parentNode.appendChild(table, h3); 
        

                   
        /*
        if (rows[i].percentWith < 0 || rows[i].percentWith === undefined) {
          rows[i].percentWith = 0;
          rows[i].styled = 'N/A';
        }
        */
        if (document.getElementsByClassName(rows[i].svgClassName) !== undefined) {
          // D3 svgs //
          //Width and height
          var w = 12;
          var h = 12;
          var dataset = [rows[i].percentWithout, rows[i].percentWith];
          var svgClass = '.' + rows[i].svgClassName;
          var outerRadius = w / 2;
          var innerRadius = 0;
          var arc = d3.svg.arc()
              .innerRadius(innerRadius)
              .outerRadius(outerRadius);
          var pie = d3.layout.pie();
          //Assign colors
          var color = d3.scale.linear().domain([1,length]).range(['#fdbd12', '#404040']);
          //Create SVG element
          var svg = d3.selectAll(svgClass)
            .append("svg")
            .attr("width", w)
            .attr("height", h);
          //Set up groups
          var arcs = svg.selectAll("g.arc")
              .data(pie(dataset))
              .enter()
              .append("g")
              .attr("class", "arc")
              .attr("transform", "translate(" + outerRadius + "," + outerRadius + ")");
          //Draw arc paths
          arcs.append("path")
              .attr("fill", function(d, i) {
                return color(i);
              })
              .attr("d", arc);
        }
      }
    }
    

    createRows();

    if (document.getElementsByTagName('p')[1] === undefined) {
      removeTables();
    }
/*
    if (internet.styled == 'N/A' && computer.styled == 'N/A' && movil.styled == 'N/A' && television.styled == 'N/A' && radio.styled == 'N/A') {
      removeTables();
    }
*/
    
}

    if (document.getElementsByTagName('table')[0] !== undefined)
      removeTables();
      createTable();

});

 





// Create GeoJSON
// Notes:
//            Must strip the 'Feature Collection' container
//            Must have outside '[]' around 'geoJson' variable


var geoJson = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "name": "Parque Pajaritos",
        "description": "Es el primero de 400 parques de barrio que tiene proyectado construir el Gobierno del Estado durante la presente administración, como parte de una estrategia para fortalecer el tejido social a través del sano esparcimiento y la convivencia de las familias.",
        "adtext": "http://eldiariodevictoria.com.mx/2012/10/21/parques-de-barrio-punto-de-reunion-familiar/",
        "video": "https://www.youtube.com/embed/De8W8Iq0uPI",
        "marker-color": "#014f28",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -99.10709738731384,
          23.75201974052911
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Parque El Palmar",
        "description": "El objetivo de estos nuevos espacios es que las familias de los sectores populares con mayor índice de población cuenten con un lugar donde poder reunirse y convivir sanamente, accediendo a mejores niveles de bienestar.",
        "adtext": "http://tamaulipas.gob.mx/2013/03/avanza-construccion-de-parques-de-barrio-del-gobierno-estatal/",
        "photo": "http://tamaulipas.gob.mx/wp-content/uploads/2013/03/FOTO-01-COMUNICADO-0212-SEDESOL.jpg",
        "marker-color": "#014f28",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -99.15029168128967,
          23.713244316755922
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Parque Echeverría",
        "description": "Convive es un programa para crear espacios dignos e iluminados donde los niños puedan convivir y divertirse, donde los jóvenes pueden ser amigos de mas jóvenes y los adultos tengan su esparcimiento.",
        "adtext": "http://tamaulipas.gob.mx/2013/03/avanza-construccion-de-parques-de-barrio-del-gobierno-estatal/",
        "photo": "http://tamaulipas.gob.mx/wp-content/uploads/2012/12/FOTOSEDESOL.jpg",
        "marker-color": "#014f28",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -99.18561100959778,
          23.710759074906985
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Tianguis Alimentario",
        "description": "Tianguis alimentario “Nutriendo Tamaulipas.” Más de 1500 familias el ejido Congregación Caballeros tuvieron acceso a productos de la canasta básica con el propósito de fortalecer la economía familiar y promover el consumo de alimentos frescos y saludables producidos por manos tamaulipecas.",
        "adtext": "http://tamaulipas.gob.mx/2013/04/lleva-maria-del-pilar-tianguis-alimentario-a-familias-de-la-zona-rural-de-victoria/",
        "photo": "http://farm9.staticflickr.com/8242/8661581453_22ef9b437c_b.jpg",
        "marker-color": "#014f28",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -99.16982889175415,
          23.862625265140075
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Modernización de carretera",
        "description": "Arranca Egidio modernización de la carretera Victoria - Mty",
        "adtext": "http://tamaulipas.gob.mx/2013/10/arranca-egidio-modernizacion-de-la-carretera-victoria-mty/",
        "video": "https://www.youtube.com/embed/22n6iUc8FX4",
        "marker-color": "#014f28",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -99.13135528564453,
          23.796968276489565
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Visita al Tec Victoria",
        "description": "Las aulas inteligentes de esta Unidad Central de Educación a Distancia permiten que la educación llegue a más comunidades de una forma inmediata, acercando los contenidos educativos de nivel medio superior y superior a más jóvenes en la entidad.",
        "adtext": "http://tamaulipas.gob.mx/2011/04/visita-director-general-de-educacion-superior-tecnologica-el-tec-victoria/",
        "video": "https://www.youtube.com/embed/gv_Px_s-JnE",
        "marker-color": "#014f28",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -99.16599869728088,
          23.75363022278287
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Plan Emergente de Agua",
        "description": "Este Plan beneficiará en una primera etapa a 7 mil 880 familias en los sectores Estrella, Libertad y El Mirador que son afectadas por la escasez de agua",
        "adtext": "http://tamaulipas.gob.mx/2013/04/arranca-gobierno-de-egidio-plan-emergente-de-agua-en-victoria/",
        "video": "https://www.youtube.com/embed/xTx_gJLkYYQ",
        "marker-color": "#014f28",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -99.17624473571777,
          23.77132457529661
        ]
      }
    }
  ]
};

map.markerLayer.setGeoJSON(geoJson);

// View for Ciudad Victoria: #10/23.7458/-98.9484

// GeoJSON Content Appears in #drawer-content on 'mouseover' //
map.markerLayer.on('mouseover',function(d) {
  d.layer.unbindPopup();

  // Get access of the GeoJSON
  var f = d.layer.feature;

  // Remove Table
  removeTables();

  // Change to marker to yellow
  resetColors();
    f.properties['old-color'] = f.properties['marker-color'];
    f.properties['marker-color'] = '#fdbd12';
    map.markerLayer.setGeoJSON(geoJson);

  // If paragraphs exist, Remove all paragraphs
  if (drawercontent.getElementsByTagName('p') !== '[]')
    removeParagraphs();

  // If 'a' tags exist, Remove all addText
  if (drawercontent.getElementsByTagName('a') !== '[]')
    removeAdTexts();

  // Change h3 tag
  var newH3 = document.createElement('h3');
  var h3text = f.properties.name;
  var newTH3 = document.createTextNode(h3text);
  newH3.appendChild(newTH3);
  var h3 = document.getElementsByTagName('h3')[0];
  h3.parentNode.replaceChild(newH3, h3);

  // Add img if there's a photo.src
  if (f.properties.photo !== undefined) { 
    var newImgLink = document.createElement('h4');
    // newImgLink.href = "http://media.tumblr.com/tumblr_me7e4kEsun1rhu69do1_500.png";
    // newImgLink.href = feature.properties.photo;
    // newImgLink.alt = "Ola k frio!"

    var newImg = document.createElement('img');
    // newImg.src = "http://media.tumblr.com/tumblr_me7e4kEsun1rhu69do1_500.png";
    newImg.src = f.properties.photo;
    newImg.style.width = '335px';
    newImgLink.appendChild(newImg);
    h3 = document.getElementsByTagName('h3')[0];
    h3.appendChild(newImgLink, h3);
  }

  // Add iframe if there's a video.src (modify GeoJSON)
  // Notes:
  //                  must be defined here as it accesses the feature variable
  function createIframe() {
    var newIframeDiv = document.createElement('div');
    // newIframeDiv.href = "http://media.tumblr.com/tumblr_me7e4kEsun1rhu69do1_500.png";
    // newIframeDiv.href = feature.properties.photo;
    // newIframeDiv.alt = "Ola k frio!"

    var newIframe = document.createElement('iframe');
    // newImg.src = "http://media.tumblr.com/tumblr_me7e4kEsun1rhu69do1_500.png";
    newIframe.src = f.properties["video"];
    newIframe.style.width = "335px";
    newIframe.style.height = "205.6902985074627px";
    newIframe.frameborder = "0";
    newIframeDiv.appendChild(newIframe);
    h3 = document.getElementsByTagName('h3')[0];
    h3.appendChild(newIframeDiv, h3);
  }

  if (f.properties["video"] !== undefined) 
    createIframe();

  // Add first paragraph function
  // Notes:
  //                  must be defined here as it accesses the feature variable
  function addFirstParagraph() {
    var newP1 = document.createElement('p');
    var newP1TextNode = document.createTextNode(f.properties.description);
    newP1.appendChild(newP1TextNode);
    h3 = drawercontent.getElementsByTagName('h3')[0];
    h3.parentNode.appendChild(newP1, h3);
  }

  // Add first paragraph
  if (drawercontent.getElementsByTagName('p') !== '[]')
    addFirstParagraph();

  // Add adtext element function
  function addAdText() {
    var adtextParagraph = document.createElement('div');
    adtextParagraph.style['text-align'] = 'right';
    adtextParagraph.style['font-weight'] = 'bold';

    var adtextLink = document.createElement('a');
    adtextLink.href = f.properties.adtext;
    adtextLink.alt = "YoPropongo";

    var adtext = document.createTextNode("Leer Más");
    adtextLink.appendChild(adtext);
    adtextParagraph.appendChild(adtextLink);

    var p1 = drawercontent.getElementsByTagName('p')[0];
    p1.appendChild(adtextParagraph, p1);
  }

  // Add adtext element function
  if (drawercontent.getElementsByTagName('p')[1] == undefined)
    addAdText();
  //

});



// All global functions available
// 
// 

var drawercontent = document.getElementsByClassName('drawer-content')[0];


  function resetColors() {
    for (var i = 0; i < geoJson.features.length; i++) {
        geoJson.features[i].properties['marker-color'] = geoJson.features[i].properties['old-color'] ||
            geoJson.features[i].properties['marker-color'];
    }
    map.markerLayer.setGeoJSON(geoJson);
  }
  
  function removeAdTexts() {
    var oldAdText = drawercontent.getElementsByClassName('adtext');
    for (i = oldAdText.length - 1; i >= 0; i--) {
      oldAdText[i].parentNode.removeChild(oldAdText[i]);
    }
  }

  function removeImgs() {
    var oldImg = drawercontent.getElementsByTagName('img');
    for (i = oldImg.length - 1; i >= 0; i--) {
      oldImg[i].parentNode.removeChild(oldImg[i]);
    }
  }

  function removeTables() {
    var oldTable = drawercontent.getElementsByTagName('table');
    for (i = oldTable.length - 1; i >= 0; i--) {
      oldTable[i].parentNode.removeChild(oldTable[i]);
    }
  }

  function removeParagraphs() {
    var oldP = drawercontent.getElementsByTagName('p');
    for (var i = oldP.length - 1; i >= 0; i--) {
      oldP[i].parentNode.removeChild(oldP[i]);
    }
  }
  
  
  function removeIframes() {
    var oldIframe = drawercontent.getElementsByClassName('iframeDiv');
    for (var i = oldIframe.length - 1; i >= 0; i--) {
      oldIframe[i].parentNode.removeChild(oldIframe[i]);
    }
  }
  

  function addSecondParagraph() {
    var newP2 = document.createElement('p');
    var newP2TextNode = document.createTextNode("Results are displayed across each province by use of radio, television, mobile phone and internet, and broken down by gender and location type where relevant. All 2010 population data is from the ");
    newP2.appendChild(newP2TextNode);
    var p2 = document.getElementsByTagName('p');
    
    drawercontent.parentNode.appendChild(newP2, drawercontent);

    // Add hyperlinked text to the second paragraph

    var newLink = document.createElement('a');
    newLink.href = "http://www.inegi.org/";
    newLink.alt = "INEGI";
    var str = document.createTextNode("Instituto Nacional de Estatística y Geografía");
    newLink.appendChild(str);
    p2 = document.getElementsByTagName('p')[1];
    p2.appendChild(newLink, p2);

    // Add '.' to end the second paragraph
    var per = document.createElement('p');
    var period = document.createTextNode(".");
    per.appendChild(period);
    p2 = document.getElementsByTagName('p')[1];
    p2.appendChild(period, p2);
  }



// 
//  End of all global functions
//







// On Map 'click' Function
// Notes:
//                               reset marker-colors
//                               reset the 'drawer-content' to the original layout
// 

var middleDiv = drawercontent.getElementsByTagName('div')[0];
var paragraph2 = drawercontent.getElementsByTagName('p')[1];

map.on('click', function(t) {

  // Reset marker colors in GeoJSON 
  resetColors();

// If there was a second paragraph in the panel before, 
// remove gridLayer
if (paragraph2 !== undefined) {
    internet.isOn = false;
  }

// If there was a middle div in the panel before, 
// remove gridLayer
if (middleDiv !== undefined) {
    internet.isOn = false;
  }


if (!internet.isOn){
  map.removeLayer(gridLayer);
}


  // Remove all paragraphs
    if (drawercontent.getElementsByTagName('p') != '[]')
      removeParagraphs();

  // Remove all iframes
  if (drawercontent.getElementsByClassName('iframeDiv') !== '[]')
    removeIframes()

  // If 'a' tags exist, Remove all addText
    if (drawercontent.getElementsByTagName('a') !== '[]')
      removeAdTexts();

  // Remove all images
    if (drawercontent.getElementsByTagName('img') != '[]')
      removeImgs();

  /* Remove tables
    if (drawercontent.getElementsByTagName('table') != '[]')
      removeTables();
  */
  // Return to original layout of HTML //
  
  // Change h3 text
    var newH3 = document.createElement('h3');
    var h3text = "Mapping and Documenting Access Trends and Consumption Patterns";
    var newTH3 = document.createTextNode(h3text);
    newH3.appendChild(newTH3);
    var h3 = document.getElementsByTagName('h3')[0];
    h3.parentNode.replaceChild(newH3, h3);

// Only after preparing it with only the h2, h3,
// table tags does adding the first paragraph this way work...
// Very Strange.... 

// And only when it's not coming from the GeoJSON panel

  // Add first paragraph
    var newP1 = document.createElement('p');
    var newP1TextNode = document.createTextNode("Tamaulipas’ media can play a crucial role in the future of the country. " + 
                                              "By informing citizens, by providing opportunities for discussion, and by holding " +
                                              "those in power to account, the media has a substantial role to play in developing " +
                                              "good governance. It can also aid economic growth and contribute to better " +
                                              "understanding of issues in many humanitarian and development sectors.");
    newP1.appendChild(newP1TextNode);

  // Add second paragraph
    var newP2 = document.createElement('p');
    var newP2TextNode = document.createTextNode("Results are displayed across each province by use of radio, television, mobile phone " +
                                              "and internet, and broken down by gender and location type where relevant. All 2010 " + 
                                              "population data is from the ");
    newP2.appendChild(newP2TextNode);
  
  // Add hyperlinked text to the second paragraph

  var newLink = document.createElement('a');
  newLink.href = "http://www.inegi.org/";
  newLink.alt = "INEGI";
  var str = document.createTextNode("Instituto Nacional de Estatística y Geografía");
  newLink.appendChild(str);
  /*
  var p2 = document.getElementsByTagName('p')[1];
  p2.appendChild(newLink, p2);
*/


// Add '.' to end the second paragraph
  var per = document.createElement('p');
  var period = document.createTextNode(".");
  per.appendChild(period);
  /*
  p2 = document.getElementsByTagName('p')[1];
  p2.appendChild(period, p2);
*/

    // If there is an existing table, insert first and second paragraphs before table
    if (drawercontent.getElementsByTagName('table')[0] !== undefined){
      var tab = document.getElementsByTagName('table')[0];
      var parentDiv = tab.parentNode;
      parentDiv.insertBefore(newP1, tab);
      parentDiv.insertBefore(newP2, tab);
      var p2 = document.getElementsByTagName('p')[1];
      p2.appendChild(newLink, p2);
      p2.appendChild(period, p2);
    }

    // If there is an img or iframe, add first and second paragraphs
    else {
      drawercontent.appendChild(newP1, drawercontent);
      drawercontent.appendChild(newP2, drawercontent);
      p2 = document.getElementsByTagName('p')[1];
      p2.appendChild(newLink, p2);
      p2.appendChild(period, p2);
    }

// If there was a second paragraph in the panel before, 
// remove gridLayer
if (paragraph2 !== undefined) {
    internet.isOn = true;
  }

// If there was a middle div in the panel before, 
// remove gridLayer
if (middleDiv !== undefined) {
    internet.isOn = false;
  }

if (internet.isOn) {
  map.addLayer(gridLayer);
}

}); 