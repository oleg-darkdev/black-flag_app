<script lang="ts">
	import { stats } from '$sharedData';
	// import {  } from '$widgets';
	import { BoardgameComponentsCard, StatsGrid } from '$entitiesLanding';
</script>

<section class="section scroll-images"></section>

<section class="section hero-about">
	<div class="w-layout-blockcontainer main-container w-container">
		<div id="gallery" class="">
			<div class="sticky-scroll-images">
				<div class="inside-scroll-images">
					<img
						src="images/67b69bd77e64e3a6623bdf29_Scroll%201.webp"
						loading="lazy"
						sizes="(max-width: 479px) 60vw, (max-width: 767px) 32vw, 26vw"
						alt=""
						class="image-scroll-image left-image"
					/>
					<div class="wrap-scroll-smiley first-smiley-wrap">
						<img
							src="images/67b69bd77e64e3a6623bdf3d_Smiley%20Dark.svg"
							loading="lazy"
							alt=""
							class="image-scroll-smiley first-smiley"
						/>
					</div>
					<img
						src="images/67b69bd77e64e3a6623bdf64_scroll%202.jpg"
						loading="lazy"
						alt=""
						class="image-scroll-image middle-image"
					/>
					<div class="wrap-scroll-smiley second-smiley-wrap">
						<img
							src="images/67b69bd77e64e3a6623bdf3d_Smiley%20Dark.svg"
							loading="lazy"
							alt=""
							class="image-scroll-smiley second-smiley"
						/>
					</div>
					<img
						src="images/67b69bd77e64e3a6623bdf34_Scroll%203.webp"
						loading="lazy"
						sizes="(max-width: 479px) 60vw, (max-width: 767px) 32vw, 26vw"
						alt=""
						class="image-scroll-image right-image"
					/>
				</div>
			</div>
		</div>

		<!-- <div style="" class="title-wrap-hero-about">
			<h1 class="mega-h1">Lorem Ipsum jest tekstem stosowanym</h1>
		</div>
		<div class="divider-hero-about"></div>
		<div class="wrap-grids-about">
			<div class="grid-about-top grid">
				<img
					src="images/67b69bd77e64e3a6623bdeee_gallery%201.jpg"
					loading="lazy"
					id="w-node-_11f1756a-a857-c865-2cdc-7c8d388dfa78-623bde87"
					sizes="(max-width: 479px) 93vw, (max-width: 767px) 94vw, (max-width: 991px) 95vw, 94vw"
					alt=""
					class="image-gallery-about"
				/>
				<img
					src="images/67b69bd77e64e3a6623bded6_gallery%202.jpg"
					loading="lazy"
					id="w-node-_51ba1012-d931-7237-81d8-05dc3553b520-623bde87"
					sizes="(max-width: 479px) 93vw, (max-width: 767px) 94vw, (max-width: 991px) 95vw, 94vw"
					alt=""
					class="image-gallery-about"
				/>
			</div>
			<div class="grid-bottom-about grid">
				<img
					src="images/67b69bd77e64e3a6623bded4_gallery%206.jpg"
					loading="lazy"
					id="w-node-_7d3dff2c-f17c-f3b8-1b8e-8463cbb7d0a2-623bde87"
					sizes="(max-width: 479px) 93vw, (max-width: 767px) 90vw, (max-width: 991px) 95vw, 94vw"
					alt=""
					class="image-gallery-about"
				/>
				<img
					src="images/67b69bd77e64e3a6623bded8_gallery%203.jpg"
					loading="lazy"
					id="w-node-_1091a887-c71c-9d8b-ea87-f973465f518a-623bde87"
					alt=""
					class="image-gallery-about"
				/>
				<img
					src="images/67b69bd77e64e3a6623bded3_gallery%204.jpg"
					loading="lazy"
					id="w-node-ecccc542-e6ee-a8ba-a342-d7edda8ec51b-623bde87"
					alt=""
					class="image-gallery-about"
				/>
				<img
					src="images/67b69bd77e64e3a6623bded2_gallery%205.jpg"
					loading="lazy"
					id="w-node-_05fc800d-fb65-4486-0ad0-d910e2d761af-623bde87"
					alt=""
					class="image-gallery-about"
				/>
				<div
					id="w-node-ce66c3dd-e151-33ed-f56c-16a90e1387c5-623bde87"
					style=""
					class="wrap-simley-about"
				>
					<img
						src="images/67b69bd77e64e3a6623bdf3d_Smiley%20Dark.svg"
						loading="lazy"
						alt=""
						class="image-about-smiley"
					/>
				</div>
				<img
					src="images/67b69bd77e64e3a6623bded9_gallery%207.jpg"
					loading="lazy"
					id="w-node-_627502d3-e9e4-e15e-46cb-a3f683d5509b-623bde87"
					sizes="(max-width: 479px) 93vw, (max-width: 767px) 90vw, (max-width: 991px) 95vw, 94vw"
					alt=""
					class="image-gallery-about"
				/>
			</div>
		</div> -->
		<div class="master-stats">
			<div class="center-heading">
				<h2 class="no-margins">Bordgame Included</h2>
			</div>
			<StatsGrid {stats} />
		</div>
		<!-- <div class="divider-hero-about-bottom"></div> -->
		<div class="w-layout-blockcontainer main-container w-container">
			<div class="grid-included grid">
				<BoardgameComponentsCard />
				<BoardgameComponentsCard />
				<BoardgameComponentsCard />

				<div
					id="w-node-_39a42395-8837-8800-1ded-28546491f994-623bde81"
					class="included-card figma-card"
				>
					<img
						src="images/67b69bd77e64e3a6623bdef0_Figma.svg"
						loading="lazy"
						alt=""
						class="icon-figma"
					/>
					<div class="wrap-figma-content">
						<h3 class="no-margins">Lorem Ipsum jest tekstem</h3>
						<p>
							Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle
							poligraficznym.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- <section class="section included-sales-section">
	<div class="w-layout-blockcontainer main-container w-container">
		<div class="center-heading">
			<h2 class="no-margins">Bordgame Included</h2>
		</div>
		<div class="grid-included grid">
			<div class="included-card">
				<div class="included-padding-wrap">
					<h3 class="no-margins">13+ Lorem Ipsum</h3>
				</div>
				<img
					src="images/67b69bd77e64e3a6623bdf65_Pages.svg"
					loading="lazy"
					alt=""
					class="image-included"
				/>
			</div>
			<div id="w-node-_39a42395-8837-8800-1ded-28546491f989-623bde81" class="included-card">
				<div class="included-padding-wrap">
					<h3 class="no-margins">25+ Lorem Ipsum</h3>
				</div>
				<img
					src="images/67b69bd77e64e3a6623bdf67_Sections.svg"
					loading="lazy"
					alt=""
					class="image-included"
				/>
			</div>
			<div id="w-node-_39a42395-8837-8800-1ded-28546491f98e-623bde81" class="included-card">
				<div class="included-padding-wrap">
					<h3 class="no-margins">10+ Lorem Ipsum jest tekstem</h3>
				</div>
				<img
					src="images/67b69bd77e64e3a6623bdf66_Styles.svg"
					loading="lazy"
					alt=""
					class="image-included"
				/>
			</div>
			<div
				id="w-node-_39a42395-8837-8800-1ded-28546491f994-623bde81"
				class="included-card figma-card"
			>
				<img
					src="images/67b69bd77e64e3a6623bdef0_Figma.svg"
					loading="lazy"
					alt=""
					class="icon-figma"
				/>
				<div class="wrap-figma-content">
					<h3 class="no-margins">Lorem Ipsum jest tekstem</h3>
					<p>
						Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle
						poligraficznym.
					</p>
				</div>
			</div>
		</div>
	</div>
</section> -->

<style lang="postcss">
</style>
