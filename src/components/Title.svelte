<script>

  //import backgroundImage from 'img/mujerencampo.png';
  export let index;

  let container;

  let isVisible = false;

$: if (index === 1) {
  isVisible = true;
} else {
  isVisible = false;
}
</script>


<div class="image" class:visible={isVisible} />

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
    opacity: 0.7;
    visibility: visible;
    background-image: url({backgroundImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
</style>





