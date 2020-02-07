import * as d3 from 'd3';

const margin = {
  top: 20,
  right: 20,
  bottom: 30,
  left: 40
};

const $chart = document.querySelector('#chart');

const width = $chart.offsetWidth - margin.left - margin.right;
const height = 800 - margin.top - margin.bottom;

const chart = d3.select('#chart');

var svg = chart.append('svg')
  .attr('width', width + margin.left + margin.right)
  .attr('height', height + margin.top + margin.bottom)
  .append('g')
    .attr('transform', `translate(${margin.left}, ${margin.top})`);

var x = d3.scaleTime();
var y = d3.scaleLinear();

var xAxis = d3.axisBottom().scale(x);
var yAxis = d3.axisLeft().scale(y);

d3.csv("/files/loudness-wars.csv", function(row) {
  return {
    artist: row.Artist,
    song: row['Song Title'],
    rank: +row.Position,
    loudness: +row.Loudness,
    year: +row.Year,
  };
}).then(function(data) {
  // get rid of 0s / undefined
  data = data.filter(song => song.loudness);

  let years = data.map(r => r.year);
  x.domain(d3.extent([Math.min(...years), Math.max(...years)]))
   .range([0, width])
   .nice();

  y.domain([0, -30])
   .range([0, height])
   .nice();

  // x axis
  svg.append('g')
    .attr('class', 'x axis')
    .attr('transform', `translate(0, ${height})`)
    .call(xAxis)
  .append('text')
    .attr('stroke', '#000')
    .attr('x', width - margin.right)
    .attr('y', -2)
    .text('Year');

  // y axis
  svg.append('g')
    .attr('class', 'y axis')
    .call(yAxis)
  .append('text')
    .attr('stroke', '#000')
    .attr('transform', 'rotate(-90)')
    .attr('y', 10)
    .style('text-anchor', 'end')
    .text('Loudness (dB)');

  // tooltip
  const tooltip = chart.append('div')
    .attr('class', 'tooltip')
    .style('opacity', 0);

  const onMouseover = (d) => {
    console.log('mouseover', d);
    let html = `
      <span class="song-title"> ${d.song} (${d.year})</span>
      <br>
      <span class="artist-name"> ${d.artist} </span>
      <br>
      <span class="rank">
        <b>Rank:</b> ${d.rank}
      </span>
      <br>
      <span class="loudness">
        <b>Loudness:</b> ${d.loudness}
      </span>
    `;

    tooltip.html(html)
      .style('left', `${d3.event.layerX + 15}px`)
      .style('top', `${d3.event.layerY - 30}px`)
    .transition()
      .duration(200)
      .style('opacity', 0.9);
  }

  const onMouseout = (d) => {
    tooltip.transition()
      .duration(300)
      .style('opacity', 0);
  }

  svg.selectAll('.song')
    .data(data)
    .enter()
      .append('circle')
      .attr('class', 'song')
      .attr('r', 3.5)
      .attr('cx', d => x(d.year))
      .attr('cy', d => y(d.loudness))
      .on('mouseover', onMouseover)
      .on('mouseout', onMouseout);
});
