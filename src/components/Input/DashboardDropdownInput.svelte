<script lang="ts">
	import type { CustomOption } from '$interfaces/ui.interfaces';

	export let value: number | string;
	export let options: CustomOption[];
</script>

<select
	class="border-[1px] border-gray-400 w-[100px] h-[30px] rounded-md px-3 py-5 focus:border-brand-dark text-black"
	bind:value
>
	{#each options as option}
		<option value={option.value}>
			{option.label}
		</option>
	{/each}
</select>
