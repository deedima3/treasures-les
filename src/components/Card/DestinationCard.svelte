<script lang="ts">
	import type { Destination } from '$interfaces/data.interfaces';

	export let destination: Destination;

	const truncateText = (text: string | null) => {
		if (text) {
			return `${text.slice(0, 200)}...`;
		}
	};
</script>

<a
	class="w-[400px] bg-white rounded-md flex flex-col shadow-md hover:translate-x-1 hover:scale-105 transition-all ease-in-out cursor-pointer"
	href={`/destination/${destination.slug}`}
>
	<div class="w-full rounded-md h-[300px] overflow-clip">
		<img src={destination.headerImage?.url} alt="Header" class="object-cover w-full" />
	</div>
	<div class="w-full px-2 py-3">
		<h2 class="text-xl font-bold">
			{destination.title}
		</h2>
		<p class="text-base">
			{truncateText(destination.shortDescription)}
		</p>
	</div>
</a>
