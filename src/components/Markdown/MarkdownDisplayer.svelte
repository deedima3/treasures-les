<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';

	export let content: string;
</script>

<div class="w-full max-w-screen-xl px-5 prose">
	<SvelteMarkdown source={content} />
</div>
