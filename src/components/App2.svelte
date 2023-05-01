<script>
    // Add Javascript here
    import House from '../components/House.svelte';
    import Sexownerbp from '../components/sexownerbp.svelte';
    import Sexownersm from '../components/sexownersm.svelte';
    import PropertyTypebp from '../components/propertyTypebp.svelte'
    import PropertyTypesm from '../components/propertyTypesm.svelte'
  </script>
  
  <main>
    <!-- Add HTML elements here -->
    <h1>Before the trip...</h1>

    <h2>How do the realities of these types of families compare to each other?</h2>
  
    <div class="propertytype">
      <House />
    </div>

    <!--square for property type-->
    <div class="propertyType-container">
      <div class="propertyTypebp">
        <PropertyTypebp />
      </div>

    <h3>Single mother households are more likely to rent than own</h3>

      <div class="propertyTypesm">
        <PropertyTypesm />
      </div>
    </div>

    <!--dot grid for property ownership sex-->
    <div class="sexowners-container">
      <div class="Sexownerbp">
        <Sexownerbp />
      </div>

    <h3>Even in single mother households, 18% of property owners are men</h3>

      <div class="Sexownersm">
        <Sexownersm />
      </div>
    </div>

  </main>
  
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;700&display=swap');
  
    :root {
        --color-bg: #f7f7f7 /* Add a background color for the to-do app! */;
        --color-outline: #c2c2c2 /* Add an outline color for the to-do app! */;
        --color-text: #222222 /* Add a color for the text! */;
    }
  
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
  
    main {
        height: 100%;
        display: grid;
        place-content: center;
        text-align: center;
        font-family: 'Nunito', sans_serif;
        font-weight: 300;
        line-height: 2;
        font-size: 24px;
        color: var(--color-text);
    }
  
    h1 {
        font-size: 40px;
        font-weight: 600;
        line-height: 2;
    }

    h2 {
        font-size: 30px;
        font-weight: 300;
        line-height: 1.3;
    }

    h3 {
        font-size: 20px;
        font-weight: 300;
        line-height: 1.3;
    }
  
    .propertyType-container{
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-top: 20px;
    }

    .propertyTypebp {
        width: 300px;
        background-color: var(--color-bg);
        box-shadow: 0 0 4px var(--color-shadow);
        padding: 20px;
        margin-top: 20px;
    }

    .propertyTypesm {
        width: 300px;
        background-color: var(--color-bg);
        box-shadow: 0 0 4px var(--color-shadow);
        padding: 20px;
        margin-top: 20px;
    }

    .sexowners-container {
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-top: 20px;
    }

    .Sexownerbp {
        width: 400px;
        height: 200px;
        background-color: var(--color-bg);
        box-shadow: 0 0 4px var(--color-shadow);
        padding: 20px;
        margin-top: 0px;
    }

    .Sexownersm {
        width: 400px;
        height: 200px;
        background-color: var(--color-bg);
        box-shadow: 0 0 4px var(--color-shadow);
        padding: 20px;
        margin-top: 0px;
    }
  </style>
  
