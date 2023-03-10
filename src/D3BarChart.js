import React, { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'

function D3BarChart() {
  const [dataset ] = useState([12, 31, 22, 17, 25, 18, 29, 14, 9]);
  const svgRef = useRef()

  useEffect(() => {
    // setting up svg container
    let w = 400;
    let h = 300;
    let svg = d3.select(svgRef.current)
      .attr("width", w)
      .attr("height", h);

    svg.selectAll("rect")
      .data(dataset)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 30)
      .attr("y", (d, i) => h - 3 * d)
      .attr("width", 25)
      .attr("height", (d, i) => 3 * d)
      .attr("fill", "navy");

    svg.selectAll("text")
      .data(dataset)
      .enter()
      // Add your code below this line
      .append("text")
      .attr("x", (d, i) => i * 30)
      .attr("y", (d, i) => h - 3 * d - 3)
      .text((x) => x)
      .text((y) => y)
  }, [dataset])


  return (
    <>
      <h1 style={{ color: "black", textAlign: "center" }}>D3 Bar Chart Example</h1>
      <svg ref={svgRef}></svg>
    </>
  )
}

export default D3BarChart