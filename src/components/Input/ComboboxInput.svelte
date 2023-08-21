<script lang="ts">
	import Label from './Label.svelte';
	import Error from './Error.svelte';
	import { createField } from 'felte';
	import type { CustomOption } from '$interfaces/ui.interfaces';

	export let name: string;
	export let label: string = '';
	export let placeholder = '';
	export let disabled: boolean;
	export let search: string = '';
	export let options: CustomOption[] = [];

	let popupOpen: boolean = false;

	const { onChange } = createField(name);

	const onChangeHandler = (e: Event) => {
		const target = e.target as HTMLSelectElement;
		onChange(target.value);
	};
</script>

<div class="flex flex-col">
	{#if label}
		<Label {name} {label} />
	{/if}
	<div class="relative w-max">
		<input
			class="border-[1px] border-gray-400 w-[250px] h-[30px] rounded-md px-3 py-5 focus:border-brand-dark"
			{name}
			{placeholder}
			bind:value={search}
			{disabled}
		/>
		{#if popupOpen}
			<div class="top-0">
				<select class="" on:input={onChangeHandler}>
					{#each options as option}
						<option value={option.value}>
							{option.label}
						</option>
					{/each}
				</select>
			</div>
		{/if}
	</div>
	<Error {name} />
</div>
