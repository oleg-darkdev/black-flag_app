<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities'

	let { navigation } = $props();
</script>

<div role="banner" class="navbar w-nav z-20">
	<div class="nav-container">
		<!-- <a href="/" class="brand-link-navbar w-nav-brand">
			<img
				src=""
				loading="lazy"
				alt=""
				class="brand-navbar"
			/>
		</a> -->
		<div class="w-full">
		<!-- nav-menu w-nav-menu -->
			<nav role="navigation" class="flex flex-row justify-end w-full">
				{#each navigation as { title, link }}
					<!-- w--current -->
					<a href={link} class="nav-link w-nav-link mx-2">{title}</a>
				{/each}
			</nav>
			<!-- <a href="#" class="nav-link menu-button w-nav-link">Menu</a> -->
		</div>
		<div class="w-nav-button">
			<div class="w-icon-nav-menu"></div>
		</div>
	</div>
	<!-- <div class="master-fixed-navigation">
		<div class="wrap-inside-fixed-nav">
			<a href="/" aria-current="page" class="link-big-nav link-one w--current">Home</a>
			<a href="/" class="link-big-nav link-two">Lorem </a>
			<a href="/" class="link-big-nav link-three">Lorem </a>
			<div class="divider-fixed-nav"></div>
			<div class="wrap-bottom-links-nav">
				<a href="/" class="link-bottom-nav">Lorem </a>
				
				<a
					href="/"
					target="_blank"
					class="link-bottom-nav">Lorem </a
				>
				<a href="/" class="link-bottom-nav">Lorem </a>
			</div>
		</div>
		<a href="/" class="brand-link-top-fixed-nav w-inline-block">
			<img
				src="images/67b69bd77e64e3a6623bdf38_Clyde%20Logo%20White.svg"
				loading="lazy"
				alt=""
				class="brand-fixed-nav"
			/>
		</a>
		<img
			src="images/67b69bd77e64e3a6623bdef2_close.svg"
			loading="lazy"
			alt=""
			class="icon-close-nav"
		/>
	</div> -->
</div>

<style lang="postcss">
</style>
