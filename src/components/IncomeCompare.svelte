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
    const response = await fetch('./Income.js');
    const json = await response.json();
    
    // Here, we assume your JSON data looks something like this:
    // [ {"type":"single mother", "avg_income_amount": [...some numbers...]}, {"type":"biparental", "avg_income_amount": [...some numbers...]} ]
    // Separate the income amounts based on type
    let singleMotherIncome = json.find(item => item.type === 'Single Mother').avg_income_amount;
    let biparentalIncome = json.find(item => item.type === 'Biparental').avg_income_amount;

    let singleMotherMeanIncome = singleMotherIncome.reduce((a, b) => a + b, 0) / singleMotherIncome.length;
    let biparentalMeanIncome = biparentalIncome.reduce((a, b) => a + b, 0) / biparentalIncome.length;

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
    // layout.shapes = [
    // // Line indicating the mean income for Single Mother
    // {
    //   type: 'line',
    //   x0: singleMotherMeanIncome,
    //   x1: singleMotherMeanIncome,
    //   yref: 'paper',
    //   y0: 0,
    //   y1: 1,
    //   line: {
    //     color: 'rgb(128,0,128)',
    //     width: 2,
    //     dash: 'dashdot'
    //   }
    // },
    // Line indicating the mean income for Biparental
  //   {
  //     type: 'line',
  //     x0: biparentalMeanIncome,
  //     x1: biparentalMeanIncome,
  //     yref: 'paper',
  //     y0: 0,
  //     y1: 1,
  //     line: {
  //       color: 'rgb(128,128,128)',
  //       width: 2,
  //       dash: 'dashdot'
  //     }
  //   }
  // ];
  // layout.annotations.push(
  //   // Annotation for Single Mother mean income
  //   {
  //     x: singleMotherMeanIncome,
  //     y: 1.04, // you may need to adjust this
  //     xref: 'x',
  //     yref: 'paper',
  //     text: `The average income for single mother is $${Math.round(singleMotherMeanIncome)}`,
  //     showarrow: false,
  //     font: {
  //       size: 14
  //     }
  //   },
  //   // Annotation for Biparental mean income
  //   {
  //     x: 450,
  //     y: 0.7, // you may need to adjust this
  //     xref: 'x',
  //     yref: 'paper',
  //     text: `The average income for biparental family is $${Math.round(biparentalMeanIncome)}`,
  //     showarrow: true,
  //     font: {
  //       size: 14
  //     }
  //   }
  // );

    const { default: PlotlyModule } = await import("plotly.js-dist");
    const Plotly = PlotlyModule;
    Plotly.newPlot(myDiv, data, layout);
  });
</script>

<div bind:this="{myDiv}"></div>

