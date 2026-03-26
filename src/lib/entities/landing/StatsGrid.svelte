<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities'

	let { stats } = $props();
</script>

<div class="grid-stats grid">
	{#each stats as { title, count }}
		<div style="" class="wrap-stat">
			<div class="text-stat">{count}+</div>
			<div>{title}</div>
		</div>
		<div class="divider-stats"></div>
	{/each}
	<!-- <div style="" class="wrap-stat">
					<div class="text-stat">2012</div>
					<div>Lorem Ipsum jest</div>
				</div>
				<div class="divider-stats"></div>
				<div style="" class="wrap-stat">
					<div class="text-stat">2012</div>
					<div>Lorem Ipsum jest</div>
				</div>
				<div class="divider-stats"></div>
				<div style="" class="wrap-stat">
					<div class="text-stat">2012</div>
					<div>Lorem Ipsum jest</div>
				</div> -->
	<!-- <div class="divider-stats"></div> -->
</div>

<style lang="postcss">
</style>
