<script lang="ts">
	import { features } from '$sharedData';
	// import {  } from '$widgets';
	import { FeatureCard } from '$entitiesLanding';
</script>

<section class="section values-about-section">
	<div class="w-layout-blockcontainer main-container w-container">
		<div class="center-heading mg-bottom-80">
			<h2 class="no-margins">There’s some values deep rooted in our DNA</h2>
		</div>
		<div class="grid-value-thirds grid">
			{#each features as feature}
				<FeatureCard {feature} />
			{/each}
		</div>
	</div>
</section>

<style lang="postcss">
</style>
