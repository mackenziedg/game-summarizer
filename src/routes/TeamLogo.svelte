<script lang="ts">
  export let city: string;
  export let name: string;
</script>

<img
  src="/logos/{name}.png"
  alt="{city} {name} logo"
  class="lg:max-h-24 lg:h-auto lg:max-w-24 lg:w-auto
  max-h-12 h-auto max-w-12 w-auto align-middle"
/>
