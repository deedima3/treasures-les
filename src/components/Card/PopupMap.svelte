<script lang="ts">
	import type { SimpledDestination, SimpledProduct } from '$interfaces/data.interfaces';

	export let service: SimpledDestination | SimpledProduct;
	export let href: string;

	const truncateText = (text: string | null) => {
		if (text) {
			return `${text.substring(0, 75)}...`;
		}
	};
</script>

<a class="flex max-w-sm gap-5 px-5 py-3 bg-white" {href}>
	<div class="flex-shrink-0 w-24 h-24 rounded-md overflow-clip">
		<img src={service.headerImage?.url} alt="Service" class="object-cover w-full h-full" />
	</div>
	<div class="flex flex-col">
		<p class="text-xl">{service.title}</p>
	</div>
</a>
