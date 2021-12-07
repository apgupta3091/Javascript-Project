

const renderMap = (data) => {

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

    
    d3.json(geoJsonUrl)
        .then(geojson => {
      svg.selectAll("path")
        .data(geojson.features)
        .enter()
        .append("path")
        .attr("d", pathGenerator) 
        .attr("stroke", "black") 
        .attr("class", "state dark mid-dark mid-light light")
        .on('mouseover', onMouseOver)
        .on('mouseout', onMouseOut)
        .attr("fill", fill) 
        
        });
      
   


    
  const fill = () => {
    let elements = document.querySelectorAll(".state")
    let elementsArr = Array.prototype.slice.call(elements);
    
    for(let i = 0; i < elementsArr.length; i++){
      if (data[elementsArr[i].__data__.properties.name] >= 225){
        elementsArr[i].classList.remove("light", "mid-dark", "mid-light")
      } else if (data[elementsArr[i].__data__.properties.name] >= 150 && data[elementsArr[i].__data__.properties.name] < 225){
        elementsArr[i].classList.remove("light", "dark", "mid-light")
      } else if (data[elementsArr[i].__data__.properties.name] >= 75 && data[elementsArr[i].__data__.properties.name] < 150){
        elementsArr[i].classList.remove("light", "dark", "mid-dark")
      } else {
        elementsArr[i].classList.remove("mid-light", "dark", "mid-dark")
      }
    }
    
  }
        

  const onMouseOver = (d) => {
    d3.select('#tooltip')
      .select('#value')
      .text(`${d.properties.name}: ${data[d.properties.name]}`)
      d3.select('#tooltip')
        .classed('hidden', false)

    d3.select(this)
      .transition()
      .duration(500)
  }

  const onMouseOut = () => {
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

export default renderMap;
