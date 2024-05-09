<script lang="ts">
  import GameSummaryHeader from "./GameSummaryHeader.svelte";
  import GameSummaryBody from "./GameSummaryBody.svelte";

  export let summary;
</script>

<div
  class="
  pt-4 pb-4
  rounded-lg
  bg-zinc-200
  dark:bg-zinc-700"
>
  <GameSummaryHeader {summary} />
  <GameSummaryBody {summary} />
</div>
