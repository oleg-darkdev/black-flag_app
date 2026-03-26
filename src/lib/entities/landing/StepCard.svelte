<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities'

	let { step } = $props();
</script>

<div class="single-process-circle">
	<div class="big-process-circle">
		<div>{step.id}</div>
	</div>
	<div class="flex flex-col">
		<div class="right-process-circle mb-10">
			<h3 class="no-margins">{step.title}</h3>
			<div>{step.desc}</div>
		</div>
		{#if step.btn.length > 0}
			{#each step.btn as btn}
				<div class="mx-auto">
					<a href={btn.link} class="cta-white w-button">{btn.title}</a>
				</div>
			{/each}
		{/if}
	</div>
</div>

<style lang="postcss">
</style>
