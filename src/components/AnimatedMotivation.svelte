<script>
	import { tweened } from 'svelte/motion'
	import * as d3 from 'd3-interpolate'
	import { circInOut as easing } from 'svelte/easing'

	export let points = []

	// animated copy of points
	let animatedPoints = tweened(points, {
		interpolate: d3.interpolateArray,
		duration: 700,
		easing
	})

	// amount of space between each point on x-axis
	const spacing = 2
	const s = 8
	const up = 1.1

	// compute dimensions
	$: dimensions = {
		width: 7,
		height: 3.5
	}

	// when points change, trigger the animation
	$: animatedPoints.set(points)

	// create an array of objects containing x, y, and height properties for each bar
	$: bars = $animatedPoints.map((y, index) => ({
		x: index * spacing,
		y: dimensions.height - y*up/10,
		height: y*up/10,
		text: y.toFixed().toString()+"%", // Add the text value for each bar
		label: index === 0 ? 'Biparental Families' : index === 1 ? 'Single Mothers' : ''// Add the text value for each bar
	}))

	$: backgroundPath = bars.reduce((path, bar) => path + `M${bar.x},${dimensions.height} L${bar.x},${bar.y} L${bar.x + spacing},${bar.y} L${bar.x + spacing},${dimensions.height} Z`, '')

</script>

<!-- generate SVG -->
<svg viewBox=" {-dimensions.width/4} 0 {dimensions.width} {dimensions.height}">


	<path d={backgroundPath} fill="url(#gradient)"/>
	<g>
		{#each bars as bar (bar.x)}
		{#if bar.x === 0}
        <rect x={bar.x} y={bar.y} width={1} height={bar.height} fill="rgba(128, 128, 128, 0.4)" stroke="rgba(128, 128, 128, 1)" stroke-width="0.02" />
		<text x={bar.x + 0.5} y={bar.y -0.1} fill=rgba(128,128,128,1) font-size="0.2" text-anchor="middle" font-family="Jost" font-weight="bold">{bar.text}</text>
		<text x={bar.x + 0.5} y={bar.y + bar.height + 0.2} fill="rgba(128, 128, 128, 1)" font-size="0.13" text-anchor="middle" font-family="Jost" >{bar.label}</text>
      	{:else}
        <rect x={bar.x} y={bar.y} width={1} height={bar.height} fill="rgba(128, 0, 128, 0.4)" stroke="rgba(128, 0, 128, 1)" stroke-width="0.02" />
		<text x={bar.x + 0.5} y={bar.y -0.1} fill=rgba(128,0,128,1) font-size="0.2" text-anchor="middle" font-family="Jost" font-weight="bold">{bar.text}</text>
		<text x={bar.x + 0.5} y={bar.y + bar.height + 0.2} fill="rgba(128, 0, 128, 1)" font-size="0.13" text-anchor="middle" font-family="Jost" >{bar.label}</text>
      	{/if}
		{/each}
	</g>
</svg>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Jost:wght@100;300;600&display=swap');
	svg {
		border-radius: 0.75rem;
		overflow: visible;
		margin-bottom: 7em;
	}


	pre {
		display: inline-block;
		background: white;
		padding: 0.5rem;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		max-width: 100%;
		margin: 0 0 0 0;
	}
</style>