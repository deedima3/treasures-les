<script lang="ts">
	import ColoredButton from '$components/Button/ColoredButton.svelte';
	import SolidButton from '$components/Button/SolidButton.svelte';
	import PriceText from '$components/Text/PriceText.svelte';
	import type { Price } from '$interfaces/data.interfaces';
	import { Icon, MapPin } from 'svelte-hero-icons';

	export let title: string;
	export let shortLocation: string;
	export let prices: Price[];

	$: price = prices[prices.length - 1];
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
	{#if price}
		<div class="mt-5">
			<p class="text-xl font-bold">From :</p>
			<div class="flex justify-between">
				<PriceText {price} />
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
