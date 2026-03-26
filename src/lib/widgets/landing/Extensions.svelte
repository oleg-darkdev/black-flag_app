<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities'

	let { extensions } = $props();
</script>

<section id='expansions' class="section openings-section">
	<div class="w-layout-blockcontainer container-medium w-container">
		<div
			style=""
			class="left-heading mg-bottom-64 center-tablet"
		>
			<h2 class="no-margins">Explore expansions, join the movement</h2>
		</div>
		<div class="master-openings">
			{#each extensions as { title, desc, link, linkText }}
				<div class="tile-border opening-tile">
					<div class="left-opening">
						<h3 class="no-margins">{title}</h3>
						<div>{desc}</div>
					</div>
					<a href="{link}" target="_blank" class="cta-main w-button">explore: {linkText}</a>
				</div>
			{/each}
		</div>
	</div>
</section>

<style lang="postcss">
</style>
