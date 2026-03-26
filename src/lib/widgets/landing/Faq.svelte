<script lang="ts">
	import { faqData } from '$sharedData';
	// import {  } from '$widgets';
	import { FaqCard } from '$entitiesLanding';

</script>

<section id="faq" class="section faq-section">
	<div class="w-layout-blockcontainer main-container w-container">
		<div class="center-heading mg-bottom-80">
			<h2 class="no-margins">Some questions, some answers</h2>
		</div>
		<div class="master-faq">
			{#each faqData as faq}
				<FaqCard {faq} />
			{/each}
		</div>
		<div class="flex-cta-center mg-top-80">
			<a href="/#contact" class="cta-white w-button">Let's talk</a>
		</div>
	</div>
</section>

<style lang="postcss">
</style>
