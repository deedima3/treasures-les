<script lang="ts">
	import BlogCard from '$components/Card/BlogCard.svelte';
	import GridContainer from '$components/Container/GridContainer.svelte';
	import PageTitle from '$components/SEO/PageTitle.svelte';
	import Title from '$components/Title/Title.svelte';
	import type { PageData } from '$houdini/types/src/routes/blog/$houdini';

	export let data: PageData;

	$: ({ Blogs } = data);
</script>

<Title
	title="News Portal"
	subtitle="Unveiling the Life of Les Village Community: Daily Life, Culture, and Traditions"
/>
<PageTitle title="Blog" />
{#if $Blogs.data}
	<GridContainer>
		{#each $Blogs.data.blogs as blog}
			<BlogCard {blog} />
		{/each}
	</GridContainer>
{/if}
<!-- 
<pre>
	{JSON.stringify($Blogs, null, 4)}
</pre> -->
