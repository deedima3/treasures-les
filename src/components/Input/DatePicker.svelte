<script lang="ts">
  import Label from "./Label.svelte";
  import Error from "./Error.svelte";

  export let name: string;
  export let label: string = "";
  export let placeholder = "";
</script>

<div class="flex flex-col">
  {#if label}
    <Label {name} {label} />
  {/if}
  <input
    class="border-[1px] border-gray-400 w-[250px] h-[30px] rounded-md px-3 py-5 focus:border-brand-dark"
    {name}
    {placeholder}
  />
  <Error {name} />
</div>
