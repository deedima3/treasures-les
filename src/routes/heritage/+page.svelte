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
	title="Heritage"
	subtitle="Unveiling the Life of Les Village Community: Daily Life, Culture, and Traditions"
	balineseScript="&#x1B29;&#x1B38;&#x1B24;&#x1B2C;&#x1B2E;&#x1B26;&#x1B24;&#x1B22;&#x1B44;&#x1B5F;"
/>
<PageTitle title="Heritage" />
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
