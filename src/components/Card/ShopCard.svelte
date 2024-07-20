<script lang="ts">
	import type { Shop } from '$interfaces/data.interfaces';

	export let shop: Shop;

	const truncateText = (text: string | null) => {
		if (text) {
			return `${text.slice(0, 200)}...`;
		}
	};
</script>

<a
	class="w-full md:w-[400px] bg-white rounded-md flex flex-col shadow-md hover:translate-x-1 hover:scale-105 transition-all ease-in-out cursor-pointer"
	href={`/shop/${shop.slug}`}
>
	<div class="w-full rounded-md h-[300px] overflow-clip">
		<img src={shop.shopLogo?.url} alt="Header" class="object-cover w-full h-full" />
	</div>
	<div class="w-full px-2 py-3">
		<h2 class="text-xl font-bold">
			{shop.shopName}
		</h2>
		<p class="text-sm md:text-base">
			{truncateText(shop.shortDescription)}
		</p>
	</div>
</a>
