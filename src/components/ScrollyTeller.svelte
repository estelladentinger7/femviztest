<script>

import Scroller from "@sveltejs/svelte-scroller";
import Title from "./Title.svelte";
import Chart from './Chart.svelte';
import PropertyType from './propertyType.svelte';
import PropertyTypesm from './propertyTypesm.svelte';
import PropertyTypebp from './propertyTypebp.svelte';
import Sexownerbp from './sexownerbp.svelte';
import Sexownersm from './sexownersm.svelte';

import { geoMercator } from "d3-geo";


let count, index, offset, progress;
let width, height;

let geoJsonToFit = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [1, 0],
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [0, 1],
        },
      },
    ],
  };

  $: projection = geoMercator().fitSize([width, height], geoJsonToFit);

  let items_col2 = [
    { label: 'Item 1', value: 85 },
    { label: 'Item 2', value: 33 },
    { label: 'Item 3', value: 20 },
    { label: 'Item 4', value: 23 },
    { label: 'Item 5', value: 15 },
  ];

  let isVisible1 = false;
  let isVisible2 = false;

  $: {
    if (index === 1) {
      isVisible1 = true;
      isVisible2 = false;
    } else if (index === 2) {
      isVisible2 = true;
      isVisible1 = false;
    } else {
      isVisible2 = false;
    }
  }

</script>

<style>
  .background {
    width: 100%;
    height: 100vh;
    position: relative;
    /*outline: purple 3px;*/
    
  }

  .foreground {
    width: 50%;
    margin: 0 auto;
    height: auto;
    position: relative;
    /*outline: red solid 3px;*/
  }

  .progress-bars {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 7px;
    background: purple;
    /*visibility: visible;  */
  }

  section {
    height: 70vh;
    background-color: rgba(0, 0, 0, 0.01); 
    /* color: white; */
    /*outline: magenta solid 3px;*/
    text-align: center;
    max-width: 750px; /* adjust at will */
    color: black;
    padding: 1em;
    margin: 0 0 0 0;
  }

  h1 {
        text-align: center;
        font-size: 3em;
        margin-top: 1em;
        margin-bottom: 0.1em;
  }

  h2 {
        text-align: center;
        font-size: 1.5em;
        color: purple;
        margin-top: 0.1em;
        margin-bottom: 0.3em;        
  }

  h3 {
        text-align: center;
        font-size: 1em;
        color: gray;
        margin-top: 7em;
        margin-bottom: 1em; 
        font-style: italic; 
        opacity: 0;
        visibility: hidden;
        transition: opacity 2s, visibility 2s;     
  }

  h3.visible1 {
    opacity: 1;
    visibility: visible;
  }

  h4 {
    text-align: center;
    font-size: 2em;
    color: gray;
    font-style: italic;
  }

  h5 {
    text-align: center;
    font-size: 1.5em;
    color: gray;
    font-style: italic;
  }

  .text {
    visibility: hidden;
    margin-top: 5em;
  }

  .text2 {
    visibility: hidden;
    margin-top: 2em;
  }

  .text.visible2 {
    visibility: visible;
  }

  .text2.visible2 {
    visibility: visible;
  }

.image-container {
  position: relative;
  width: 300px;
  height: 100px;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.9);
  text-align: center;
  padding-top: 80px;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.5s ease-in-out;
}

.image-container:hover .overlay {
  visibility: visible;
  opacity: 1;
}

.chart-container {
  background-color: #f7f7f7;
}

/*
.image1 {
    width: 100%;
    height: 100vh; 
    position: absolute;
    opacity: 1;
    visibility: hidden;
    transition: opacity 2s, visibility 2s;
  }
  
.image1.visible1 {
    opacity: 0.2;
    visibility: visible;
    background-image: url('./src/components/img/housing.jpeg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
*/

.propertyType1-container {
  position: relative;
  z-index: 1;
  margin-bottom: -500px;
}

.propertyType2-container{
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 0px;
}

.propertyTypebp {
  width: 300px;
  background-color: var(--color-bg);
  box-shadow: 0 0 4px var(--color-shadow);
  padding: 0px;
  margin-top: 0px;
}

.propertyTypesm {
  width: 300px;
  background-color: var(--color-bg);
  box-shadow: 0 0 4px var(--color-shadow);
  padding: 0px;
  margin-top: 0px;
}

