<script lang="ts">
	import MarkdownDisplayer from '$components/Markdown/MarkdownDisplayer.svelte';
	import PageTitle from '$components/SEO/PageTitle.svelte';
	import ShopProductPriceCard from '$components/Card/ShopProductPriceCard.svelte';
	import ColoredButton from '$components/Button/ColoredButton.svelte';
	import type { PageData } from '$houdini/types/src/routes/shop/[id]/$houdini';
	import { goto } from '$app/navigation';

	export let data: PageData;

	$: ({ ShopDetail } = data);
</script>

{#if $ShopDetail.data?.shop}
	{#if $ShopDetail.data.shop.shopName}
		<PageTitle title={$ShopDetail.data.shop.shopName} />
	{/if}
	<div class="flex flex-col items-center w-full mx-auto max-w-screen-2xl">
		<h1 class="text-4xl font-bold">{$ShopDetail.data.shop.shopName}</h1>
		<h2 class="text-base">
			{$ShopDetail.data.shop.shortDescription}
		</h2>
		{#if $ShopDetail.data.shop.shopLogo?.url}
			<div
				class="w-full max-h-[600px] overflow-clip flex flex-col justify-center items-center mt-10"
			>
				<img src={$ShopDetail.data.shop.shopLogo.url} alt="Item" class="object-cover w-full" />
			</div>
		{/if}
		<div class="px-5 max-w-screen-xl">
			<div class="w-full mt-10">
				{#if $ShopDetail.data.shop.gmapsLink}
					<div class="px-5 mb-4">
						<ColoredButton
							class={'font-bold rounded-2xl text-brand-light px-6 py-3 shadow-md flex items-center justify-center hover:bg-brand-dark hover:text-white duration-300'}
							onClick={() => {
								goto($ShopDetail.data?.shop?.gmapsLink ?? '');
							}}>

							<img src="/gmaps_icon.svg" alt="" width="12" height="12" class="mr-1">

							Find on Google Maps</ColoredButton
						>
					</div>
				{/if}
				<MarkdownDisplayer content={$ShopDetail.data.shop.description?.markdown ?? ''} />
			</div>

			<div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
				{#each $ShopDetail.data.shop.shopProduct as shopProduct}
					{#if shopProduct.__typename == 'Product'}
						<ShopProductPriceCard
							title={shopProduct.title ?? ''}
							shortLocation={shopProduct.shortLocation ?? ''}
							prices={shopProduct.price}
							phoneNumber={$ShopDetail.data.shop.waNumber ?? ''}
							slug={shopProduct.slug ?? ''}
						/>
					{/if}
				{/each}
			</div>
		</div>
	</div>
{/if}
