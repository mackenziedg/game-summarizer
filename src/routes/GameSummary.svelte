<script lang="ts">
  import GameSummaryHeader from "./GameSummaryHeader.svelte";
  import GameSummaryBody from "./GameSummaryBody.svelte";

  export let summary: String;
</script>

<div class="
  m-auto pl-4 pr-4 pt-8 pb-8
  mt-8 mb-8
  rounded-lg
  w-1/2
  dark:bg-zinc-700"
>
  <GameSummaryHeader />
  <GameSummaryBody summary={summary} />
</div>
