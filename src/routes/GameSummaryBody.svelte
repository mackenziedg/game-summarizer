<script lang="ts">
  export let summary;

  $: langId = "summary_en";
  $: summaryText = summary[langId]
  const switchLang = () => {
    if (langId === "summary_en") {
      langId = "summary_es";
    } else {
      langId = "summary_en";
    }
  };
</script>

<div class="px-4 lg:px-8 mt-4 text-sm lg:text-base xl:text-lg inconsolata">
  <button on:click={switchLang} class="font-bold hover:text-orange-300">{langId.split("_")[1]}</button>
  <p>
    {@html summaryText.replace("\n", "<br/><br/>")}
  </p>
</div>
