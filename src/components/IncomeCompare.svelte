<svelte:head>
  <script src="https://cdn.plot.ly/plotly-latest.min.js" type="text/javascript"></script>
</svelte:head>

<script>
  import { onMount } from 'svelte';

  let myDiv;
  let data = [];
  
  let layout = {
    title: '<b>Average Monthly Income by Family Type',
    font: {
    family: "'Jost', sans-serif"},
    xaxis: { title: 'Average Monthly Income' },
    yaxis: {
      autorange: true,
      showgrid: true,
      zeroline: true,
      dtick: 10,
      gridcolor: 'rgb(255,255,255)',
      gridwidth: 1,
      zerolinecolor: 'rgb(0,0,0)',
      zerolinewidth: 2,
      title: 'Count of Families'
    },
    barmode: 'overlay',
    margin: {
      l: 40,
      r: 30,
      b: 80,
      t: 100,
    },
    paper_bgcolor: 'rgba(0,0,0,0)',
    plot_bgcolor: 'rgba(0,0,0,0)',
    showlegend: true,
    annotations: [
    {
      x: 760,
      y: 60,
      xref: 'x',
      yref: 'y',
      text: 'Biparental families have longer tail in the income range',
      showarrow: true,
      arrowhead: 7,
      font: {
          size: 14
        },
      ax: 0,
      ay: -40
    },
    {
      x: 300,
      y: 140,
      xref: 'x',
      yref: 'y',
      text: 'Single mother households are more concentrated in the lower income range',
      showarrow: true,
      arrowhead: 7,
      font: {
          size: 14
        },
      ax: 0,
      ay: -40,
      arrowcolor: 'rgba(128,0,128,1)',
      // align: 'left',
    },
    {
        text: 'Hover over the graph to see more details',
        showarrow: false,
        xref: 'paper',
        yref: 'paper',
        x: 0.38,
        y: 1.04, // you might need to adjust this
        xanchor: 'left',
        yanchor: 'bottom',
        font: {
            size: 16}
    }
  ]
  };

  onMount(async () => {
    const response = await fetch('./src/data/Income.json');
    const json = await response.json();
    
    // Here, we assume your JSON data looks something like this:
    // [ {"type":"single mother", "avg_income_amount": [...some numbers...]}, {"type":"biparental", "avg_income_amount": [...some numbers...]} ]
    // Separate the income amounts based on type
    let singleMotherIncome = json.find(item => item.type === 'Single Mother').avg_income_amount;
    let biparentalIncome = json.find(item => item.type === 'Biparental').avg_income_amount;

    // Create two histogram traces
    data = [
      {
        x: singleMotherIncome,
        type: 'histogram',
        opacity: 0.5,
        name: 'Single Mother',
        marker: {
          color: 'rgb(128,0,128)'
        },
        nbinsx: 80,
        hovertemplate: 'In the income range of %{x} dollars, there are %{y} single mother families<extra></extra>',
      },
      {
        x: biparentalIncome,
        type: 'histogram',
        opacity: 0.5,
        name: 'Biparental',
        marker: {
          color: 'rgb(128,128,128)'
        },
        nbinsx: 80,
        hovertemplate: 'In the income range of %{x} dollars, there are %{y} biparental families<extra></extra>',
      }
    ];

    const { default: PlotlyModule } = await import("plotly.js-dist");
    const Plotly = PlotlyModule;
    Plotly.newPlot(myDiv, data, layout);
  });
</script>

<div bind:this="{myDiv}"></div>

