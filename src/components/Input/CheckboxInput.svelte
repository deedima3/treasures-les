<script lang="ts">
  export let id: number;
  export let onClick: (id: number) => void;
  export let checked: boolean;
</script>

<input
  class="border-gray-500"
  type="checkbox"
  on:click={() => onClick(id)}
  {checked}
/>
