<script lang="ts">
  import Carousel from "svelte-carousel";
  import GameSummary from "./GameSummary.svelte";
  import type { PageServerData } from "./$types";

  let carousel;

  export let data: PageServerData;

  function onKeyDown(e) {
    console.log(e.keyCode);
    switch (e.keyCode) {
      case 37:
        carousel.goToPrev();
        break;
      case 39:
        carousel.goToNext();
        break;
    }
  }
</script>

<div
  class="
    m-auto
    max-w-screen-xl
    flex-col
    px-2
    py-3
    lg:px-10
    lg:py-6
"
>
  <header>
    <a
      href="/about"
      class="mt-8 lg:mt-0 float-right clear-both hover:text-orange-300 jersey-20-regular text-md lg:text-lg"
    >
      About
    </a>
    <h1
      class="
      text-center text-xl lg:text-3xl sixtyfour
      "
    >
      {#await data.summaries[0] then d}
        Game Summaries for {d.date}
      {/await}
    </h1>
  </header>

  <div class="mt-4">
    {#await data then d}
      <Carousel bind:this={carousel} duration={250}>
        {#each d.summaries as summary}
          {#await summary then s}
            <GameSummary summary={s} />
          {/await}
        {/each}
      </Carousel>
    {/await}
  </div>
</div>
<svelte:window on:keydown={onKeyDown} />
