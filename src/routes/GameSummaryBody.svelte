<script lang="ts">
  export let summary;
</script>

<div class="pl-12 pr-12 mt-4 lg:text-md text-sm inconsolata">
  <p>
    {@html summary.summary.replace("\n", "<br/><br/>")}
  </p>
</div>
