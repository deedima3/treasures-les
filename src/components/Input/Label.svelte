<script lang="ts">
	export let label: string = '';
	export let name: string = '';
</script>

{#if label}
	<label class="font-roboto text-base" for={name}>
		{label}
	</label>
{/if}
