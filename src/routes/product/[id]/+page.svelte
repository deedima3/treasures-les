<script lang="ts">
	import ProductPriceCard from '$components/Card/ProductPriceCard.svelte';
	import ShopProfileCard from '$components/Card/ShopProfileCard.svelte';
	import Carousel from '$components/Carousel/Carousel.svelte';
	import MarkdownDisplayer from '$components/Markdown/MarkdownDisplayer.svelte';
	import PageTitle from '$components/SEO/PageTitle.svelte';
	import { getYTVideoId } from '$utils/utils';
	import type { PageData } from '$houdini/types/src/routes/product/[id]/$houdini';
	export let data: PageData;

	$: ({ ProductDetail } = data);
</script>

{#if $ProductDetail.data?.product}
	{#if $ProductDetail.data.product.title}
		<PageTitle title={$ProductDetail.data.product.title} />
	{/if}
	<div class="flex flex-col w-full mx-auto max-w-screen-2xl">
		<h1 class="text-4xl font-bold md:pl-5 text-center md:text-left px-5">{$ProductDetail.data.product.title}</h1>
		<h2 class="text-base md:pl-5 px-5 text-center md:text-left my-3">
			{$ProductDetail.data.product.subtitle}
		</h2>
		<div class="flex flex-col w-full gap-5 md:flex-row">
			<div class="w-full md:w-2/3">
				<Carousel imageArray={$ProductDetail.data.product.image} />
			</div>
			{#if $ProductDetail.data.product.title && $ProductDetail.data.product.shortLocation && $ProductDetail.data.product.shop && $ProductDetail.data.product.shop.waNumber}
				<div class="w-full md:w-1/4">
					<ProductPriceCard
						title={$ProductDetail.data.product.title}
						shortLocation={$ProductDetail.data.product.shortLocation}
						prices={$ProductDetail.data.product.price}
						phoneNumber={$ProductDetail.data.product.shop.waNumber}
					/>
					<ShopProfileCard shop={$ProductDetail.data.product.shop} />
				</div>
			{/if}
		</div>
		<div class="w-full mt-10 md:w-2/3 text-justify">
			{#if $ProductDetail.data.product.description?.markdown}
				<MarkdownDisplayer content={$ProductDetail.data.product.description?.markdown} />
			{/if}
			<div class="w-full grid grid-cols-1 md:grid-cols-2 gap-1 px-5">
				{#each $ProductDetail.data.product.youtubeLink as youtubeLink}
					<iframe
						class="w-full md:h-64"
						src="https://www.youtube.com/embed/{getYTVideoId(youtubeLink)}"
						title="YouTube Video"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerpolicy="strict-origin-when-cross-origin"
						allowfullscreen
					/>
				{/each}
			</div>
		</div>
	</div>
{/if}
