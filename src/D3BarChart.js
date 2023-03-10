import React, { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'

function D3BarChart() {
  const [dataset] = useState([12, 31, 22, 17, 25, 18, 29, 14, 50]);
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

    // // If setting the scaling
    // let xScale = d3.scaleBand()
    //   .domain(dataset.map((val, i) => i))
    //   .range([0, w])
    //   .padding(0.5);
    // let yScale = d3.scaleLinear()
    //   .domain([0, h])
    //   .range([h, 0]);

    // // setting the axes
    // let xAxis = d3.axisBottom(xScale)
    //   .ticks(dataset.length);
    // let yAxis = d3.axisLeft(yScale)
    //   .ticks(5);
    // svg.append('g')
    //   .call(xAxis)
    //   .attr('transfrom', `translate(0,${h})`)
    // svg.append('g')
    //   .call(yAxis);

    svg.selectAll("text")
      .data(dataset)
      .enter()
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