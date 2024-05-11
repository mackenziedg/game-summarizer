<script lang="ts">
  import Carousel from "svelte-carousel";
  import GameSummary from "./GameSummary.svelte";
  import type { PageServerData } from "./$types";

  let carousel;

  export let data: PageServerData;
  const summaries = data.summaries;

  function onKeyDown(e) {
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
      class="
      mt-8 lg:mt-0 float-right clear-both hover:text-orange-300 jersey-20-regular
      text-base lg:text-lg xl:text-xl
      "
    >
      About
    </a>
    <h1
      class="
      text-center text-xl lg:text-3xl sixtyfour
      "
    >
      Game Summaries for {summaries[0].date}
    </h1>
  </header>

  <div class="mt-4 block lg:hidden">
    <Carousel bind:this={carousel} duration={250} arrows={false}>
      {#each summaries as summary}
        <GameSummary {summary} />
      {/each}
    </Carousel>
  </div>

  <div class="mt-4 hidden lg:block">
    <Carousel bind:this={carousel} duration={250}>
      {#each summaries as summary}
        <GameSummary {summary} />
      {/each}
    </Carousel>
  </div>
</div>
<svelte:window on:keydown={onKeyDown} />
