<script lang="ts">
  import GameSummaryHeader from "./GameSummaryHeader.svelte";
  import GameSummaryBody from "./GameSummaryBody.svelte";

  export let summary;
</script>

<div class="p-2 lg:p-4">
  <div
    class="px-2 lg:px-8 pt-4 pb-6 rounded-lg bg-zinc-200 dark:bg-zinc-700 drop-shadow-lg"
  >
    <GameSummaryHeader {summary} />
    <GameSummaryBody {summary} />
  </div>
</div>
