<script lang="ts">
	import type { ShortDestination } from '$interfaces/api.interfaces';

	export let destination: ShortDestination;

	const croppedDescription = (description: string) => {
		return `${description.slice(0, 100)}`;
	};
</script>

<a href="/" class="flex-shrink-0" draggable="false">
	<div class="relative object-cover w-full h-full max-w-xs">
		<div
			class="absolute bg-gradient-to-b from-transparent via-transparent to-black z-[1] h-full w-full transition-all"
		/>
		<div class="absolute flex flex-col bottom-0 text-white font-mont w-full z-[2] py-3 px-3">
			<h6 class="text-lg font-bold">
				{destination.title}
			</h6>
			<p class="text-xs">
				{croppedDescription(destination.shortDescription)}
			</p>
		</div>
		<div class="h-[300px] w-[200px] md:h-[400px] md:w-[300px]">
			<img src={destination.image.url} alt="Alt" class="object-cover w-full h-full" />
		</div>
	</div>
</a>
