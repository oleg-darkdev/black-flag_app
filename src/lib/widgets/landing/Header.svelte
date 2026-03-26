<script lang="ts">
	import { BuyMeaCoffeeBtn } from '$sharedUi';
	import { scrollToAnchor } from '$sharedUtils';
	import { goto } from '$app/navigation';
	let showNav = $state(false);
	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities'

	let { navigation } = $props();
</script>

<div role="banner" class="navbar z-40">
	<div class="flex w-full justify-end {showNav ? 'bg-black' : ''} ">
		<div class="w-nav-button">
			<button class="w-icon-nav-menu" on:click={() => (showNav = !showNav)}>
				btn
				{#if !showNav}
					<img
						src="/images/icons/menu.svg"
						class="h-10 w-10 transition-transform duration-200"
						alt=""
					/>
				{:else}
					<img
						src="/images/icons/close.svg"
						class="h-10 w-10 transition-transform duration-200"
						alt=""
					/>
				{/if}
			</button>
		</div>
	</div>
	{#if showNav}
		<nav
			role="navigation"
			class="hide-lg py z-40 flex h-auto h-full w-full flex-col justify-center bg-black px-6"
		>
			<div class=" transition-transform duration-200 ease-in-out">
				{#each navigation as { title, link }}
					<li class="nav-link w-nav-link my-4">
						<div
							on:click|preventDefault={() => {
								scrollToAnchor(link);
								showNav = false;
							}}
							class="item_nav-link"
						>
							{title}
						</div>
					</li>
				{/each}
			</div>
			<!-- w--current -->
			<!-- <a href={link} class="nav-link w-nav-link my-4">{title}</a> -->

			<div class="mt-10 flex justify-center">
				<BuyMeaCoffeeBtn />
			</div>
		</nav>
	{/if}
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
			<nav role="navigation" class="hide-sm flex flex-row justify-end">
				{#each navigation as { title, link }}
					<!-- w--current -->
					<a href={link} class="nav-link w-nav-link mx-2">{title}</a>
				{/each}
			</nav>

			<!-- <a href="#" class="nav-link menu-button w-nav-link">Menu</a> -->
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
	.hide-sm {
	}

	@media (max-width: 767px) {
		.hide-sm {
			display: none !important;
		}
	}

	/* hide-lg: скрывает элемент на больших экранах (десктопы) */
	.hide-lg {
		display: block; /* по умолчанию показываем */
	}

	@media (min-width: 1024px) {
		.hide-lg {
			display: none !important;
		}
	}

	.w-nav-button {
		float: right;
		cursor: pointer;
		-webkit-tap-highlight-color: #0000;
		tap-highlight-color: #0000;
		-webkit-user-select: none;
		user-select: none;
		padding: 18px;
		font-size: 24px;
		/* display: none; */
		position: relative;
	}

	.w-nav-button {
		display: block;
	}

	.w-nav-button:focus {
		outline: 0;
	}

	.w-nav-button.w--open {
		color: #fff;
		background-color: #c8c8c8;
	}
</style>
