<script lang="ts">
import Carousel from "svelte-carousel";
import GameSummary from "./GameSummary.svelte";
import type { PageServerData } from "./$types";

export let data: PageServerData;

let date = new Date();
date.setDate(date.getDate() - 1);
const yesterday = date.toLocaleString().split(", ")[0];
</script>

<div class="flex-col p-10">
  <header>
    <a href="/about" class="float-right clear-both hover:text-orange-300"
    >About</a
    >
    <h1 class="text-center text-3xl font-bold">
      Game Summaries for {yesterday}
    </h1>
  </header>

  <div class="flex mt-4">

    {#await data}
      {:then d}
      <Carousel>

        {#each d.summaries as summary}
          {#await summary}
            {:then s}
            <GameSummary summary={s} />
          {/await}
        {/each}

      </Carousel>
    {/await}

  </div>
</div>
