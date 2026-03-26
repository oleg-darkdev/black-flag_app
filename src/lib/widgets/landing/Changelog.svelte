<script lang="ts">
	import { changelog } from '$sharedData';
	// import {  } from '$widgets';
	import { ChangelogCard } from '$entitiesLanding';

	let { showFullList } = $state(false);
</script>

<section class="section hero-templatate">
	<div class="w-layout-blockcontainer main-container w-container">
		<div class="title-wrap-template">
			<h1 class="mega-h1">Changelog</h1>
			<div class="limit-subtitle-template">
				<div class="big-text">Documentation of boardgame changes</div>
			</div>
			<div class="w-layout-blockcontainer main-container w-container">
				{#each showFullList ? changelog : changelog.slice(0, 2) as log}
					<ChangelogCard {log} />
				{/each}
			</div>

			<div class="flex-cta-center mg-top-80">
				<button on:click={(showFullList = !showFullList)} target="_blank" class="transition-transform duration-200 cta-white w-button"
					>{showFullList ? 'Close' : 'Open'} the Update Chest</button
				>
			</div>
		</div>
	</div>
</section>

<!-- <section class="section template-section">
	<div class="w-layout-blockcontainer main-container w-container">
		{#each changelog as log}
			<div class="tile-changelog">
				<div>08.09.2023</div>
				<h2>1.1 Template release</h2>
				<p>Initial Clyde Template release.</p>
			</div>
		{/each}
	</div>
</section> -->

<style lang="postcss">
</style>
