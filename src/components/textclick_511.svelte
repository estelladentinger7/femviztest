<!-- App.svelte -->
<script>
    import { onMount } from 'svelte';
    import { select } from 'd3';

    export let index;
  
    let container;
    
    onMount(() => {
 
    window.addEventListener('click', () => {
        const text = select('.legend-text');
        text.text('test');
    });
  
      const group = select(container)
        .style('font-size', '30px')
        .attr('text-anchor', 'left')
        .style('fill', 'gray');
        //.style('font-style', 'italic')
        //.style('font-weight', 'bold');

        
        let count = 0;
        let text = group.append('text')
            .attr('x', 1)
            .attr('y', 5)
            .html('<b>Click through</b> to see the proportion of property ownership by sex');

        window.addEventListener('click', () => {
        count++;
        if (count === 1) {
            text.html('Even in single mother households, 18% of property owners are men.\n<b>Click again</b>');
        } else if (count === 2) {
            text.html('Women share property ownership in 10% of biparental households compared to 2% in single mother households.\n<b>Click again</b>');
        } else if (count === 3) {
            text.html('59% of properties in biparental households are owned by men.\n<b>Click again</b>');
        } else if (count === 4) {
            text.html('Only 31% of properties in biparental households are owned by women.\n<b>Click again</b>');
            count = 0;
        }
        });
  
    });
  
    let isVisible = false;
  
    $: if (index === 1) {
      isVisible = true;
    } else {
      isVisible = false;
    }

  
  </script>
  
  <div class="sex" class:visible={isVisible} bind:this={container}>

  
  </div>
  
  
  <style>
    .sex {
      opacity: 0;
      visibility: hidden;
    }
  
    .sex.visible {
      opacity: 1;
      visibility: visible;
    }
  
  </style>