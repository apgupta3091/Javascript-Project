
const barChart = (data) => {

    data = data.sort( (a, b) => {
        return d3.ascending(a.value, b.value);
    })

    let margin = {
        top: 15,
        right: 25,
        bottom: 15,
        left: 60
    };

    let width = 960 - margin.left - margin.right - 450 ,
        height = 500 - margin.top - margin.bottom - 250 ;

    let svg = d3.select("#graphic").append("svg")
        .attr('class', 'svg1')
        .attr("width", width + margin.left + margin.right + 10)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    let x = d3.scale.linear()
        .range([0, width])
        .domain([0, d3.max(data, function (d) {
            return d.value;
        })]);

    let y = d3.scale.ordinal()
        .rangeRoundBands([height, 0], .1)
        .domain(data.map(function (d) {
            return d.name;
        }));



    let yAxis = d3.axisLeft()
        .scale(y);

    let gy = svg.append("g")
        .attr("class", "y axis")
        .call(yAxis)

    let bars = svg.selectAll(".bar")
        .data(data)
        .enter()
        .append("g")

    bars.append("rect")
        .attr("class", "bar")
        .attr("y", function (d) {
            return y(d.name);
        })
        .attr("height", y.rangeBand())
        .attr("x", 0)
        .attr("width", function (d) {
            return x(d.value);
        });

    bars.append("text")
        .attr("class", "label")
        .style('font-size', '16px')
        .attr("y", function (d) {
            return y(d.name) + y.rangeBand() / 2 + 4;
        })
        .attr("x", function (d) {
            return x(d.value) + 3;
        })
        .text(function (d) {
            return d.value;
        });
}

export default barChart;