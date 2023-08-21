<script lang="ts">
	import ColoredButton from '$components/Button/ColoredButton.svelte';
	import SolidButton from '$components/Button/SolidButton.svelte';
	import PriceText from '$components/Text/PriceText.svelte';
	import type { Price } from '$interfaces/data.interfaces';
	import OutlinedButton from '$components/Button/OutlinedButton.svelte';
	import { Icon, MapPin } from 'svelte-hero-icons';

	export let title: string;
	export let shortLocation: string;
	export let prices: Price[];

	$: selectedPrice = prices[0];
</script>

<div class="relative w-full px-5 py-3 rounded-md shadow-md">
	<h3 class="text-xl font-bold">{title}</h3>
	<div class="flex gap-3">
		<div class="flex items-center justify-center">
			<Icon src={MapPin} class="w-5 h-5" />
			<p class="text-sm">
				{shortLocation}
			</p>
		</div>
	</div>
	{#if selectedPrice}
		<div class="mt-5">
			<p class="text-xl font-bold">Quantity :</p>
			<div class="flex w-full gap-2 mt-2">
				{#each prices as price}
					{#if price == selectedPrice}
						<ColoredButton
							onClick={() => {
								selectedPrice = price;
							}}
						>
							{price.quantity}{price.amountName}
						</ColoredButton>
					{:else}
						<OutlinedButton
							onClick={() => {
								selectedPrice = price;
							}}
						>
							{price.quantity}{price.amountName}
						</OutlinedButton>
					{/if}
				{/each}
			</div>
			<p class="mt-5 text-xl font-bold">Price :</p>
			<div class="flex justify-between mt-2">
				<PriceText price={selectedPrice} />
			</div>
		</div>
	{/if}
	<div class="flex justify-end mt-10">
		<ColoredButton>Book Now</ColoredButton>
	</div>
	<div class="absolute top-0 right-0 p-3 font-bold text-white rounded-bl-md bg-brand-dark">
		On Sale
	</div>
</div>
