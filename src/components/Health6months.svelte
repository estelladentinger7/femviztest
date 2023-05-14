<svelte:head>
  <script src="https://cdn.plot.ly/plotly-latest.min.js" type="text/javascript"></script>
</svelte:head>

<script>
  import { onMount } from 'svelte';

  let myDiv;
  //let Plotly;


      var BIP = {
          x: ['[0,10)', '[10,20)', '[20,30)','[30,40)','[40,50)','[50,60)','[60,70)','[70,80)','[80,90)','[90,100]'],
          y: [38.17, 9.61, 8.81, 7.01, 5.05, 5.55, 4.52, 4.10, 3.25, 13.9],
          type: 'bar',
          name: 'Biparental Households',
          marker: {
              color: 'rgba(128,128,128,0.5)'
          },
          hovertemplate: '%{y}% of biparental families spend %{x}% of household spending on health in the past 6 months<extra></extra>',
          };

    var SM = {
      x: ['[0,10)', '[10,20)', '[20,30)','[30,40)','[40,50)','[50,60)','[60,70)','[70,80)','[80,90)','[90,100]'],
      y: [32.8,7.95,7.33,6.83,6.09,6.34,6.21,4.10,3.85,18.51],
      type: 'bar',
      name: 'Single Mother',
      marker: {
          color: 'rgba(128, 0, 128, 0.5)'
      },
      hovertemplate: '%{y}% of single mother families spend %{x}% of household spending on health in the past 6 months<extra></extra>',
      };


  var Data = [BIP,SM];

  var layout = {
  title: '<b>Fraction (%) of Household Spending on Health in the Past 6 Months',
  font: {
    family: "'Jost', sans-serif"},
  xaxis: {title: 'Fraction Segment of Household Spending (Left Inlcusive)'},
  yaxis: {
    autorange: true,
    showgrid: true,
    zeroline: true,
    range: [0,100],
    dtick: 10,
    gridcolor: 'rgb(255,255,255)',
    gridwidth: 1,
    zerolinecolor: 'rgb(0,0,0)',
    zerolinewidth: 1,
    title: 'Percentage (%) of Total Single Mother Families'
  },
  margin: {
    l: 40,
    r: 30,
    b: 80,
    t: 100,
  },
  paper_bgcolor: 'rgba(0,0,0,0)',
  plot_bgcolor: 'rgba(0,0,0,0)',
  showlegend: true,
  barmode: 'group',
  bargap: 0.15,
  bargroupgap: 0.1,
  annotations: [
    {
        text: '<b>Hover</b> over the graph to see more details',
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
    const { default: PlotlyModule } = await import("plotly.js-dist");
    const Plotly = PlotlyModule;
    Plotly.newPlot(myDiv, Data, layout);
  });

</script>

<div bind:this="{myDiv}"></div>