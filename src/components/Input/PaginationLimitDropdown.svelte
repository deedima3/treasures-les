<script lang="ts">
  import { PAGINATION_LIMIT_OPTION } from "@/constant/constant";

  export let changePerPage: (limit: number) => void;
</script>

<select
  class=""
  on:change={(e) => {
    changePerPage(parseInt(e.target.value));
  }}
>
  {#each PAGINATION_LIMIT_OPTION as option}
    <option value={option.value}>
      {option.label}
    </option>
  {/each}
</select>
