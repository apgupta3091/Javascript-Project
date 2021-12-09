

const legend = () =>{

    let width = 450, height = 100
    
    let svg = d3.select(".legend-div").append("svg")
        .attr("width", width)
        .attr("height", height)


    let legendContainerAttributes = {
        width: 350, 
        height: 90, 
        x: width * 0.03,
        y: height * 0.02,
        roundX: 10,
        roundY: 10
    }

    let legendContainer = svg.append('rect')
        .attr('x', legendContainerAttributes.x)
        .attr('y', legendContainerAttributes.y)
        .attr('rx', legendContainerAttributes.roundX)
        .attr('ry', legendContainerAttributes.roundY)
        .attr('width', legendContainerAttributes.width)
        .attr('height', legendContainerAttributes.height)
        .attr('class', 'legend-container');

    let legendBoxAttributes = {
        width: 60, 
        height: 25,
        y: legendContainerAttributes.y + 55
    };

    let legendData = ['0 - 75', '>50', '>150', '>200'];
    let legendColors = ['#154baf9d', '#0933f18a', '#0849fcc0', '#0817f0']

    let legend = svg.selectAll('g.legend')
        .data(legendData)
        .enter().append('g')
        .attr('class', 'legend');

    legend.append('rect')
        .attr('x', function(d, i){
            return legendContainerAttributes.x + legendBoxAttributes.width * i + 20;
        })
        .attr('y', legendBoxAttributes.y)
        .attr('width', legendBoxAttributes.width)
        .attr('height', legendBoxAttributes.height)
        .style('fill',function(d, i){
            return legendColors[i];
        })
        .style('opacity', 1);

        let legendLabels = ['0', '75', '150', '225+'];


        legend.append('text')
            .attr('x', function(d, i){
                return legendContainerAttributes.x + legendBoxAttributes.width * i + 40;
            })
            .attr('y', legendContainerAttributes.y + 50)
            .style('font-size', 15)
            .text((function(d, i){
                if (i === 5){
                    return legendLabels[i] + '+';
                } else {
                    return legendLabels[i];
                }
            }))
            
        
}


export default legend;