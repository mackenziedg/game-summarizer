<script lang="ts">
  export let summary;
</script>

<div class="pl-12 pr-12 mt-8 text-sm">
  <p>
    {@html summary.summary.replace("\n", "<br/><br/>")}
  </p>
</div>
