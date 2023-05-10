<script>
  export let data1;
  export let data2;
  export let data3;
  export let data4;
  export let progress = 0;
</script>

<br>
<br>
<h3>How does migration fit into this narrative?</h3>
<h2>The Top5 reasons for these families to migrate are...</h2> 
<br>
<br>


<div class="row">
  <div class="col-md-5" style="float: left; width: 40%; justify-content: flex-end;">
    <div class="chart_bp">
      {#each data1 as item}
        <div class="bar-container" style="width: {item.value + 50}px; justify-content: flex-end;">
          <div class="bar_bp" style="width: {progress *item.value}px; height: 50px;"></div>
          <div class="label_bp">{item.value}%</div>
        </div>
      {/each}
    </div>
  </div>

  <div class="col-md-2" style="display: inline-block; width: 20%;">
    <div class="item-container" style="justify-content: center;">
      <p>To look for a<br><strong>better job</strong> </p>
    </div>
    <div class="item-container" style="justify-content: center;">
      <p>To <strong>find</strong> a job</p>
    </div>
    <div class="item-container" style="justify-content: center;">
      <p>To get money to <br> <strong>afford food</strong> </p>
    </div>
    <div class="item-container" style="justify-content: center;">
      <p>To get money for <br> <strong> other basic needs</strong></p>
    </div>
    <div class="item-container" style="justify-content: center;">
      <p>To send <strong>remittances</strong> back home</p>
    </div>
  </div>


  <div class="col-md-5" style="float: right; width: 40%;">
    <div class="chart_sm">
      {#each data2 as item}
        <div class="bar-container" style="width: {item.value + 50}px">
          <div class="bar_sm" style="width: {progress*item.value}px; height: 50px;"></div>
          <div class="label_sm">{item.value}%</div>
        </div>
      {/each}
    </div>
  </div>
</div>





<style>

@import url('https://fonts.googleapis.com/css2?family=Jost:wght@100;300;600&display=swap');

  .chart_sm {
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    white-space: nowrap;
    position: relative;
    
  }

  .chart_bp {
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    white-space: nowrap;
    align-items: end;
    
  }

  .bar_sm {
    height: 100%;
    background-color: rgba(128,0,128,0.4);
    border: 2px solid rgba(128,0,128, 1);
    margin-right: 10px;
    margin-bottom: 40px;
    position: relative;
  }

  .bar_bp {
    height: 100%;
    background-color: rgba(128, 128, 128,0.4);
    border: 2px solid rgba(128, 128, 128, 1);
    margin-left: 10px;
    margin-right: 0px;
    margin-bottom: 40px;
    position: relative;
    align-items: flex-end;
  
  }

  .label_sm {
    position: absolute;
    left: calc(70%);
    top: 25%;
    transform: translateY(-50%);
    color: purple;
    font-family: 'Jost', sans-serif;
    font-weight: 600; 
  }

  .label_bp {
    position: absolute;
    right: calc(70%);
    top: 25%;
    transform: translateY(-50%);
    color: gray;
    font-family: 'Jost', sans-serif;
    font-weight: 600; 
  }

  .bar-container {
    display: flex;
    align-items: center;
    position: relative;
  }

  .item-container {
    display: flex;
    align-items: center;
    position: relative;
    margin-bottom: 40px;
    border: 2px solid rgba(128, 128, 128, 0);
    height: 50px; 
    
  }


  h2 {
        text-align: center;
        font-size: 2em;
        color: purple;
        margin-top: 0.1em;
        margin-bottom: 0.3em; 
        font-family: 'Jost', sans-serif;
        font-weight: 600;        
  }

  h3 {
        text-align: center;
        font-size: 1.5em;
        color: gray;
        margin-top: 1em;
        margin-bottom: 0.1em;  
        font-family: 'Jost', sans-serif;
        font-weight: 300;      
  }

  p {
        text-align: center;
        font-size: 1em;
        color: black;
        margin-top: 0em;
        margin-bottom: 0em; 
        font-family: 'Jost', sans-serif;
        font-weight: 300; 
        
  
  }
</style>