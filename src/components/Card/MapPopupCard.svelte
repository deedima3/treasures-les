<script lang="ts">
	import type { SimpledDestination, SimpledProduct, Tour } from '$interfaces/data.interfaces';

	export let service: SimpledDestination | SimpledProduct | Tour;
	export let endpoint: string = '';

	const truncateText = (text: string | null) => {
		if (text) {
			return `${text.substring(0, 75)}...`;
		}
	};
</script>

<div class="flex max-w-sm gap-5 px-5 py-3 bg-white shadow-lg rounded-md">
	<div class="flex-shrink-0 w-24 h-24 rounded-md overflow-clip">
		<img src={service.headerImage?.url} alt="Service" class="object-cover w-full h-full" />
	</div>
	<div class="flex flex-col">
		<a href="/{endpoint}/{service.slug}">
			<p class="text-xl">{service.title}</p>
			<p class="text-sm">
				{truncateText(service.shortDescription)}
			</p>
		</a>
	</div>
</div>
