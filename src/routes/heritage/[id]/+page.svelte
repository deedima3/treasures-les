<script lang="ts">
	import MarkdownDisplayer from '$components/Markdown/MarkdownDisplayer.svelte';
	import PageTitle from '$components/SEO/PageTitle.svelte';
	import type { PageData } from '$houdini/types/src/routes/blog/[id]/$houdini';

	export let data: PageData;

	$: ({ BlogDetail } = data);
</script>

{#if $BlogDetail.data && $BlogDetail.data.blog && $BlogDetail.data.blog.title}
	<PageTitle title={$BlogDetail.data.blog.title} />
	<main class="flex flex-col items-center">
		<div class="text-center">
			<!-- <h3 class="text-sm text-gray-400">{$BlogDetail.data.blog.publishedAt}</h3> -->
			<h1 class="text-4xl font-bold leading-tight px-5">{$BlogDetail.data.blog.title}</h1>
			<h4 class="mt-2 text-base px-5">{$BlogDetail.data.blog.subtitle}</h4>
		</div>
		{#if $BlogDetail.data.blog.headerImage}
			<div class="w-full md:h-[600px] overflow-clip flex flex-col justify-center items-center mt-10">
				<img src={$BlogDetail.data.blog.headerImage.url} alt="" class="object-cover w-full" />
			</div>
		{/if}
		{#if $BlogDetail.data.blog.content}
			<div class="py-10 text-justify">
				<MarkdownDisplayer content={$BlogDetail.data.blog.content.markdown} />
			</div>
		{/if}
	</main>
{/if}
