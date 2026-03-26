<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities'
</script>

<!-- 
<section  class="section-big-image">
	<img
		src=""
		loading="lazy"
		sizes="100vw"
		alt=""
		class="image-big-image-section"
	/>
</section> -->

<section class="section hero v1 z-1">
	<div class="home-hero-bg">
		<div class="home-hero-top-gradient"></div>
		<div class="home-hero-bottom-gradient"></div>
		<img
			class="image home-hero-image"
			src="images/hero_flags.png"
			alt=""
			sizes="(max-width: 1439px) 100vw, 1440px"
			loading="eager"
		/>
	</div>
	<div class="container-default position-relative w-container">
		<div class="inner-container _846px center">
			<div class="inner-container _600px---mbl center">
				<div class="position-relative z-index-1 hero-v1-main-content">
					<div class="text-center">
						<h1 class="display-1">Play the game and reset a broken world.</h1>
						<div class="inner-container _600px center">
							<p class="mg-bottom-24px keep">
								Anarchism in one board game: direct actions, activists, books, movements and
								collectives from 20+ countries.
								<!-- <span class="text-no-wrap"
									>dolor eget.</span
								> -->
							</p>
							<div class="buttons-row center">
								<!-- <a href="/" class="btn-primary button-row w-button"
									>Get started <span class="line-rounded-icon link-icon-right"></span>
								</a> -->
								<a
									href="https://www.instagram.com/blackflag_boardgame?igsh=cWpzaWp0dmx0NXV6"
									target="_blank"
									class=" social-media-icon mr-6"></a
								>
								<a href="#about" class="btn-secondary w-button">Learn more</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	
</section>


<style lang="postcss">
	.home-hero-bg {
		opacity: 0.6;
		justify-content: center;
		align-items: center;
		margin-left: auto;
		margin-right: auto;
		display: flex;
		position: absolute;
		z-index: 0;
		top: 0%;
		bottom: 46px;
		left: 0%;
		right: 0%;
		overflow: hidden;
	}

	.image.home-hero-image {
		height: auto;
		max-width: 1440px;
		min-width: 1440px;
		object-fit: cover;
	}
	.home-hero-top-gradient {
		z-index: 1;
		min-height: 38%;
		background-image: linear-gradient(to bottom, #060606 30%, rgba(6, 6, 6, 0));
		position: absolute;
		top: 0%;
		bottom: auto;
		left: 0%;
		right: 0%;
	}

	.home-hero-bottom-gradient {
		z-index: 1;
		min-height: 33%;
		background-image: linear-gradient(to bottom, rgba(6, 6, 6, 0), #060606 70%);
		position: static;
		top: auto;
		bottom: 0%;
		left: 0%;
		right: 0%;
	}

	.section.hero {
		position: relative;
		overflow: hidden;
	}

	.section.hero.v1 {
		padding-top: 539px;
		padding-bottom: 524px;
	}

	@media screen and (min-width: 1440px) {
	}

	@media screen and (min-width: 1920px) {
	}
	@media screen and (max-width: 991px) {
		.image.home-hero-image {
			max-width: 1200px;
			min-width: 1200px;
			margin-top: -28px;
		}
	}
	@media screen and (max-width: 767px) {
		.image.home-hero-image {
			max-width: 1000px;
			min-width: 1000px;
			margin-top: -45px;
		}
	}

	@media screen and (max-width: 479px) {
		.image.home-hero-image {
			height: 100%;
			max-width: 900px;
			min-width: 900px;
			margin-top: -34px;
			transform: translate(0, -7%);
		}
		.home-hero-bg {
			align-items: flex-start;
			bottom: 40px;
		}

		.home-hero-top-gradient {
			background-image: linear-gradient(to bottom, #060606 20%, rgba(6, 6, 6, 0));
		}

		.home-hero-bottom-gradient {
			background-image: linear-gradient(to bottom, rgba(6, 6, 6, 0), #060606 60%);
		}
		.hero-arrow-wrapper {
			width: 64px;
			height: 64px;
		}

		.hero-arrow {
			font-size: 24px;
		}

		.integrations-hero-content {
			padding-top: 60px;
		}
	}
</style>

