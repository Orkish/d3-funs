var width = Math.max(960, innerWidth),
    height = Math.max(500, innerHeight);

var i = 0;

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

svg.append("rect")
    .attr("width", width)
    .attr("height", height)
    .on("ontouchstart" in document ? "touchmove" : "mousemove", particle);

function particle() {
  var m = d3.mouse(this);

  svg.insert("rect")
      .attr("height", 50)
      .attr("width", 50)
      .attr("x", m[0])
      .attr("y", m[1])
      .style("stroke", d3.hsl((i = (i + 1) % 360), 1, .5))
      .style("fill", d3.hsl((i = (i + 1) % 360), 1, .5))
      .style("stroke-opacity", 1)
    .transition()
      .duration(2000)
      .ease(Math.sqrt)
      .attr("height", 100)
      .attr("width", 100)
      .attr("x", 0)
      .attr("y", 0)
      .style("fill-opacity", 1e-6)
      .style("stroke-opacity", 1e-6)
      .remove();

  
  svg.insert("rect")
      .attr("height", 50)
      .attr("width", 50)
      .attr("x", m[0])
      .attr("y", m[1])
      .style("stroke", d3.hsl((i = (i + 1) % 360), 1, .5))
      .style("fill", d3.hsl((i = (i + 1) % 360), 1, .5))
      .style("stroke-opacity", 1)
    .transition()
      .duration(2000)
      .ease(Math.sqrt)
      .attr("height", 100)
      .attr("width", 100)
      .attr("x", width)
      .attr("y", height)
      .style("fill-opacity", 1e-6)
      .style("stroke-opacity", 1e-6)
      .remove();

  svg.insert("rect")
      .attr("height", 50)
      .attr("width", 50)
      .attr("x", m[0])
      .attr("y", m[1])
      .style("stroke", d3.hsl((i = (i + 1) % 360), 1, .5))
      .style("fill", d3.hsl((i = (i + 1) % 360), 1, .5))
      .style("stroke-opacity", 1)
    .transition()
      .duration(2000)
      .ease(Math.sqrt)
      .attr("height", 100)
      .attr("width", 100)
      .attr("x", width)
      .attr("y", 0)
      .style("fill-opacity", 1e-6)
      .style("stroke-opacity", 1e-6)
      .remove();

  svg.insert("rect")
      .attr("height", 50)
      .attr("width", 50)
      .attr("x", m[0])
      .attr("y", m[1])
      .style("stroke", d3.hsl((i = (i + 1) % 360), 1, .5))
      .style("fill", d3.hsl((i = (i + 1) % 360), 1, .5))
      .style("stroke-opacity", 1)
    .transition()
      .duration(2000)
      .ease(Math.sqrt)
      .attr("height", 100)
      .attr("width", 100)
      .attr("x", 0)
      .attr("y", height)
      .style("fill-opacity", 1e-6)
      .style("stroke-opacity", 1e-6)
      .remove();

  d3.event.preventDefault();
}
