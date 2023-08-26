<script lang="ts">
	import type { Tour } from '$interfaces/data.interfaces';

	export let tour: Tour;

	const truncateText = (text: string | null) => {
		if (text) {
			return `${text.slice(0, 200)}...`;
		}
	};
</script>

<a
	class="w-full md:w-[400px] bg-white rounded-md flex flex-col shadow-md hover:translate-x-1 hover:scale-105 transition-all ease-in-out cursor-pointer"
	href={`/tour/${tour.slug}`}
>
	<div class="w-full rounded-md h-[300px] overflow-clip">
		<img src={tour.headerImage?.url} alt="Header" class="object-cover w-full h-full" />
	</div>
	<div class="w-full px-2 py-3">
		<h2 class="text-xl font-bold">
			{tour.title}
		</h2>
		<p class="text-sm md:text-base">
			{truncateText(tour.shortDescription)}
		</p>
	</div>
</a>
