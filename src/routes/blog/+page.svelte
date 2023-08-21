<script lang="ts">
	import BlogCard from '$components/Card/BlogCard.svelte';
	import PageTitle from '$components/SEO/PageTitle.svelte';
	import Title from '$components/Title/Title.svelte';
	import type { PageData } from '$houdini/types/src/routes/blog/$houdini';

	export let data: PageData;

	$: ({ Blogs } = data);
</script>

<Title title="Blog" subtitle="Find our updated info about les and bali!" />
<PageTitle title="Blog" />
{#if $Blogs.data}
	<div class="grid grid-cols-3 gap-10 mx-auto mt-16">
		{#each $Blogs.data.blogs as blog}
			<BlogCard {blog} />
		{/each}
	</div>
{/if}
<!-- 
<pre>
	{JSON.stringify($Blogs, null, 4)}
</pre> -->
