<script>
  export let progress = 0;
  export let initialRadius = 50;
  export let finalRadius = 350;
  export let circleColor = "purple";
</script>

<!-- <style>
  .circle-container {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .circle {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style> -->

<!-- 
<div class="circle-container">
  <div
    class="circle"
    style="
      width: {initialRadius * 2 + progress * (finalRadius - initialRadius) * 2}px;
      height: {initialRadius * 2 + progress * (finalRadius - initialRadius) * 2}px;
      background-color: {circleColor};
      border-radius: 50%;
    "
  ></div>
</div> -->
<div 
    class="circle-container"
    style="width: {finalRadius * 2}px; height: {finalRadius * 2}px;"
>
    <div
        class="circle"
        style="
            width: {initialRadius * 2 + progress * (finalRadius - initialRadius) * 2}px;
            height: {initialRadius * 2 + progress * (finalRadius - initialRadius) * 2}px;
            background-color: {circleColor};
            border-radius: 50%;
        "
    ></div>
</div>

<style>
    .circle-container {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }

    .circle {
        position: absolute;
    }
</style>
