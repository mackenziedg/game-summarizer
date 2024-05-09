<script lang="ts">
import GameSummaryHeader from "./GameSummaryHeader.svelte";
import GameSummaryBody from "./GameSummaryBody.svelte";

export let summary;
</script>

<div class="
  min-w-fit
  pt-4 pb-8
  ml-10 mr-10
  rounded-lg
  bg-slate-200
  dark:bg-zinc-800"
>
  <GameSummaryHeader summary={summary} />
  <GameSummaryBody summary={summary} />
</div>
