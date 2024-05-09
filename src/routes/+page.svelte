<script lang="ts">
  // TODO: overall flow should be like
  // FE -> API : get all summaries (for date)
  // FE : generate component for each
  import GameSummary from "./GameSummary.svelte";
  import type { PageServerData } from './$types';
  import { onMount } from "svelte";

  export let data: PageServerData;
</script>

<div class="
  flex-col p-10
  bg-zinc-50 text-zinc-800
  dark:bg-zinc-800 dark:text-zinc-50"
>

  {#each data.summaries as summary}
    <GameSummary summary={summary} />
  {/each}
</div>

