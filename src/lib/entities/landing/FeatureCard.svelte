<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities'

	let { feature } = $props();
</script>

<div class="master-column-value {feature.class}">
	<div class="tile-border sticky-value-tile ">
		<img src={feature.icon} loading="lazy" alt="" class="icon-value" />
		<div class="bottom-value">
			<h3 class="no-margins">{feature.title}</h3>
			<div>
				{feature.shortDesc}
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
</style>
