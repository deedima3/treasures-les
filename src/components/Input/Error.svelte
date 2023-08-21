<script lang="ts">
  import { ValidationMessage } from "@felte/reporter-svelte";

  export let name: string;
</script>

<ValidationMessage for={name} let:messages={message}>
  {#if message}
    <span class="text-sm text-red-500">{message}</span>
  {/if}
</ValidationMessage>
