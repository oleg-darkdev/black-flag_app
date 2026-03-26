<script lang="ts">
	import { BigBannerImg } from '$entitiesLanding';
	import { navigation, extensions, articles } from '$sharedData';
	import {
		Header,
		Hero,
		Tags,
		Features,
		Articles,
		Gallery,
		PrintAndPlay,
		Author,
		Footer,
		Extensions,
		Faq,
		LibraryData,
		Logos,
		Changelog
	} from '$widgetsLanding';
	// import { SEO } from '$sharedUtils';
</script>

<svelte:head>
	<title>Black Flag 🏴 Home</title>
	<meta name="description" content="" />
</svelte:head>

<!-- <SEO title="Home" /> -->

<!-- All anarcho philosofophies in on place -->
<!-- 										Play and find you anarchy person <span class="text-no-wrap">free pnp</span>
 -->

<!-- 
	const logos = [
		{
			img: '/images/partners/44games.svg',
			title: '',
			link: ''
		},
		{
			img: '/images/partners/darkdev.svg',
			title: '',
			link: ''
		},
		{
			img: '/images/partners/community.svg',
			title: '',
			link: ''
		}
	]; -->
<Header {navigation} />

<!-- <BigBannerImg /> -->

<Hero />

<Tags />

<Features />

<!-- <BigBannerImg /> -->

<!-- <Gallery /> -->

<Extensions {extensions} />

<PrintAndPlay />

