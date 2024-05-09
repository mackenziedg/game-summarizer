<script lang="ts">
  import GameSummary from "./GameSummary.svelte";
  import type { PageServerData } from './$types';
  import { onMount } from "svelte";

  export let data: PageServerData;

  let date = new Date();
  date.setDate(date.getDate() - 1);
  const yesterday = date.toLocaleString().split(", ")[0];
</script>

<div class="flex-col p-10">

  <header>
    <a href="/about" class="float-right clear-both hover:text-orange-300">About</a>
    <h1 class="text-center text-3xl font-bold">
      Game Summaries for {yesterday}
    </h1>
  </header>

  {#each data.summaries as summary}
    <GameSummary summaryHeader={summary[0]} summaryBody={summary[1]} />
  {/each}
</div>

