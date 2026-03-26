<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities'

	let { data } = $props();
</script>

<!-- 
<div class="h-20 w-20">
<img src={data.img} alt="{data.title}  w-full h-full" />
</div>
<div class="text-200 medium color-neutral-300">Language: {data.lang}</div>
<a href={data.sourceLink.link} target="_blank">
<div class="text-200 medium color-neutral-300">
	{data.sourceLink.title}
</div>
</a>


-->
<div role="listitem" class="more-power-card">
	<h3 class="no-margins">{data.title}</h3>
	<p>
		{data.shortDesc}
	</p>
</div>

<style lang="postcss">
	@media screen and (max-width: 991px) {
	}
	@media screen and (max-width: 767px) {
	}

	@media screen and (max-width: 479px) {
	}
</style>
