<script lang="ts">
	import type { Blog } from '$interfaces/data.interfaces';

	export let blog: Blog;

	const truncateText = (text: string | null) => {
		if (text) {
			return `${text.slice(0, 200)}...`;
		}
	};
</script>

<a
	class="w-full md:w-[400px] bg-white rounded-md flex flex-col shadow-md hover:translate-x-1 hover:scale-105 transition-all ease-in-out cursor-pointer"
	href={`/heritage/${blog.slug}`}
>
	<div class="w-full rounded-md h-[300px] overflow-clip">
		<img src={blog.headerImage?.url} alt="Header" class="object-cover w-full h-full" />
	</div>
	<div class="w-full px-2 py-3">
		<h2 class="text-xl font-bold">
			{blog.title}
		</h2>
		<p class="text-sm md:text-base">
			{truncateText(blog.shortDescription)}
		</p>
	</div>
</a>
