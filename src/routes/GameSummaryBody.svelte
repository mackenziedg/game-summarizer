<script lang="ts">
  export let summary;
</script>

<div class="pl-12 pr-12">
  <p id="summary">
    {#await summary}
    {:then summaryText}
      {@html summaryText.replace("\n", "<br/><br/>")}
    {/await}
  </p>
</div>
