<script lang="ts">
  import { lang } from "./stores.ts";

  export let summary;

  let langValue;

  lang.subscribe((v: string) => {
    langValue = `summary_${v}`;
  });

  const switchLang: string = () => {
    lang.update((v: string) => {
      if ($lang === "en") {
        return "es";
      } else if ($lang == "es") {
        return "en";
      }
    });
  };
</script>

<div class="px-4 lg:px-8 mt-4 text-sm lg:text-base xl:text-lg inconsolata">
  <button on:click={switchLang} class="font-bold hover:text-orange-300"
    >{$lang}</button
  >
  <p>
    {@html summary[langValue].replace("\n", "<br/><br/>")}
  </p>
</div>
