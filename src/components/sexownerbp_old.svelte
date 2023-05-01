<!-- App.svelte -->
<script>
  import { onMount } from 'svelte';
  import { select } from 'd3';

  const width = 400;
  const height = 400;
  const numRows = 10;
  const numCols = 10;
  const bothPercent = 10;
  const malePercent = 59;

  const cellWidth = width / numCols;
  const cellHeight = height / numRows;
  const radius = Math.min(cellWidth, cellHeight) / 2.5;
  const cellData = [];

  const bothCount = Math.round((numCols * numRows * bothPercent) / 100);
  const maleCount = Math.round((numCols * numRows * malePercent) / 100);
  const femaleCount = numCols * numRows - bothCount - maleCount;

  const widthLegend = 300;
  const heightLegend = 20;

  export let index;

  let colorIndex = 0;

  for (let i = 0; i < numCols; i++) {
    for (let j = 0; j < numRows; j++) {
      let color = 'black';
      if (colorIndex < bothCount) {
        color = 'lightgray';
      } else if (colorIndex < bothCount + maleCount) {
        color = 'gray';
      }
      colorIndex++;
      cellData.push({id: `${i}-${j}`, cx: (j + 0.5) * cellWidth, cy: (i + 0.5) * cellHeight, color: color});
    }
  }

  let container;
  let isGrayShown = false;
  let isBlackShown = false;

  onMount(() => {
    const svg = select(container)
      .append('svg')
      //.attr('width', width)
      //.attr('height', height);
      .attr("viewBox", "0 0 " + width + " " + height)
      .attr("preserveAspectRatio", "xMidYMid meet");

    function animateCircles() {
      svg
        .selectAll('circle')
        .data(cellData)
        .enter()
        .append('circle')
        .attr('cx', d => d.cx)
        .attr('cy', -radius) //d => d.cy)
        .attr('r', radius)
        .attr('fill', d => d.color)
        .transition() // add transition
        .delay((d, index) => index * 50) // add delay based on index
        .duration(1000)
        .attr('cy', d => d.cy)
        .on('click', function(d) {
        if (d.color === 'lightgray' && !isGrayShown) {
          isGrayShown = true;
          animateCircles();
        } else if (d.color === 'gray' && !isBlackShown) {
          isBlackShown = true;
          animateCircles();
        }
      });
    }

    // add an event listener to the window object that listens for the 'scroll' event
    //window.addEventListener('scroll', () => {
    // get the position and size of the SVG element
    //const rect = svg.node().getBoundingClientRect();

    // check if the SVG element is in view
   // if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      // if the SVG element is in view, start the animation
   //   animateCircles();
   // }

    window.addEventListener('click', () => {
    animateCircles();
  });
  //});

    const group = select(container)
      .append('svg')
      //.attr('width', 200)
      //.attr('height', 20)
      .attr("viewBox", "0 0 " + widthLegend + " " + heightLegend)
      .attr("preserveAspectRatio", "xMidYMid meet")
      .append('g')
      .attr('transform', `translate(${width / 4 + 12}, 10)`)
      .attr('text-anchor', 'start')
      .style('font-size', '14px');

    group.append('circle')
      .attr('cx', 0)
      .attr('cy', 0)
      .attr('r', 8)
      .attr('fill', 'lightgray');

    group.append('text')
      .attr('x', 16)
      .attr('y', 5)
      .text('Both');

    const group2 = select(container)
      .append('svg')
      //.attr('width', 200)
      //.attr('height', 20)
      .attr("viewBox", "0 0 " + widthLegend + " " + heightLegend)
      .attr("preserveAspectRatio", "xMidYMid meet")
      .append('g')
      .attr('transform', `translate(${width / 4 + 12}, 10)`)
      .attr('text-anchor', 'start')
      .style('font-size', '14px');

    group2.append('circle')
      .attr('cx', 0)
      .attr('cy', 0)
      .attr('r', 8)
      .attr('fill', 'gray');

    group2.append('text')
      .attr('x', 16)
      .attr('y', 5)
      .text('Man');

    const group3 = select(container)
      .append('svg')
      //.attr('width', 200)
      //.attr('height', 20)
      .attr("viewBox", "0 0 " + widthLegend + " " + heightLegend)
      .attr("preserveAspectRatio", "xMidYMid meet")
      .append('g')
      .attr('transform', `translate(${width / 4 + 12}, 10)`)
      .attr('text-anchor', 'start')
      .style('font-size', '14px');

    group3.append('circle')
      .attr('cx', 0)
      .attr('cy', 0)
      .attr('r', 8)
      .attr('fill', 'black');

    group3.append('text')
      .attr('x', 16)
      .attr('y', 5)
      .text('Woman');
  });

  let isVisible = false;

  $: if (index === 2) {
    isVisible = true;
  } else {
    isVisible = false;
  }

</script>

<div class="sex" class:visible={isVisible} bind:this={container}>
  <h1>Biparental</h1>
</div>

<style>
  .sex {
    width: 100%;
    height: 100vh;
    position: relative;
    opacity: 0;
    visibility: hidden;
    transition: opacity 2s, visibility 2s;
  }

  .sex.visible {
    opacity: 1;
    visibility: visible;
  }

  h1 {
    color: gray;
  }
</style>
