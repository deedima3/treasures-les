<script lang="ts">
	import ProductCard from '$components/Card/ProductCard.svelte';
	import TourCard from '$components/Card/TourCard.svelte';
	import DestinationCard from '$components/Card/DestinationCard.svelte';
	import GridContainer from '$components/Container/GridContainer.svelte';
	import PageTitle from '$components/SEO/PageTitle.svelte';
	import VideoHeader from '$components/Section/VideoHeader.svelte';
	import Title from '$components/Title/Title.svelte';
	import type { PageData } from '$houdini/types/src/routes/$houdini';
	export let data: PageData;

	import InstagramEmbed from '$components/Embed/InstagramEmbed.svelte';
	import FacebookEmbed from '$components/Embed/FacebookEmbed.svelte';

	$: ({ Featured } = data);
</script>

<PageTitle title="Home" />
<VideoHeader />
<div class="flex flex-col md:flex-row md:space-x-4 px-4 md:p-32 md:pb-0 mt-16 md:mt-0">
	<div class="w-full md:w-1/2 text-left md:pr-4 order-2 md:order-1">
		<h1 class="text-2xl md:text-4xl font-extrabold text-brand-gray mt-2 mb-4">
			TOP 50
			<span class="md:text-2xl text-lg font-bold text-brand-dark leading-3 capitalize">
				<br />
				ANUGERAH DESA WISATA INDONESIA 2024
			</span>
		</h1>
		<ol class="space-y-2">
			<li class="flex text-base lg:text-xl font-bold items-center justify-start space-x-4">
				<img src="medal.png" alt="" class="w-8 md:w-14" />
				<p>Top 300 (2022)</p>
			</li>
			<li class="flex text-base lg:text-xl font-bold items-center justify-start space-x-4">
				<img src="medal.png" alt="" class="w-8 md:w-14" />
				<p>Top 500 (2023)</p>
			</li>
			<li class="flex text-base lg:text-xl font-bold items-center justify-start space-x-4">
				<img src="medal.png" alt="" class="w-8 md:w-14" />
				<p>Top 50 (2024)</p>
			</li>
		</ol>
		<p class="text-sm md:text-base text-gray-600 py-4">
			Les Village succeeded in reaching the top 50 of ADWI in 2024, thanks to dedicated efforts and
			prayer. This achievement proves that Les Village can compete with 6,016 other tourist
			villages, showcasing its best charms and fully exploring its potential to be presented as
			attractively as possible.
		</p>
		<a href="https://jadesta.kemenparekraf.go.id/berita/154589">
			<button class="font-bold rounded-2xl bg-brand-gray text-white px-6 py-3 shadow-sm"
				>Read More</button
			>
		</a>
	</div>
	<div class="w-full md:w-1/2 mt-4 md:mt-0 order-1 md:order-2">
		<img src="blob.png" alt="Desa Les" class="w-full h-auto object-cover rounded-lg" />
	</div>
</div>
{#if $Featured.data}
	<div class="my-10">
		<Title title="Top Picks" subtitle="Explore the Best of Les Village!" />
		<GridContainer>
			{#each $Featured.data.tours as tour}
				<TourCard {tour} />
			{/each}
			{#each $Featured.data.destinations as destination}
				<DestinationCard {destination} />
			{/each}
			{#each $Featured.data.products as product}
				<ProductCard {product} />
			{/each}
		</GridContainer>
	</div>
{/if}
<div class="my-10">
	<Title title="Social Media" subtitle="Join our vibrant community on social media!" />
	<GridContainer>
		<InstagramEmbed />
		<FacebookEmbed />
	</GridContainer>
</div>
