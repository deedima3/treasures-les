<script lang="ts">
	import type { Product, Destination } from '$interfaces/data.interfaces';

	export let service: Destination | Product;

	const truncateText = (text: string | null) => {
		if (text) {
			return text.substring(0, 100);
		}
	};
</script>

<div class="flex max-w-sm px-5 py-3 bg-white shadow-lg">
	<div class="w-12 h-12">
		<img src={service.headerImage?.url} alt="Service" class="object-cover w-full h-full" />
	</div>
	<div class="flex flex-col">
		<p class="text-xl">{service.title}</p>
		<p class="text-sm">
			{truncateText(service.shortDescription)}
		</p>
	</div>
</div>
