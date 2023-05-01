<template>
  <div class="chart-container" style="height: {containerHeight}px;">
    <div class="chart" style="height: {containerHeight}px;">
      {#each items as item}
        <div class="chart-item">
          <div class="chart-item-label">{item.label}</div>
          <div class="chart-item-bar" style="width: {item.value}px;"></div>
        </div>
      {/each}
    </div>
  </div>
</template>

<script>
  import { onMount } from 'svelte';
  
  export let items;
  let containerHeight;
  let itemHeight = 30;
  
  onMount(() => {
    containerHeight = items.length * itemHeight;
  });
</script>

<style>
  .chart-container {
    height: 300px;
    overflow: auto;
  }
  
  .chart {
    height: 100%;
  }
  
  .chart-item {
    position: relative;
    height: 30px;
    margin-bottom: 5px;
    display: flex;
    align-items: center;
  }
  
  .chart-item-label {
    width: 100px;
    text-align: right;
    margin-right: 10px;
    font-weight: bold;
  }
  
  .chart-item-bar {
    position: absolute;
    left: 110px;
    top: 0;
    height: 30px;
    background-color: #007aff;
    transition: width 0.5s;
  }
</style>