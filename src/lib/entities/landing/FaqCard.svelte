<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities'

	let { faq } = $props();

	let showAnswer = $state(false);
</script>

<div class="expandable-content-flex first-expandable" on:click={(showAnswer = !showAnswer)}>
	<div class="service-expandable-left">
		<div class="expandable-content-wrap wide-content-expandable">
			<p class="text-faq-heading">{faq.q}</p>
			{#if showAnswer}
				<div class="expand-open">
					<div class="space-24"></div>
					{#each faq.a as answer}
						<p class="expanded-text mb-4">
							{answer}
						</p>
					{/each}
				</div>
			{/if}
		</div>
	</div>
	<div class="expand-icon-wrap">
		<div class="expand-line vertical"></div>
		<div class="expand-line"></div>
	</div>
</div>

<style lang="postcss">
</style>
