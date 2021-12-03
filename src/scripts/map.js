

const map = function (){

    let width = 1000, height = 1000
    
    let svg = d3.select("body").append("svg")
        .attr("width", width)
        .attr("height", height)
    
    let usaProjection = d3.geoAlbersUsa()
      .scale(1000)
      .translate([400, 250])
    
    let pathGenerator = null
    
    let geoJsonUrl = ''
    
    
    pathGenerator = d3.geoPath().projection(usaProjection)
    geoJsonUrl = "https://gist.githubusercontent.com/spiker830/e0d1b7950ced31369c903bed0cead7b1/raw/702c72e0ca5a1be95f84a50a58cfa6d4d6400f3f/us_features.json"
    
    
    d3.json(geoJsonUrl)
        .then(geojson => {
      svg.selectAll("path")
        .data(geojson.features)
        .enter()
        .append("path")
        .attr("d", pathGenerator) 
        .attr("stroke", "black") 
        .attr("fill", "white") 
        .attr("class", "state")
        
        });
}

export default map;
