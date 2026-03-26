<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	import { DataListCard } from '$entitiesLanding';

	const dataTypes = ['books', 'countries', 'activists', 'collectives', 'actions'];

	let selectedData = [
		{
			img: '/images/articles/article-queer.svg',
			title: 'Lorem Ipsum jest tekstem.',
			shortDesc:
				'Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym.',
			sourceLink: {
				title: 'lORE',
				link: '/'
			},
			lang: 'lore'
		}
	];
</script>

<section class="section">
	<div class="w-layout-blockcontainer main-container w-container">
		<div class="divider-sales"></div>
		<div class="center-heading">
			<h2 class="no-margins">Lorem ipsum dolor sit amet</h2>
		</div>

		<div class="mx-auto flex w-full max-w-4xl flex-row justify-between">
			{#each dataTypes as title}
				<button on:click={console.log(click)} target="_blank" class="cta-white w-button"
					>{title}</button
				>
			{/each}
		</div>
		<div class="grid-thirds-all-features grid">
			{#each selectedData as data}
				<DataListCard {data} />
			{/each}
		</div>
		<!-- <div class="flex-cta-center mg-top-80">
			<button on:click={console.log(click)} target="_blank" class="cta-white w-button">Lorem Ipsum</button>
		</div> -->
	</div>
</section>

<style lang="postcss">
</style>
