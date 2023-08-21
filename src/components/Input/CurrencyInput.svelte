<script lang="ts">
  import Label from "./Label.svelte";
  import Error from "./Error.svelte";
  import { createField } from "felte";

  export let name: string;
  export let label: string = "";
  export let intlFormatter = new Intl.NumberFormat("id-ID");

  let hiddenValue: number = 0;
  let showedValue: string = "";

  let hiddenRef: HTMLInputElement;

  const { field, onChange } = createField(name);

  const onChangeHandler = (e: Event) => {
    const target = e.target as HTMLInputElement;
    onChange(target.value);
  };
</script>

<div class="flex flex-col">
  {#if label}
    <Label {name} {label} />
  {/if}
  <input {name} />
  <input {name} type="hidden" {...field} on:change={onChangeHandler} />
  <Error {name} />
</div>
