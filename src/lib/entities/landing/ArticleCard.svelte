<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities'

	let { article } = $props();
</script>

<div role="listitem" class="w-dyn-item">
	<a href={article.link} class="link-project w-inline-block">
		<div class="wrap-image-project">
			<img
				src={article.img}
				loading="lazy"
				alt=""
				sizes="(max-width: 479px) 93vw, (max-width: 767px) 90vw, (max-width: 991px) 580px, 45vw"
				class="image-project-thumbnail"
			/>
			<div class="overlay-project-thumbnail">
				<img
					src="images/67b69bd77e64e3a6623bdfb5_logo-87.svg"
					loading="lazy"
					alt=""
					class="logo-project-thumbnail"
				/>
			</div>
		</div>
		<div class="bottom-project-thumbnail">
			<div class="">
				<div>{article.title}</div>
			</div>
			<div class="wrap-project-tags">
				<div class="tag-project">
					<!-- style="color: {article.brandColor}" -->
					<div><span>{article.tag}</span></div>
				</div>
				<div class="tag-project">
					<div>Language <span>{article.lang}</span></div>
				</div>
				<div class="tag-project">
					<div><span>{article.time}</span></div>
				</div>
			</div>
			<h3 class="h3-project-name">
				{article.desc}
			</h3>
		</div>
	</a>
</div>

<style lang="postcss">
</style>
