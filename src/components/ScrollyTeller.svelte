<script>

import Scroller from "@sveltejs/svelte-scroller";
import Title from "./Title.svelte";
import Chart from './Chart.svelte';
import PropertyType from './propertyType.svelte';
import PropertyTypesm from './propertyTypesm.svelte';
import PropertyTypebp from './propertyTypebp.svelte';
import Sexownerbp from './sexownerbp.svelte';
import Sexownersm from './sexownersm.svelte';
import StaticCircle from "./StaticCircle.svelte";
import ExpandingCircle from "./ExpandingCircles.svelte";
import ShrinkingCircle from './ShrinkingCircles.svelte';
import BasicNeedsCompare from "./BasicNeedsCompare.svelte";
import HousingCompare from "./HousingCompare.svelte";
import BusinessCompare from "./BusinessCompare.svelte";
import ConditionalText from "./ConditionalText.svelte";
import Intermediary from "./Intermediary.svelte";
import Textclick from "./textclick_511.svelte";
import IntSankey from "./intermediaries_sankey.svelte";
import Food30days from "./Food30days.svelte";
import Incomecompare from "./IncomeCompare.svelte";
import Bankaccount from "./BankAccount.svelte";
import Health6months from "./Health6months.svelte";
import { fade } from 'svelte/transition';
import AnimatedLineChart from './AnimatedMotivation.svelte';
import dataset from './dataset.js';
	
let selectedSeries = dataset[0];
	
function select(series) {
		selectedSeries = series
	};

const data1 = [
  { label: 'Item 1', value: 85 },
    { label: 'Item 2', value: 31 },
    { label: 'Item 3', value: 17 },
    { label: 'Item 4', value: 25 },
    { label: 'Item 5', value: 19 },
];

const data2 = [
  { label: 'Item 1', value: 85 },
    { label: 'Item 2', value: 33 },
    { label: 'Item 3', value: 20 },
    { label: 'Item 4', value: 23 },
    { label: 'Item 5', value: 15 },
];


let chartWidth = 500;

let container;

// controling financial plots
let selectedGraph = 'food';
let currentText = ''

function select_graph(graph) {
  selectedGraph = graph;
}

let isVisible = false;
let isVisible1 = false; //for background picture of houses (property type)
let isVisible2 = false; //for background picture of sm houses (property owner)
let isVisible3 = false; //for background picture of basic needs
let isVisible4 = false; //for background picture of housing
let isVisible5 = false; //for background picture of business
let isVisible6 = false; //for background picture of remittances

let show_label = false;

  $: {
    if (index === 0) {
      isVisible = true;
      isVisible1 = false;
      isVisible2 = false;
      isVisible3 = false;
      isVisible4 = false;
      isVisible5 = false;
      isVisible6 = false;
      show_label = false;
    } else if (index === 1) {
      isVisible = false;
      isVisible1 = true;
      isVisible2 = false;
      isVisible3 = false;
      isVisible4 = false;
      isVisible5 = false;
      isVisible6 = false;
      show_label = true;
    } else if (index === 2) {
      isVisible = false;
      isVisible1 = false;
      isVisible2 = true;
      isVisible3 = false;
      isVisible4 = false;
      isVisible5 = false;
      isVisible6 = false;
      show_label = true;
    } else if (index === 3) {
      isVisible = false;
      isVisible1 = false;
      isVisible2 = false;
      isVisible3 = true;
      isVisible4 = false;
      isVisible5 = false;
      isVisible6 = false;
      show_label = true;
    } else if (index === 4) {
      isVisible = false;
      isVisible1 = false;
      isVisible2 = false;
      isVisible3 = false;
      isVisible4 = true;
      isVisible5 = false;
      isVisible6 = false;
      show_label = true;
    } else if (index === 5) {
      isVisible = false;
      isVisible1 = false;
      isVisible2 = false;
      isVisible3 = false;
      isVisible4 = false;
      isVisible5 = true;
      isVisible6 = false;
      show_label = true;
    } else if (index === 6) {
      isVisible = false;
      isVisible1 = false;
      isVisible2 = false;
      isVisible3 = false;
      isVisible4 = false;
      isVisible5 = false;
      isVisible6 = true;
      show_label = true;
    } else if (index === 7) {
      isVisible = false;
      isVisible1 = false;
      isVisible2 = false;
      isVisible3 = false;
      isVisible4 = false;
      isVisible5 = false;
      isVisible6 = false;
      show_label = false;
    } else {
      isVisible = false;
      isVisible1 = false;
      isVisible2 = false;
      isVisible3 = false;
      isVisible4 = false;
      isVisible5 = false;
      isVisible6 = false;
      show_label = false;
    }
  }


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

