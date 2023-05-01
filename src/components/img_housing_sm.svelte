<style>

.image {
    width: 100%;
    height: 100vh; /* check problem when setting width */
    position: absolute;
    opacity: 1;
    visibility: hidden;
    transition: opacity 2s, visibility 2s;
  }
  
.image.visible {
    opacity: 0.2;
    visibility: visible;
    background-image: url('./src/components/img/mujerencampo.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }

</style>

<script>
  
  let isVisible = false;

  $: if (index === 3) {
    isVisible = true;
  } else {
    isVisible = false;
  }

</script>

<div class="image" class:visible={isVisible}>
</div>