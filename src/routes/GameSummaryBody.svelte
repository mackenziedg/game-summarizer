<script lang="ts">
  export let summary;
</script>

<div class="pl-12 pr-12 mt-4 lg:text-sm text-xs">
  <p>
    {@html summary.summary.replace("\n", "<br/><br/>")}
  </p>
</div>
