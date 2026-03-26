<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities'

	let { log } = $props();
</script>

<div class="tile-changelog transition-transform duration-200">
	<div>{log.date}</div>
	<h2><span>{log.version}</span> {log.title}</h2>
	{#each log.desc as desc}
		<p>{desc}</p>
	{/each}
</div>

<style lang="postcss">
</style>
