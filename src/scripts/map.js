import getData from './data';

const map = function (){

    let width = 1000, height = 475
    
    let svg = d3.select(".map").append("svg")
        .attr("width", width)
        .attr("height", height)
    
    let usaProjection = d3.geoAlbersUsa()
      .scale(1000)
      .translate([400, 225])
    
    let pathGenerator = null
    
    let geoJsonUrl = ''
    
    
    pathGenerator = d3.geoPath().projection(usaProjection)
    geoJsonUrl = "https://gist.githubusercontent.com/spiker830/e0d1b7950ced31369c903bed0cead7b1/raw/702c72e0ca5a1be95f84a50a58cfa6d4d6400f3f/us_features.json"

    const data = getData()
    .then(data => {
        // console.log(data.SearchResult.SearchResultCountAll);
        return data.SearchResult.SearchResultCountAll;
        
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation: ', error);
    });

    console.log(data);
    
    
    d3.json(geoJsonUrl)
        .then(geojson => {
      svg.selectAll("path")
        .data(geojson.features)
        .enter()
        .append("path")
        .attr("d", pathGenerator) 
        .attr("stroke", "black") 
        .attr("fill", "lightblue") 
        .attr("class", "state")
        .on('mouseover' ,onMouseOver)
        .on('mouseout' ,onMouseOut)
        });
        

  function onMouseOver(d){
    
    d3.select('#tooltip')
      .select('#value')
      .text(`${d.properties.name}: ${data.PromiseResult}`)
      d3.select('#tooltip')
        .classed('hidden', false)

    d3.select(this)
      .transition()
      .duration(500)
      
  }

  function onMouseOut(d){
    d3.select(this)
      .transition()
      .duration(500)
    d3.select('#tooltip')
      .classed('hidden', true)
  }

  document.onmousemove = (event) => {
        document.getElementById("tooltip").style.left = event.pageX + 10 + "px";
        document.getElementById("tooltip").style.top = event.pageY - 35 + "px";
  }

    
}

export default map;
