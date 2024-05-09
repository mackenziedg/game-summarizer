<script lang="ts">
  export let summaryBody;
</script>

<div class="pl-12 pr-12 mt-8 text-sm">
  <p>
    {#await summaryBody}
    {:then summaryText}
      {@html summaryText.replace("\n", "<br/><br/>")}
    {/await}
  </p>
</div>
