<script lang="ts">
  import GameSummaryHeader from "./GameSummaryHeader.svelte";
  import GameSummaryBody from "./GameSummaryBody.svelte";

  export let summaryHeader;
  export let summaryBody;
</script>

<div class="
  m-auto pl-4 pr-4 pt-8 pb-8
  mt-8 mb-8
  rounded-lg
  w-3/4
  bg-slate-200
  dark:bg-zinc-800"
>
  <GameSummaryHeader summaryHeader={summaryHeader} />
  <GameSummaryBody summaryBody={summaryBody} />
</div>
