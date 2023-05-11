<svelte:head>
  <script src="https://cdn.plot.ly/plotly-latest.min.js" type="text/javascript"></script>
  <style>
    .sunburst-diagram {
      width: 50%;
    }
    .sunburst-container {
      display: flex;
      justify-content: space-around;
    }
    .sunburst-title {
      font-size: 24px;
      /* font-weight: bold; */
      margin-bottom: 20px;
      margin-top: 50px;
      font-family: 'Jost', sans-serif;
    }
  </style>
</svelte:head>

<script>
  import { onMount } from 'svelte';

  let myDiv1;
  let myDiv2;
  //let Plotly;


  var dataSM = [{
  type: "sunburst",
  labels: ["Have", "Not Have","Female", "Male"],
  parents: ["","", "Have", "Have"],
  values:  [29, 71, 4.5, 24.5],
  outsidetextfont: {size: 20, color: "purple"},
  branchvalues: 'total',
  leaf: {opacity: 0.4},
  marker: {
      line: { width: 2 },
      colors: ['rgba(128,0,128, 1)', 'rgba(128,0,128, 0.4)','rgba(128,0,128, 1)', 'rgba(128,0,128, 0.4)']
    },
  hovertemplate: '%{label}: %{value}%<extra></extra>',
  insidetextorientation: 'radial'
}];

var dataBIP = [{
  type: "sunburst",
  labels: ["Have", "Not Have","Female", "Male"],
  parents: ["","", "Have", "Have"],
  values:  [26.4, 73.6, 11.2, 15.2],
  outsidetextfont: {size: 20, color: "black"},
  branchvalues: 'total',
  leaf: {opacity: 0.4},
  marker: {
      line: { width: 2 },
      colors: ['rgba(128,128,128, 1)', 'rgba(128,128,128, 0.4)','rgba(128,128,128, 1)', 'rgba(128,128,128, 0.4)']
    },
  hovertemplate: '%{label}: %{value}%<extra></extra>',
  insidetextorientation: 'radial'
}];


  var layout1 = {
  title: 'Biparental Family',
  font: {
    family: "'Jost', sans-serif"
  },
  margin: {
    l: 40,
    r: 30,
    b: 80,
    t: 100,
  },
  width: 500,
  height: 500,
  
  };
  
  var layout2 = {
  title: 'Single Mother Family',
  font: {
    family: "'Jost', sans-serif"
  },
  margin: {
    l: 40,
    r: 30,
    b: 80,
    t: 100,
  },
  width: 500,
  height: 500
  };

  onMount(async () => {
    const { default: PlotlyModule } = await import("plotly.js-dist");
    const Plotly = PlotlyModule;
    Plotly.newPlot(myDiv1, dataBIP, layout1);
    Plotly.newPlot(myDiv2, dataSM, layout2);
  });

</script>

<div class="sunburst-title">Bank Account Ownership by Sex for Each Family Type</div>
<div class="sunburst-container">
  <div bind:this={myDiv1} class="sunburst-diagram"></div>
  <div bind:this={myDiv2} class="sunburst-diagram"></div>
</div>