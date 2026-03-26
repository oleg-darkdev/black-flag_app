<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities'

	let { navigation, extensions } = $props();
</script>

<section class="footer">
	<div class="w-layout-blockcontainer main-container w-container">
		<a href="/" class="">
			<img src="images/footer_logo.svg" loading="lazy" alt="" class="brand-footer" />
		</a>
		<div class="grid-contact-footer grid mt-6">
			<a href="mailto:darkdev_brand@riseup.net" class="link-contact-footer w-inline-block">
				<div>darkdev_brand@riseup</div>
			</a>
			<div class="divider-contact-footer"></div>

			<a
				href="https://www.instagram.com/blackflag_boardgame?igsh=cWpzaWp0dmx0NXV6"
				target="_blank"
				class="link-contact-footer w-inline-block"
			>
				<div>@blackflag_boardgame</div>
			</a>
		</div>
		<div id="contact" class="flex-footer-links">
			<div class="column-footer-link">
				<div class="heading-footer-link">Main pages</div>
				{#each navigation as { title, link }}
					<a href={link} class="link-footer">{title}</a>
				{/each}
			</div>

			<div class="column-footer-link">
				<div class="heading-footer-link">In internet</div>
				<a
					href="https://www.instagram.com/blackflag_boardgame?igsh=cWpzaWp0dmx0NXV6"
					target="_blank"
					class="link-footer">Instagram</a
				>
				<a href="" target="_blank" class="link-footer">Boardgames Geek</a>
				<!-- <a href="" target="_blank" class="link-footer">Kikstarter</a> -->

				<a href="https://github.com/oleg-darkdev/black-flag_app" target="_blank" class="link-footer"
					>Github</a
				>
			</div>
			<div class="column-footer-link">
				<div class="heading-footer-link">Expansions</div>
				{#each extensions as { title, link }}
					<a href={link} target="_blank" class="link-footer">{title}</a>
				{/each}
			</div>
			<div class="column-footer-link">
				<div class="heading-footer-link">Other <br /> boardgames</div>
				<a href="https://food-not-bombs.vercel.app/" target="_blank" class="link-footer"
					>Soup4all: <br />
					Food not Bombs</a
				>
			</div>
		</div>
		<div class="wrap-legal-footer">
			<div class="text-legal-footer">
				Developed by <a href="https://oleg-darkdev.vercel.app/" target="_blank" class="white-link">oleg_darkDev</a>. Powered by
				community.
			</div>
			<div class="text-legal-footer">
				<a href="/" target="_blank" class="white-link">Lorem impsum</a>
			</div>
		</div>
	</div>
</section>

<style lang="postcss">
	.grid-contact-footer {
		grid-column-gap: 12px;
		border-top: 2px solid var(--light);
		border-bottom: 2px solid var(--light);
		grid-template-rows: auto;
		/* grid-template-columns: 1fr 1px 1fr 1px 1fr; */
		grid-template-columns: 1fr 1px 1fr;
		margin-bottom: 80px;
		padding-top: 64px;
		padding-bottom: 64px;
	}

	@media screen and (max-width: 767px) {
		.grid-contact-footer {
			grid-row-gap: 56px;
			grid-template-columns: 1fr;
		}
	}
</style>
