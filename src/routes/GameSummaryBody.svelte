<script lang="ts">
  export let summary;
</script>

<div class="px-4 lg:px-8 mt-4 lg:text-md text-sm inconsolata">
  <p>
    {@html summary.summary.replace("\n", "<br/><br/>")}
  </p>
</div>
