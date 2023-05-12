
<svelte:head>
  <script src="https://cdn.plot.ly/plotly-latest.min.js" type="text/javascript"></script>
  <style>
    .sankey-diagram {
      width: 650px;
      height: 600px;
    }
    .sankey-container {
      display: flex;
      justify-content: space-around;
    }
    .sankey-title {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 20px;
    }
  </style>
</svelte:head>

<script>
  import { onMount, afterUpdate } from 'svelte';

  let myDiv2;

  // Assume dataObject1 and dataObject2 are your two different Sankey diagrams data
  var dataObjectSM = {
    type: "sankey",
    orientation: "h",
    node: {
      pad: 15,
      thickness: 30,
      line: {
        color: "gray",
        width: 0
      },
      label: ["Biparental","Single Mothers", "Above 50%", "Below 50%"],
      color: ["gray","purple","gray","gray"], // All nodes are purple
      // color: ["rgba(128,128,128,0.5)","rgba(128,0,128,1)","rgba(128,128,128,0.5)","rgba(128,128,128,0.5)"] // All nodes are purple
      hoverinfo: 'none',
    },

    link: {
      source: [0,0,1,1], // Always from "Single Mothers"
      target: [2,3,2,3], // To each category
      value:  [24,76,42,58], // The percentages for each category
      // color: Array.from({length: 10}, (_, i) => `rgba(128,0,128,${1 - (i / 10)})`), // Reverse color scale with purple ,
      color:['lightgray','lightgray','rgba(128,0,128,0.5)','rgba(128,0,128,1)'],
      // color:['rgba(128,128,128,0.5)','rgba(128,128,128,0.5)','rgba(128,0,128,0.5)','rgba(128,0,128,1)'],
      // hovertext: Array.from({length: 10}, (_, i) => `Value: ${[89.46, 3.40, 3.84, 1.65, 0.66, 0.66, 0.22, 0.11, 0.00, 0.00][i]}%<extra></extra>`), // Custom hover text
      hovertemplate: '%{value}% of %{source.label} families spend %{target.label} of migration cost on intermediaries.<extra></extra>',
    }
  }

  var dataArray2 = [dataObjectSM]

  var layoutSM = {
    title: "% of Migration Cost Spent on Intermediaries",
    font: {
      size: 15
    }
  }


  onMount(async () => {
    const { default: PlotlyModule } = await import("plotly.js-dist");
    const Plotly = PlotlyModule;
    Plotly.newPlot(myDiv2, dataArray2, layoutSM);
  });

</script>
<div class="sankey-container">
  <div bind:this={myDiv2} class="sankey-diagram"></div>
</div>

