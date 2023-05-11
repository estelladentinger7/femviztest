<svelte:head>
  <script src="https://cdn.plot.ly/plotly-latest.min.js" type="text/javascript"></script>
</svelte:head>

<script>
  import { onMount } from 'svelte';

  let myDiv;
  //let Plotly;


      var BIP = {
          x: ['[0,10)', '[10,20)', '[20,30)','[30,40)','[40,50)','[50,60)','[60,70)','[70,80)','[80,90)','[90,100]'],
          y: [1.41, 1.69, 6.00, 11.53, 18.17, 22.86, 19.75, 11.43, 6.21, 0.95],
          type: 'bar',
          name: 'Biparental Households',
          marker: {
              color: 'rgba(128,128,128, 0.5)'
          },
          hovertemplate: '%{y}% of biparental families spend %{x}% of household spending on food in the past 30 days<extra></extra>',
          };

    var SM = {
      x: ['[0,10)', '[10,20)', '[20,30)','[30,40)','[40,50)','[50,60)','[60,70)','[70,80)','[80,90)','[90,100]'],
      y: [2.41, 2.85, 7.14, 9.55, 19.10, 21.30, 21.73, 10.76, 3.62, 1.54],
      type: 'bar',
      name: 'Single Mother',
      marker: {
          color: 'rgba(128, 0, 128, 0.5)'
      },
      hovertemplate: '%{y}% of single mother families spend %{x}% of household spending on food in the past 30 days<extra></extra>',
      };


  var Data = [BIP,SM];

  var layout = {
  title: 'Fraction (%) of Household Spending on Food in the Past 30 Days',
  font: {
    family: "'Jost', sans-serif"},
  xaxis: {title: 'Fraction Segment of Household Spending'},
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
  bargroupgap: 0.1
  };

  onMount(async () => {
    const { default: PlotlyModule } = await import("plotly.js-dist");
    const Plotly = PlotlyModule;
    Plotly.newPlot(myDiv, Data, layout);
  });

</script>

<div bind:this="{myDiv}"></div>