<script lang="ts">
  import Label from "./Label.svelte";
  import Error from "./Error.svelte";
  import { createField } from "felte";

  export let name: string;
  export let label: string;

  const { field, onBlur, onInput } = createField(name);

  function handleInput(e) {
    onInput(e.currentTarget.innerText);
  }
</script>

<div class="flex flex-col">
  {#if label}
    <Label {name} {label} />
  {/if}
  <input
    type="password"
    class="border-[1px] border-gray-400 w-[250px] h-[30px] rounded-md px-3 py-5 focus:border-brand-dark"
    {name}
    on:blur={onBlur}
    on:input={handleInput}
    {...field}
  />
  <Error {name} />
</div>
