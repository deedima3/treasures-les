<script lang="ts">
	import type { Shop } from '$interfaces/data.interfaces';
	import SocialIcons from '@rodneylab/svelte-social-icons';

	export let shop: Shop;

	const generateWa = (number: string | null) => {
		return `https://wa.me/${number}`;
	};
</script>

<div class="flex items-center w-full gap-5 px-2 py-5 bg-white rounded-md shadow-md">
	<a href="/shop/{shop.slug}">
		<div class="w-20 h-20 rounded-md">
			<img src={shop.shopLogo?.url} alt="Shop Logo" class="w-full h-full" />
		</div>
	</a>
	<div class="flex flex-col">
		<a href="/shop/{shop.slug}">
			<p class="text-lg font-bold">{shop.shopName}</p>
		</a>
		<div class="flex gap-5">
			<a href={generateWa(shop.waNumber)}>
				<SocialIcons network="whatsapp" width={30} height={30} />
			</a>
			<a href={shop.instagramLink}>
				<SocialIcons network="instagram" width={30} height={30} />
			</a>
		</div>
	</div>
</div>
