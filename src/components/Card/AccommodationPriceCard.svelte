<script lang="ts">
	import ColoredButton from '$components/Button/ColoredButton.svelte';
	import AccommodationPriceText from '$components/Text/AccommodationPriceText.svelte';
	import OutlinedButton from '$components/Button/OutlinedButton.svelte';
	import type { Price } from '$interfaces/data.interfaces';
	import { Icon, MapPin } from 'svelte-hero-icons';
	import { goto } from '$app/navigation';

	export let title: string;
	export let shortLocation: string;
	export let prices: Price[];
	export let otaLink: string;

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
			<p class="text-xl font-bold">Room Type :</p>
			<div class="flex w-full gap-2 mt-2">
				{#each prices as price}
					{#if price == selectedPrice}
						<ColoredButton
							onClick={() => {
								selectedPrice = price;
							}}
						>
							{price.amountName} ({price.quantity} pax)
						</ColoredButton>
					{:else}
						<OutlinedButton
							onClick={() => {
								selectedPrice = price;
							}}
						>
							{price.amountName} ({price.quantity} pax)
						</OutlinedButton>
					{/if}
				{/each}
			</div>
			<p class="mt-5 text-xl font-bold">Price :</p>
			<div class="flex justify-between mt-2">
				<AccommodationPriceText price={selectedPrice} />
			</div>
			<small> Price may vary, please check on OTA </small>
		</div>
	{/if}
	<div class="flex justify-end mt-10 space-x-2">
		<ColoredButton
			onClick={() => {
				goto(otaLink);
			}}>See on OTA</ColoredButton
		>
	</div>
	<div class="absolute top-0 right-0 p-3 font-bold text-white rounded-bl-md bg-brand-dark">
		On Sale
	</div>
</div>