<!-- <div  class="section-sales-mockups">
	<div class="container-sales-mockups w-container">
		<div class="grid grid-thirds-mokckups sales-mokcups">
			<div
				id="w-node-_53764c5b-9619-2c6e-b071-caf477de019f-623bde81"
				data-w-id="53764c5b-9619-2c6e-b071-caf477de019f"
				class="sales-mockups-column first-column"
			>
				<a href="/about" class="sales-mock-link-block w-inline-block">
					<img
						src="images/67b69bd77e64e3a6623bdf8b_Gal%202.webp"
						loading="eager"
						sizes="(max-width: 479px) 100vw, (max-width: 767px) 94vw, 95vw"
						srcset="images/67b69bd77e64e3a6623bdf8b_Gal%25202-p-500.jpg 500w, images/67b69bd77e64e3a6623bdf8b_Gal%25202-p-800.jpg 800w, images/67b69bd77e64e3a6623bdf8b_Gal%25202-p-1080.jpg 1080w, images/67b69bd77e64e3a6623bdf8b_Gal%202.webp 1512w"
						alt=""
						class="sales-mock-image"
					/>
				</a>
				<a href="/homepage" class="sales-mock-link-block w-inline-block">
					<img
						src="images/67b69bd77e64e3a6623bdf84_Gal%208.webp"
						loading="eager"
						sizes="(max-width: 479px) 100vw, (max-width: 767px) 94vw, 95vw"
						srcset="images/67b69bd77e64e3a6623bdf84_Gal%25208-p-500.jpg 500w, images/67b69bd77e64e3a6623bdf84_Gal%25208-p-800.jpg 800w, images/67b69bd77e64e3a6623bdf84_Gal%25208-p-1080.jpg 1080w, images/67b69bd77e64e3a6623bdf84_Gal%208.webp 1512w"
						alt=""
						class="sales-mock-image"
					/>
				</a>
				<a href="/homepage" class="sales-mock-link-block w-inline-block">
					<img
						src="images/67b69bd77e64e3a6623bdf86_Gal%209.webp"
						loading="eager"
						sizes="(max-width: 479px) 100vw, (max-width: 767px) 94vw, 95vw"
						srcset="images/67b69bd77e64e3a6623bdf86_Gal%25209-p-500.jpg 500w, images/67b69bd77e64e3a6623bdf86_Gal%25209-p-800.jpg 800w, images/67b69bd77e64e3a6623bdf86_Gal%25209-p-1080.jpg 1080w, images/67b69bd77e64e3a6623bdf86_Gal%209.webp 1512w"
						alt=""
						class="sales-mock-image"
					/>
				</a>
			</div>
			<div
				id="w-node-_53764c5b-9619-2c6e-b071-caf477de01a6-623bde81"
				data-w-id="53764c5b-9619-2c6e-b071-caf477de01a6"
				class="sales-mockups-column second-column"
			>
				<a href="/contact" class="sales-mock-link-block w-inline-block">
					<img
						src="images/67b69bd77e64e3a6623bdf89_Gal%203.webp"
						loading="eager"
						sizes="(max-width: 479px) 100vw, (max-width: 767px) 94vw, 95vw"
						srcset="images/67b69bd77e64e3a6623bdf89_Gal%25203-p-500.jpg 500w, images/67b69bd77e64e3a6623bdf89_Gal%25203-p-800.jpg 800w, images/67b69bd77e64e3a6623bdf89_Gal%25203-p-1080.jpg 1080w, images/67b69bd77e64e3a6623bdf89_Gal%203.webp 1512w"
						alt=""
						class="sales-mock-image"
					/>
				</a>
				<a href="/homepage" class="sales-mock-link-block w-inline-block">
					<img
						src="images/67b69bd77e64e3a6623bdf88_Gal%201.webp"
						loading="eager"
						sizes="(max-width: 479px) 100vw, (max-width: 767px) 94vw, 95vw"
						srcset="images/67b69bd77e64e3a6623bdf88_Gal%25201-p-500.jpg 500w, images/67b69bd77e64e3a6623bdf88_Gal%25201-p-800.jpg 800w, images/67b69bd77e64e3a6623bdf88_Gal%25201-p-1080.jpg 1080w, images/67b69bd77e64e3a6623bdf88_Gal%201.webp 1512w"
						alt=""
						class="sales-mock-image"
					/>
				</a>
				<a href="/shop" class="sales-mock-link-block w-inline-block">
					<img
						src="images/67b69bd77e64e3a6623bdf85_Gal%206.webp"
						loading="eager"
						sizes="(max-width: 479px) 100vw, (max-width: 767px) 94vw, 95vw"
						srcset="images/67b69bd77e64e3a6623bdf85_Gal%25206-p-500.jpg 500w, images/67b69bd77e64e3a6623bdf85_Gal%25206-p-800.jpg 800w, images/67b69bd77e64e3a6623bdf85_Gal%25206-p-1080.jpg 1080w, images/67b69bd77e64e3a6623bdf85_Gal%206.webp 1512w"
						alt=""
						class="sales-mock-image"
					/>
				</a>
			</div>
			<div
				id="w-node-_53764c5b-9619-2c6e-b071-caf477de01ad-623bde81"
				data-w-id="53764c5b-9619-2c6e-b071-caf477de01ad"
				class="sales-mockups-column third-column"
			>
				<a href="/homepage" class="sales-mock-link-block w-inline-block">
					<img
						src="images/67b69bd77e64e3a6623bdf83_Gal%207.webp"
						loading="eager"
						sizes="(max-width: 479px) 93vw, (max-width: 991px) 100vw, 95vw"
						srcset="images/67b69bd77e64e3a6623bdf83_Gal%25207-p-500.jpg 500w, images/67b69bd77e64e3a6623bdf83_Gal%25207-p-800.jpg 800w, images/67b69bd77e64e3a6623bdf83_Gal%25207-p-1080.jpg 1080w, images/67b69bd77e64e3a6623bdf83_Gal%207.webp 1512w"
						alt=""
						class="sales-mock-image"
					/>
				</a>
				<a href="/projects" class="sales-mock-link-block w-inline-block">
					<img
						src="images/67b69bd77e64e3a6623bdf87_Gal%205.webp"
						loading="eager"
						sizes="(max-width: 479px) 93vw, (max-width: 991px) 100vw, 95vw"
						srcset="images/67b69bd77e64e3a6623bdf87_Gal%25205-p-500.jpg 500w, images/67b69bd77e64e3a6623bdf87_Gal%25205-p-800.jpg 800w, images/67b69bd77e64e3a6623bdf87_Gal%25205-p-1080.jpg 1080w, images/67b69bd77e64e3a6623bdf87_Gal%205.webp 1512w"
						alt=""
						class="sales-mock-image"
					/>
				</a>
				<a href="/contact" class="sales-mock-link-block w-inline-block">
					<img
						src="images/67b69bd77e64e3a6623bdf89_Gal%203.webp"
						loading="eager"
						sizes="(max-width: 479px) 93vw, (max-width: 991px) 100vw, 95vw"
						srcset="images/67b69bd77e64e3a6623bdf89_Gal%25203-p-500.jpg 500w, images/67b69bd77e64e3a6623bdf89_Gal%25203-p-800.jpg 800w, images/67b69bd77e64e3a6623bdf89_Gal%25203-p-1080.jpg 1080w, images/67b69bd77e64e3a6623bdf89_Gal%203.webp 1512w"
						alt=""
						class="sales-mock-image"
					/>
				</a>
			</div>
		</div>
	</div>
</div> -->

<!-- <LibraryData /> -->

<Author />

<Articles {articles} />

<!-- <Logos /> -->

<Faq />

<Changelog />

<Footer {navigation} {extensions} />

<style lang="postcss">
</style>
