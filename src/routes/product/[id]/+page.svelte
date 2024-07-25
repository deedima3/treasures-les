<script lang="ts">
	import ProductPriceCard from '$components/Card/ProductPriceCard.svelte';
	import ShopProfileCard from '$components/Card/ShopProfileCard.svelte';
	import Carousel from '$components/Carousel/Carousel.svelte';
	import MarkdownDisplayer from '$components/Markdown/MarkdownDisplayer.svelte';
	import PageTitle from '$components/SEO/PageTitle.svelte';
	import type { PageData } from '$houdini/types/src/routes/product/[id]/$houdini';
	export let data: PageData;

	$: ({ ProductDetail } = data);
</script>

{#if $ProductDetail.data?.product}
	{#if $ProductDetail.data.product.title}
		<PageTitle title={$ProductDetail.data.product.title} />
	{/if}
	<div class="flex flex-col w-full mx-auto max-w-screen-2xl">
		<h1 class="text-4xl font-bold md:pl-5">{$ProductDetail.data.product.title}</h1>
		<h2 class="text-base md:pl-5">
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
		<div class="w-full mt-10 md:w-2/3">
			{#if $ProductDetail.data.product.description?.markdown}
				<MarkdownDisplayer content={$ProductDetail.data.product.description?.markdown} />
			{/if}
		</div>
	</div>
{/if}
