<script lang="ts">
	import { stepsToPlay } from '$sharedData';
	// import {  } from '$widgets';
	import { StepCard } from '$entitiesLanding';
</script>

<section id="prind-and-play" class="section hero-templatate">
	<div class="w-layout-blockcontainer main-container w-container">
		<div class="center-heading">
			<h2 class="no-margins">Easy peasy - to start the game</h2>
		</div>
		<div class="master-process-circles">
			{#each stepsToPlay as step}
				<StepCard {step} />
			{/each}
		</div>
		<!-- <div class="flex-cta-center mg-top-80">
			<a href="/" class="cta-white w-button">Download Print And Play version</a>
		</div> -->
	</div>
</section>

<style lang="postcss">
</style>
