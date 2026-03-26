<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	import { ArticleCard } from '$entitiesLanding';

	let { articles } = $props();
</script>

<section class="section">
	<div class="w-layout-blockcontainer main-container w-container">
		<div class="center-heading mg-bottom-80">
			<h2 class="no-margins">Our recent articles</h2>
		</div>
		<div class="w-dyn-list">
			<div role="list" class="grid-projects-halves w-dyn-items">
				{#each articles.slice(0, 4) as article}
					<ArticleCard {article} />
				{/each}
			</div>
		</div>
		<div class="flex-cta-center mg-top-80">
		<!-- articles -->
			<a href="/" target="_blank" class="cta-main w-button">See all articles ({articles.length})</a>
		</div>
	</div>
</section>

<style lang="postcss">
</style>
