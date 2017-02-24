function createTable() {
    removeParagraphs();


    var table = document.createElement('table');
    table.style.width = "335px";

    var trInternet = document.createElement('tr');

    var tdDataInternet = document.createElement('td');
    var tdTextInternet = document.createElement('td');
    var tdSVGInternet = document.createElement('td');
    
    var internet = (o.data && o.data.PORvivINTE);
    var sinInternet = (100 - internet);

    if (internet < 0 || internet === undefined)
      internet = 0;
      sinInternet = 100;


    var dataInternet = document.createTextNode(internet + '%');
    var textInternet = document.createTextNode('Internet');
    var svgInternet = document.createTextNode('');

    tdDataInternet.appendChild(dataInternet);
    tdTextInternet.appendChild(textInternet);
    tdSVGInternet.appendChild(svgInternet);
    
    tdDataInternet.style.color = "#fdbd12";
    tdTextInternet.style.color = "#fdbd12";
    tdSVGInternet.style.color = "#fdbd12";

    tdSVGInternet.className = "svgInternet";

    tdTextInternet.style['text-align'] = "left";

    trInternet.appendChild(tdTextInternet);
    trInternet.appendChild(tdDataInternet);
    trInternet.appendChild(tdSVGInternet);

    table.appendChild(trInternet); 

    h3 = document.getElementsByTagName('h3')[0];
    h3.parentNode.appendChild(table, h3);


    var trComp = document.createElement('tr');

    var tdDataComp = document.createElement('td');
    var tdTextComp = document.createElement('td');
    var tdSVGComp = document.createElement('td');

    var computer = (o.data && o.data.PORvivCOMP);
    var sinComputer = (100 - computer);

    if (computer < 0 || computer === undefined)
      computer = 0;
      sinComputer = 100;

    var dataComp = document.createTextNode(computer + '%');
    var textComp = document.createTextNode('Compú');
    var svgComp = document.createTextNode('');

    tdDataComp.appendChild(dataComp);
    tdTextComp.appendChild(textComp);
    tdSVGComp.appendChild(svgComp);
    
    tdDataComp.style.color = "#fdbd12";
    tdTextComp.style.color = "#fdbd12";
    tdSVGComp.style.color = "#fdbd12";
    
    tdTextComp.style['text-align'] = "left";

    tdSVGComp.className = "svgComputer";

    trComp.appendChild(tdTextComp);
    trComp.appendChild(tdDataComp);
    trComp.appendChild(tdSVGComp);
    
    table.appendChild(trComp); 


    var trMovil = document.createElement('tr');

    var tdDataMovil = document.createElement('td');
    var tdTextMovil = document.createElement('td');
    var tdSVGMovil = document.createElement('td');

    var movil = (o.data && o.data.PORvivMOVI);
    var sinMovil = (100 - movil);

    if (movil < 0 || movil === undefined)
      movil = 0;
      sinMovil = 100;

    var dataMovil = document.createTextNode(movil + '%');
    var textMovil = document.createTextNode('Móvil');
    var svgMovil = document.createTextNode('');
   
    tdDataMovil.appendChild(dataMovil);
    tdTextMovil.appendChild(textMovil);
    tdSVGMovil.appendChild(svgMovil);
    
    tdDataMovil.style.color = "#fdbd12";
    tdTextMovil.style.color = "#fdbd12";
    tdSVGMovil.style.color = "#fdbd12";

    tdSVGMovil.className = "svgMovil";

    tdTextMovil.style['text-align'] = "left";

    trMovil.appendChild(tdTextMovil);
    trMovil.appendChild(tdDataMovil);
    trMovil.appendChild(tdSVGMovil);
    
    table.appendChild(trMovil); 


    var trTelevision = document.createElement('tr');

    var tdDataTelevision = document.createElement('td');
    var tdTextTelevision = document.createElement('td');
    var tdSVGTelevision = document.createElement('td');

    var television = (o.data && o.data.PORvivTELE);
    var sinTelevision = (100 - television);

    if (television < 0 || television === undefined)
      television = 0;
      sinTelevision = 100;

    var dataTelevision = document.createTextNode(television + '%');
    var textTelevision = document.createTextNode('Televisión');
    var svgTelevision = document.createTextNode('');
   
    tdDataTelevision.appendChild(dataTelevision);
    tdTextTelevision.appendChild(textTelevision);
    tdSVGTelevision.appendChild(svgTelevision);
    
    tdDataTelevision.style.color = "#fdbd12";
    tdTextTelevision.style.color = "#fdbd12";
    tdSVGTelevision.style.color = "#fdbd12";

    tdSVGTelevision.className = 'svgTelevision';

    tdTextTelevision.style['text-align'] = "left";

    trTelevision.appendChild(tdTextTelevision);
    trTelevision.appendChild(tdDataTelevision);
    trTelevision.appendChild(tdSVGTelevision);

    table.appendChild(trTelevision); 


    var trRadio = document.createElement('tr');

    var tdDataRadio = document.createElement('td');
    var tdTextRadio = document.createElement('td');
    var tdSVGRadio = document.createElement('td');

    var radio = (o.data && o.data.PORvivRADI);
    var sinRadio = (100 - radio);

    if (radio < 0 || radio === undefined)
      radio = 0;
      sinRadio = 100;

    var dataRadio = document.createTextNode(radio + '%');
    var textRadio = document.createTextNode('Rádio');
    var svgRadio = document.createTextNode('');
   
    tdDataRadio.appendChild(dataRadio);
    tdTextRadio.appendChild(textRadio);
    tdSVGRadio.appendChild(svgRadio);
    
    tdDataRadio.style.color = "#fdbd12";
    tdTextRadio.style.color = "#fdbd12";
    tdSVGRadio.style.color = "#fdbd12";

    tdSVGRadio.className = "svgRadio";

    tdTextRadio.style['text-align'] = "left";

    trRadio.appendChild(tdTextRadio);
    trRadio.appendChild(tdDataRadio);
    trRadio.appendChild(tdSVGRadio);
    
    table.appendChild(trRadio); 



    h3 = document.getElementsByTagName('h3')[0];
    h3.parentNode.appendChild(table, h3);
//

/*
    if (internet == 'N/A' && computer == 'N/A' && movil == 'N/A' &&
        television == 'N/A' && radio == 'N/A')
          removeTable()

    if (document.getElementsByTagName('p')[1] == undefined)
      removeTable();
*/





/* D3 Testing */

/* Examples

https://groups.google.com/forum/#!topic/d3-js/bUpOcS2x7JA

*/




/* svgInternet */

//Width and height
      var w = 12;
      var h = 12;
      var datasetInternet = [ sinInternet, internet ];
   
      var outerRadius = w / 2;
      var innerRadius = 0;
      var arc = d3.svg.arc()
              .innerRadius(innerRadius)
              .outerRadius(outerRadius);
      
      var pie = d3.layout.pie();
      
      //Easy colors accessible via a 10-step ordinal scale
      var color = d3.scale.linear().domain([1,length]).range(['#fdbd12', '#404040']);

      //Create SVG element
      var svg = d3.selectAll(".svgInternet")
            .append("svg")
            .attr("width", w)
            .attr("height", h);
      
      //Set up groups
      var arcs = svg.selectAll("g.arc")
              .data(pie(datasetInternet))
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
  

/* Remove SVG if there already exists one
      if (svg !== undefined)
         d3.select("h3").remove();
*/

/* svgComputer */

//Width and height
      var w = 12;
      var h = 12;
      var datasetComputer = [ sinComputer, computer ];
   
      var outerRadius = w / 2;
      var innerRadius = 0;
      var arc = d3.svg.arc()
              .innerRadius(innerRadius)
              .outerRadius(outerRadius);
      
      var pie = d3.layout.pie();
      
      //Easy colors accessible via a 10-step ordinal scale
      var color = d3.scale.linear().domain([1,length]).range(['#fdbd12', '#404040']);

      //Create SVG element
      var svg = d3.selectAll(".svgComputer")
            .append("svg")
            .attr("width", w)
            .attr("height", h);
      
      //Set up groups
      var arcs = svg.selectAll("g.arc")
              .data(pie(datasetComputer))
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
  

/* Remove SVG if there already exists one
      if (svg !== undefined)
         d3.select("h3").remove();
*/

/* svgMovil */

//Width and height
      var w = 12;
      var h = 12;
      var datasetMovil = [ sinMovil, movil ];
   
      var outerRadius = w / 2;
      var innerRadius = 0;
      var arc = d3.svg.arc()
              .innerRadius(innerRadius)
              .outerRadius(outerRadius);
      
      var pie = d3.layout.pie();
      
      //Easy colors accessible via a 10-step ordinal scale
      var color = d3.scale.linear().domain([1,length]).range(['#fdbd12', '#404040']);

      //Create SVG element
      var svg = d3.selectAll(".svgMovil")
            .append("svg")
            .attr("width", w)
            .attr("height", h);
      
      //Set up groups
      var arcs = svg.selectAll("g.arc")
              .data(pie(datasetMovil))
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
  

/* Remove SVG if there already exists one
      if (svg !== undefined)
         d3.select("h3").remove();
*/



/* svgTelevision */

//Width and height
      var w = 12;
      var h = 12;
      var datasetTelevision = [ sinTelevision, television ];
   
      var outerRadius = w / 2;
      var innerRadius = 0;
      var arc = d3.svg.arc()
              .innerRadius(innerRadius)
              .outerRadius(outerRadius);
      
      var pie = d3.layout.pie();
      
      //Easy colors accessible via a 10-step ordinal scale
      var color = d3.scale.linear().domain([1,length]).range(['#fdbd12', '#404040']);

      //Create SVG element
      var svg = d3.selectAll(".svgTelevision")
            .append("svg")
            .attr("width", w)
            .attr("height", h);
      
      //Set up groups
      var arcs = svg.selectAll("g.arc")
              .data(pie(datasetTelevision))
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
  

/* Remove SVG if there already exists one
      if (svg !== undefined)
         d3.select("h3").remove();
*/


/* svgTelevision */

//Width and height
      var w = 12;
      var h = 12;
      var datasetRadio = [ sinRadio, radio ];
   
      var outerRadius = w / 2;
      var innerRadius = 0;
      var arc = d3.svg.arc()
              .innerRadius(innerRadius)
              .outerRadius(outerRadius);
      
      var pie = d3.layout.pie();
      
      //Easy colors accessible via a 10-step ordinal scale
      var color = d3.scale.linear().domain([1,length]).range(['#fdbd12', '#404040']);

      //Create SVG element
      var svg = d3.selectAll(".svgRadio")
            .append("svg")
            .attr("width", w)
            .attr("height", h);
      
      //Set up groups
      var arcs = svg.selectAll("g.arc")
              .data(pie(datasetRadio))
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
  

/* Remove SVG if there already exists one
      if (svg !== undefined)
         d3.select("h3").remove();
*/


/*------ End of D3 Testing 
----------------------------*/


}

createTable();