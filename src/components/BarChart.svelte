<svelte:head>
  <script src="https://cdn.plot.ly/plotly-latest.min.js" type="text/javascript"></script>
</svelte:head>

<script>
  import { onMount } from 'svelte';

  let myDiv;
  //let Plotly;

  var yValue = [25, 10, 8, 2, 7];
  var yValue2 = [25, 15, 15, 7, 4];
  var xValue = ['<br>Saving money', '<br>Contacting people<br>indestination country', '<br>Asking for a loan', '<br>Hiring/contacting<br>a coyote', '<br>Prepare migration<br>documents'];


  var trace1 = {
  x: xValue,
  y: yValue,
  name: 'Biparental Families',
  type: 'bar',
  text: yValue.map((y) => y + '%'),
  textposition: 'outside',
  hoverinfo: 'none',
  textfont: {
    size: 14,
    color: 'rgb(128,128,128)',
    weight: 'bold',
  },
  marker: {
    color: 'rgba(128, 128, 128, 0.4)',
    line: {
      color: 'rgb(128,128,128)',
      width: 1.5
    }}
};

var trace2 = {
  x: xValue,
  y: yValue2,
  name: 'Single Mothers',
  type: 'bar',
  text: yValue2.map((y) => y + '%'),
  textposition: 'outside',
  hoverinfo: 'none',
  textfont: {
    size: 14,
    color: 'rgb(128,0,128)',
    weight: 'bold',
  },
  marker: {
    color: 'rgba(128, 0, 128, 0.4)',
    line: {
      color: 'rgb(128,0,128)',
      width: 1.5
    }}
};

var data = [trace1, trace2];

  var layout = {

  barmode: 'group',
  yaxis: {
    showticklabels: false,
    showgrid: false,
    range: [0, 1000],
  },
  margin: {
    l: 40,
    r: 30,
    b: 80,
    t: 40,
  },
  paper_bgcolor: 'rgba(0,0,0,0)',
  plot_bgcolor: 'rgba(0,0,0,0)',
  showlegend: true,
  legend: {"orientation": "v",
            "xanchor": 'right',
            "yanchor": 'top',},
  transition: {
      duration: 4000,
      easing: 'quad-out'
  }
  };

  //onMount(async () => {
    //const { default: PlotlyModule } = await import("plotly.js-dist");
    //const Plotly = PlotlyModule;
    //Plotly.newPlot(myDiv, data, layout);
  //});

  onMount(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // plot is in view, animate it
          Plotly.animate(myDiv, {
            data: data,
            layout: {
              yaxis: {
                range: [0, 30]
              }
            }
          }, {
            transition: layout.transition
          });
        }
      });
    }, {
      rootMargin: '0px',
      threshold: 0.1
    });

    observer.observe(myDiv);

    plot = Plotly.newPlot(myDiv, data, layout);
  });

</script>

<br>
<br>
<br>
<br>
<br>
<br>
<br>

<h2>And the preparation begins by...</h2> 

<div bind:this="{myDiv}"></div>

<style>


  h2 {
        text-align: center;
        font-size: 1.5em;
        color: purple;
        margin-top: 0.1em;
        margin-bottom: 0.3em;        
  }

</style>