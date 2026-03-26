<script lang="ts">
	// import { Header, Footer } from '$widgetsLanding';
	// import { navigation, categories, boardgamesList } from '$sharedData';
	import '../../../app/app.css';

	let { children } = $props();
</script>

<div class="page-wrap overflow-hidden">
	{@render children()}
</div>

<style lang="postcss">
</style>
