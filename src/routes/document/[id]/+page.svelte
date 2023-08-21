<script lang="ts">
	import MarkdownDisplayer from '$components/Markdown/MarkdownDisplayer.svelte';
	import PageTitle from '$components/SEO/PageTitle.svelte';
	import type { PageData } from '$houdini/types/src/routes/document/[id]/$houdini';

	export let data: PageData;

	$: ({ Document } = data);
</script>

{#if $Document.data && $Document.data.document && $Document.data.document.title}
	<PageTitle title={$Document.data.document.title} />
	<main class="flex flex-col items-center">
		<div class="text-center">
			<h3 class="text-sm text-gray-400">{$Document.data.document.publishedAt}</h3>
			<h1 class="text-5xl font-bold">{$Document.data.document.title}</h1>
			<h4 class="mt-2 text-base">{$Document.data.document.subtitle}</h4>
		</div>
		{#if $Document.data.document.headerImage}
			<div class="w-full h-[600px] overflow-clip flex flex-col justify-center items-center mt-10">
				<img src={$Document.data.document.headerImage.url} alt="" class="object-cover w-full" />
			</div>
		{/if}
		{#if $Document.data.document.content}
			<div class="py-10">
				<MarkdownDisplayer content={$Document.data.document.content.markdown} />
			</div>
		{/if}
	</main>
{/if}