</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100;0,300;0,600;1,300&display=swap');
  
  .title_section {
    height: 100vh;
    width: 100%;
    text-align: center ;
    justify-content: center;
    max-width: 100%; /* adjust at will */
    position: relative; 
    background-image: none;
  }

  .title_section::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.2;
    z-index: -1;
  }


  
  .background {
    width: 100%;
    height: 100%;
    position: relative;
    justify-content: center;
    padding-top: 50px;
    left: 0;
    /*outline: purple 3px;*/
    
  }

  .foreground {
    width: 70%;
    height: 100%;
    position: relative; 
    justify-content: center;
    background-color:white;   
    text-align: center;
    left: 30%;
    align-items: center;
    z-index: 1;
  }

  .livingcond_labels {
  position: absolute;
  top: 3%;
  left: 2%;
  background-color: gray;
  padding: 5px;
  font-family: 'Jost', sans-serif;
  font-weight: 600;
  color: white;
  }

  .livingcond_labels.highlighted {
    background-color: rgba(128,0,128, 1);
  }

  .rem_labels {
  position: absolute;
  top: 3%;
  left: 12%;
  background-color: gray;
  padding: 5px;
  font-family: 'Jost', sans-serif;
  font-weight: 600;
  color: white;
  }

  .rem_labels.highlighted {
    background-color: rgba(128,0,128, 1);
  }

  .motiv_labels {
  position: absolute;
  top: 3%;
  left: 18%;
  background-color: gray;
  padding: 5px;
  font-family: 'Jost', sans-serif;
  font-weight: 600;
  color: white;
  }

  .motiv_labels.highlighted {
    background-color: rgba(128,0,128, 1);
  }

  .prep_labels {
  position: absolute;
  top: 11%;
  left: 2%;
  background-color: gray;
  padding: 5px;
  font-family: 'Jost', sans-serif;
  font-weight: 600;
  color: white;
  }

  .prep_labels.highlighted {
    background-color: rgba(128,0,128, 1);
  }

  .costs_labels {
  position: absolute;
  top: 11%;
  left: 9.5%;
  background-color: gray;
  padding: 5px;
  font-family: 'Jost', sans-serif;
  font-weight: 600;
  color: white;
  }

  .costs_labels.highlighted {
    background-color: rgba(128,0,128, 1);
  }

  .int_labels {
  position: absolute;
  top: 19%;
  left: 2%;
  background-color: gray;
  padding: 5px;
  font-family: 'Jost', sans-serif;
  font-weight: 600;
  color: white;
  }

  .int_labels.highlighted {
    background-color: rgba(128,0,128, 1);
  }

  .takeaway_box {
  position: absolute;
  width: 25%;
  top: 70%;
  left: 2%;
  background-color: white;
  padding: 5px;
  font-family: 'Jost', sans-serif;
  font-weight: 300;
  color: black;
  visibility: hidden;
  }

  .takeaway_box.showing {
    visibility: visible;
  }

  .textclick_box {
  position: absolute;
  width: 25%;
  top: 40%;
  left: 2%;
  background-color: white;
  padding: 5px;
  font-family: 'Jost', sans-serif;
  font-weight: 300;
  color: black;
  visibility: hidden;
  }

  .textclick_box.showing {
    visibility: visible;
  }


  .foreground::before,
  .foreground::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 10px;
  }

  .foreground::before {
  left: 0;
  background-color: gray;
  }

  .foreground::after {
  right: 0;
  background-color: rgba(128,0,128, 1);
  }

  .bp_label {
  position: fixed;
  top: 2%;
  left: 30.9%;
  background-color: gray;
  padding: 5px;
  font-family: 'Jost', sans-serif;
  font-weight: 600;
  color: white;
  z-index: 9999;
  writing-mode: vertical-rl; /* Set the text orientation to vertical */
  transform: rotate(180deg);
  visibility: hidden;
  transition: opacity 2s; 
  opacity: 0;
  }

  .bp_label.visible1 {
    visibility: visible;
    opacity: 1;
  }

  .sm_label {
  position: fixed;
  top: 2%;
  right: 1%;
  background-color: rgba(128,0,128, 1);
  padding: 5px;
  font-family: 'Jost', sans-serif;
  font-weight: 600;
  color: white;
  z-index: 9999;
  writing-mode: vertical-rl; /* Set the text orientation to vertical */
  transform: rotate(180deg);
  visibility: hidden;
  transition: opacity 2s; 
  opacity: 0; 
  }

  .sm_label.visible1 {
    visibility: visible;
    opacity: 1;
  }


  section {
    /*height: 70vh; */
    text-align: center ;
    justify-content: center;
    max-width: 80%; /* adjust at will */
    padding: 1em;
    padding-bottom: 1em;
    left: 10%;
    position: relative; 
  }

  h1 {
        text-align: center;
        font-size: 8.5em;
        margin-top: 1em;
        margin-bottom: 0em;
        font-family: 'Jost', sans-serif;
        font-weight: 600;
        color: purple;
  }

  h2 {
        text-align: center;
        font-size: 2em;
        color: black;
        margin-top: 0.1em;
        margin-bottom: 0.3em;
        font-family: 'Jost', sans-serif;
        font-weight: 300;
       
                
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
        font-family: 'Jost', sans-serif;
        font-weight: 300;    
  }

  h4 {
        text-align: center;
        font-size: 1em;
        color: gray;
        margin-top: 3em;
        margin-bottom: 1em; 
        font-family: 'Jost', sans-serif;
        font-weight: 300;       
  }

  h3.visible1 {
    opacity: 1;
    visibility: visible;
  }

  h4 {
    text-align: center;
    font-size: 1.5em;
    color: black;
  }

  h5 {
    text-align: center;
    font-size: 1.5em;
    color: gray;
    font-style: italic;
  }

  p {
        text-align: center;
        font-size: 1em;
        color: gray;
        margin-top: 0em;
        margin-bottom: 3em; 
        font-family: 'Jost', sans-serif;
        font-weight: 300;
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


.image {
    width: 100%;
    height: 100vh; /* check problem when setting width */
    position: absolute;
    opacity: 0.1;
    visibility: hidden;
    transition: opacity 2s; /*, visibility 2s; */
    top:0em;
  }


  
.image.visible1 {
    opacity: 0.2;
    visibility: visible;
    /* background-image: url('./housing_est.jpeg'); */
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    position: absolute;
  }
  
.image.visible2 {
    opacity: 0.2;
    visibility: visible;
    /* background-image: url('./housing_sm.jpeg'); */
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }

  .image.visible7 {
    opacity: 0.2;
    visibility: visible;
    /* background-image: url('./budgetspending.png'); */
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }

  .image.visible8 {
    opacity: 0.2;
    visibility: visible;
    /* background-image: url('./caravan.png'); */
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }

  .image.visible3 {
    opacity: 0.2;
    visibility: visible;
    /* background-image: url('./Food.png'); */
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }

  .image.visible4 {
    opacity: 0.2;
    visibility: visible;
    /* background-image: url('./Housing.jpeg'); */
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }

  .image.visible5 {
    opacity: 0.2;
    visibility: visible;
    /* background-image: url('./Business.jpeg'); */
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }

.sexowners-container {
  display: flex;
  position: relative;
  justify-content: space-between;
  width: 80%;
  margin-top: 0px;
  left: 5%;
}

.Sexownerbp {
  width: 500px;
  height: 100px;
  background-color: var(--color-bg);
  box-shadow: 0 0 4px var(--color-shadow);
  padding: 50px;
  left: 0%;
  top: 0%;
  margin-top: 0px;
  margin-bottom: 300px;
  position: relative;
}

.Sexownersm {
  width: 500px;
  height: 100px;
  background-color: var(--color-bg);
  box-shadow: 0 0 4px var(--color-shadow);
  padding: 50px;
  left: 0%;
  top: 0%;
  margin-bottom: 300px;
  position: relative;
}

.Circles-container-equalsize{
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 66%;
  transform: translate(-50%, -50%);
  width: 100%;
  /* margin-top: 20px;
  margin-right: 0px;
  margin-left: 450px;
  gap: 600px;  */
  gap: 610px;
}

.Circles-container-animated {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 66%;
  transform: translate(-50%, -50%);
  width: 100%;
  /* margin-top: 20px; */
  gap: 610px; /* Add this line to create space between the circles */
}
.EmptyContainer{
  height: 110vh;
  position: relative;
}

.text-columns {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 80px;
}
.text-columns2 {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 30px;
}


	
	nav {
		display: flex;
		gap: 1rem;
    justify-content: space-between;
	}
	
	nav button {
		border: transparent;
		background: transparent;
		color: black;
		border-radius: 2px;
		cursor: pointer;
		padding: 6px 10px;
	}
	
	nav button.selected {
		background: rgba(128,0,128, 1);
		color: #fff;
	}
	
	
	

</style>

<div class = "title_section" bind:clientHeight={height}> 
 
<Title />

</div>



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


    <div class="livingcond_labels" class:highlighted={isVisible1} > Living conditions </div>
    <div class="rem_labels" class:highlighted={isVisible2}> Finances </div>
    <div class="motiv_labels" class:highlighted={isVisible3}> Motivations </div>
    <div class="prep_labels" class:highlighted={isVisible4} > Preparation </div>
    <div class="costs_labels" class:highlighted={isVisible5} > Cost of Migration </div>
    <div class="int_labels" class:highlighted={isVisible6} > Intermediaries </div>


    <div class="takeaway_box" class:showing={isVisible1} > 
      <h4> <Textclick {index} /> </h4>
    </div>

    <div class="takeaway_box" class:showing={isVisible2} > 
      <h4>TWO - Another important <strong>take away</strong>, but for this section </h4>
    </div>

    <div class="takeaway_box" class:showing={isVisible3} > 
      <h4>The motivations behind migration are very similar for biparental families and single mothers, but differences appear in <strong> how both groups prepare.</strong> </h4>
    </div>

    <div class="takeaway_box" class:showing={isVisible4} > 
      {#if selectedSeries}
      <h4>{selectedSeries.message}</h4>
      {/if}
    </div>

    <div class="takeaway_box" class:showing={isVisible5} > 
      <h4>FIVE - Same <strong>stuff</strong>, like yeah </h4>
    </div>

    <div class="takeaway_box" class:showing={isVisible6} > 
      <h4>SIX - Same <strong>stuff</strong>, like yeah </h4>
    </div>




  

    <div class="image" class:visible1={isVisible1}> <!-- background image for section 1-->
      <img src="./housing_est.jpeg" alt="housing" style="width: 100%; height: 100%"/>
    </div>

    <div class="image" class:visible2={isVisible2}> <!-- background image for section 2-->
      <img src="./housing_sm.jpeg" alt="housing_sm" style="width: 100%; height: 100vh"/>
    </div>

    <div class="image" class:visible3={isVisible3}> <!-- background image for section 3-->
      <img src="./Food.png" alt="food" style="width: 100%; height: 100vh"/>
    </div>

    <div class="image" class:visible4={isVisible4}> <!-- background image for section 4-->
      <img src="./housing_sm.jpeg" alt="caravan" style="width: 100%; height: 100vh"/>
    </div>

    <div class="image" class:visible5={isVisible5}> <!-- background image for section 5-->
      <img src="./Business.jpeg" alt="business" style="width: 100%; height: 100vh"/>
    </div>

    <div class="image" class:visible7={isVisible6}> <!-- background image for section 7-->
      <img src="./budgetspending.png" alt="budget" style="width: 100%; height: 100vh"/>
    </div>


    <div class="sexowners-container">
      <div class="Sexownerbp">
        
      </div>
  
    <div class="text">
      
    </div>
  
    <div class="Sexownersm">
    
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

    <div class="bp_label" class:visible1={show_label}> Biparental Families </div>
    <div class="sm_label" class:visible1={show_label}> Single Mothers </div>

    
    <section> </section> <!--zero section-->
    
    <section> <!--first section-->

      <h4>Single mother families are less likely to own their home than biparental families. Of families who own their homes, let's look at who owns the property across both family types.</h4>
      <h4>Are women less likely to be property owners?</h4>
      <p>Click to see the proportion of property ownership by sex</p>
      <div class="sexowners-container">
        <div class="Sexownerbp">
          <Sexownerbp {index} />
        </div>
    
      <div class="Sexownersm">
        <Sexownersm {index} />
      </div>
      </div>

    </section> 

    <!-- <h4>Even in single mother households, 18% of property owners are men</h4> -->


    <section> <!-- second section -->
      <h2>Why is that? Are they financially different?</h2>
      <p>Click on each category to see families' financial situations</p> 

      <nav>
        <button on:click|preventDefault="{() => select_graph('food')}" class:selected={selectedGraph === 'food'}  style="font-family: 'Jost', sans-serif; font-weight: 300; font-size: 1em; align-content: center;">Spending on Food</button>
        <button on:click|preventDefault="{() => select_graph('health')}" class:selected={selectedGraph === 'health'}  style="font-family: 'Jost', sans-serif; font-weight: 300; font-size: 1em; align-content: center;">Spending on Health</button>
        <button on:click|preventDefault="{() => select_graph('bank')}" class:selected={selectedGraph === 'bank'}  style="font-family: 'Jost', sans-serif; font-weight: 300; font-size: 1em; align-content: center;">Bank Account Onwership</button>
        <button on:click|preventDefault="{() => select_graph('income')}" class:selected={selectedGraph === 'income'}  style="font-family: 'Jost', sans-serif; font-weight: 300; font-size: 1em; align-content: center;">Income Comparison</button>
      </nav>


      {#if selectedGraph === 'food'}
        <div transition:fade>
          <Food30days />

        </div>
      {/if}

      {#if selectedGraph === 'health'}
        <div transition:fade>
          <Health6months />
        </div>
      {/if}

      {#if selectedGraph === 'bank'}
        <div transition:fade>
          <Bankaccount />
        </div>
      {/if}
      
      {#if selectedGraph === 'income'}
        <div transition:fade>
          <Incomecompare />
        </div>
      {/if}

    </section>

    <section> <!-- third section-->
      <Chart data1={data1} data2={data2} progress={progress*1.3}  {index}/>
    
    
    </section>

    <section> <!-- forth section-->
      <header>
        <h2>And the preparation begins by...</h2> 
        <p>Click on each category to find out</p> 
        <nav>
          {#each dataset as series}
            <button on:click|preventDefault={() => select(series)} class:selected={series == selectedSeries} style="font-family: 'Jost', sans-serif; font-weight: 300; font-size: 1em; align-content: center;">
              {series.label}
            </button>
          {/each}
        </nav>
      </header>

      <main>
        <AnimatedLineChart points={selectedSeries.points}/>
      </main>


    </section>

    <section> <!-- fifth section-->
        <div class="EmptyContainer">
        <div class="Circles-container-equalsize">
          {#if progress >= 0.71 && progress <= 0.76}
            <StaticCircle circleColor="rgba(128,128,128, 0.5)" circleRadius="50" text="" />
          {/if}
          {#if progress >= 0.71 && progress <= 0.76}
          <StaticCircle circleColor="rgba(128, 0, 128, 0.5)" circleRadius="50" text="" />
          {/if}
        </div>
    
        <div class="Circles-container-animated">
          <div>
            {#if progress && progress >= 0.76 && progress <= 0.87}
              <ShrinkingCircle progress={progress - 0.76} initialRadius={50} circleColor="rgba(128,128,128, 0.5)" />
            {/if}
          </div>
          <div>
            {#if progress && progress >= 0.76 && progress <= 0.87}
              <ExpandingCircle progress={progress - 0.76} initialRadius={50} circleColor="rgba(128, 0, 128, 0.5)" />
            {/if}
          </div>
        </div>

        <div class="Circles-container-equalsize">
          {#if progress >= 0.87 && progress <= 0.90}
            <StaticCircle circleColor="rgba(128,128,128, 0.5)" circleRadius="34" text="" />
          {/if}
          {#if progress >= 0.87 && progress <= 0.90}
          <StaticCircle circleColor="rgba(128, 0, 128, 0.5)" circleRadius="77" text="" />
          {/if}
        </div>

      <h2>Cost of migration versus awareness </h2>
      <h2>For those who are aware of the migration cost beforehand, </h2>
      <div class="text-columns">
        <ConditionalText progress="{progress}" minProgress="0.71" maxProgress="0.98" textColor='black' text="The average cost is $2894" />
        <ConditionalText progress="{progress}" minProgress="0.71" maxProgress="0.98" textColor='black' fontSize='22px' containerWidth="50%" text="Biparental hosueholds and sinlge mother households spend similar amount of money for migration" />
        <ConditionalText progress="{progress}" minProgress="0.71" maxProgress="0.98" textColor='purple' text="The average cost is $3244" />
      </div>

      <div class="text-columns2">
      <ConditionalText progress="{progress}" minProgress="0.75" maxProgress="0.98" textColor='black' text=" " />
      <ConditionalText progress="{progress}" minProgress="0.75" maxProgress="0.98" textColor='black' fontSize='22px' containerWidth="50%" text="What if they are unware of the cost?" />
      <ConditionalText progress="{progress}" minProgress="0.75" maxProgress="0.98" textColor='purple' text=" " />
      </div>

      <div class="text-columns2">
        <ConditionalText progress="{progress}" minProgress="0.79" maxProgress="0.98" textColor='black' text=" " />
        <ConditionalText progress="{progress}" minProgress="0.79" maxProgress="0.98" textColor='black' fontSize='22px' containerWidth="50%" text="Discrepancy emerges" />
        <ConditionalText progress="{progress}" minProgress="0.79" maxProgress="0.98" textColor='purple' text=" " />
      </div>

      <div class="text-columns">
        <ConditionalText progress="{progress}" minProgress="0.84" maxProgress="0.98" textColor='black' text="The average cost decreases to $2700" />
        <ConditionalText progress="{progress}" minProgress="0.84" maxProgress="0.98" textColor='black' fontSize='22px' containerWidth="50%" text="Single mothers spend more" />
        <ConditionalText progress="{progress}" minProgress="0.84" maxProgress="0.98" textColor='purple' text="The average cost increases to $8260" />
      </div>
    </div>
      
    </section>


    <section> <!-- sixth section-->
      <h2>Cost of Knowledge: Single mothers spend more on intemediaries</h2>
      <IntSankey />
    </section>

    <section> </section> <!--end section-->
  
  </div>

</Scroller>
<div class = "title_section" bind:clientHeight={height}> 
 
<Title />
  
</div>

