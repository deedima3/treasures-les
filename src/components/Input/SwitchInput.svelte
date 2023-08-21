<script lang="ts">
  import { createSwitch, melt } from "@melt-ui/svelte";
  import { createField } from "felte";
  import Label from "./Label.svelte";
  import Error from "./Error.svelte";
  import { writable } from "svelte/store";

  export let disabled: false;
  export let name: string;
  export let label: string = "";

  const checked = writable(false);

  const { field, onInput, onBlur } = createField(name);

  const {
    elements: { root, input },
  } = createSwitch({
    disabled: disabled,
    checked: checked,
  });

  function handleInput(e) {
    onInput(e.target.value);
    checked.set(e.target.value);
  }
</script>

<div class="flex flex-col">
  {#if label}
    <Label {name} {label} />
  {/if}
  <button
    use:melt={$root}
    class="relative h-6 w-11 cursor-default rounded-full bg-magnum-800 transition-colors data-[state=checked]:bg-magnum-950"
    id={name}
  >
    <span
      class="block h-5 w-5 translate-x-0.5 rounded-full bg-white
                transition-transform will-change-transform
                {$checked && 'translate-x-[22px]'}"
    />
    <input
      use:melt={$input}
      on:change={handleInput}
      on:blur={onBlur}
      use:field
    />
  </button>
  <Error {name} />
</div>
