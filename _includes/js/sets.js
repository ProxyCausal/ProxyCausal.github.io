var binWidth = 100
var binHeight = 50
var data = [[[1,2,3],[4],[5,6]], [[1,3,2],[4],[5,6]]]

var svg = d3.selectAll(".set_diagram")
    .append("svg")
    .attr("width", function(d,i) { return data[i].length*(binWidth+1); })
    .attr("height", binHeight+2);

var grid = svg.selectAll(".bins")
    .data(function(d,i) { return data[i] })
    .enter().append("g")
    .attr("transform", function(d,i) { return "translate(" + (1+i*binWidth) + ", 0)"; });

var square = grid.append("rect")
    .attr("width", binWidth)
    .attr("height", binHeight+2)
    .style("fill", "#fff")
    .style("stroke", "#000");

var labels = grid.append("text")
    .attr("x", "10")
    .attr("y", "20")
    .text(function(d) { return d.join(); });