/*
.image2 {
    width: 100%;
    height: 100vh; 
    position: absolute;
    opacity: 1;
    visibility: hidden;
    transition: opacity 2s, visibility 2s;
  }
  
.image2.visible2 {
    opacity: 0.2;
    visibility: visible;
    background-image: url('./src/components/img/housing_sm.jpeg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
*/

.sexowners-container {
  display: flex;
  position: relative;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
}

.Sexownerbp {
  width: 500px;
  height: 100px;
  background-color: var(--color-bg);
  box-shadow: 0 0 4px var(--color-shadow);
  padding: 150px;
  margin-top: 50px;
}

.Sexownersm {
  width: 500px;
  height: 100px;
  background-color: var(--color-bg);
  box-shadow: 0 0 4px var(--color-shadow);
  padding: 150px;
  margin-top: 50px;
}

</style>

<Scroller
  top={0.0}
  bottom={1}
  threshold={0.5}
  bind:count
  bind:index
  bind:offset
  bind:progress
>
  <div 
      class="background" 
      slot="background"
      bind:clientWidth={width}
      bind:clientHeight={height}
    >

    <Title bind:geoJsonToFit {index} />
    <div class="image1" class:visible1={isVisible1} /> <!--background image for section 1-->
    <div class="image2" class:visible2={isVisible2} /> <!--background image for section 2-->

    <div class="sexowners-container">
      <div class="Sexownerbp">
        <Sexownerbp {index} />
      </div>

      <div class="text">
      <h5 class="text2" class:visible2={isVisible2} >Click to see the proportions of property ownership by sex.</h5>
      <h4 class="text" class:visible2={isVisible2} >Even in single mother households, 18% of property owners are men</h4>
    </div>
      
    <div class="Sexownersm">
      <Sexownersm {index} />
    </div>
    </div>

    <div class="progress-bars">
      <p>current section: <strong>{index + 1}/{count}</strong></p>
      <progress value={count ? (index + 1) / count : 0} />

      <p>offset in current section</p>
      <progress value={offset || 0} />

      <p>total progress</p>
      <progress value={progress || 0} />
    </div>
  </div>

  <div class="foreground" slot="foreground">
    
    <section>
      <h1>A Different Journey</h1>
      <h2>Migration through the lens of a single mother</h2>
      <h3>How different is the migration experience for Central Americans depending on their family type?</h3>     
    
      <div class="row">
        <div class="col-6" style="float: left; width: 50%;">
          <h2>Biparental Family</h2>
          <div class="image-container" style="float: center">
            <!-- <img src="./src/components/img/people-512.jpg" alt="hola1" style="width: 50%;" title="This is a tooltip."/> -->
            <div class="overlay"> 5 people family group (on avg.). Both parents are present.</div>
          </div>
        </div>
        <div class="col-6" style="float: right; width: 50%;">
          <h2>Single Mothers</h2>
          <div class="image-container">
            <!-- <img src="./src/components/img/people-512.jpg" alt="hola1" style="width: 50%;" title="This is a tooltip."/> -->
            <div class="overlay">4 people family group (on avg.). Only the mother is present, does not seek family reunification.</div>
          </div>
        </div>
      </div>
    </section>
    
  
    <section> <!--second section-->
    
      <div class="propertyType1-container">
        <PropertyType {index} />
      </div>

   
      <div class="propertyType2-container">
        <div class="propertyTypebp">
          <PropertyTypebp {index} />
        </div>

      <h3 class="h3" class:visible1={isVisible1}>Single mother households are more likely to rent than own</h3>

      <div class="propertyTypesm">
        <PropertyTypesm {index} />
        </div>
      </div>

    </section> <!--third section-->

    <!-- <h4>Even in single mother households, 18% of property owners are men</h4> -->

    <section>
  
    </section>

    <section>This is the forth section.
    </section>

    
    <section>

      <h3>How does migration fit into this narrative?</h3>
      <h2>The Top5 reasons for these families to migrate are...</h2> 

      <div class="chart-container">
        <Chart items={items_col2} />
      </div>
       


    </section>


    <section>
      <h2>How does migration fit into this narrative?</h2>

    </section>
    <section>This is the seventh section.</section>
    <section>This is the eight section.</section>
  
  
  </div>

</Scroller>

