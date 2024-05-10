<script lang="ts">
  import Boxscore from "./Boxscore.svelte";

  export let summary;

  const away_team_score = summary.boxscore[1][summary.boxscore[1].length - 3];
  const home_team_score = summary.boxscore[2][summary.boxscore[2].length - 3];

  const home_team_style =
    home_team_score > away_team_score ? "" : "text-zinc-500 dark:text-zinc-400";
  const away_team_style =
    away_team_score > home_team_score ? "" : "text-zinc-500 dark:text-zinc-400";
</script>

<div class="pl-8 pr-8 mb-4 flex-col">
  <div class="flex justify-between">
    <div id="away-team-logo">
      <img
        src="/logos/{summary.away_team_name}.png"
        alt="{summary.away_team_city} {summary.away_team_name} logo"
        class="float-left
        lg:max-h-24 lg:max-w-24 lg:w-auto lg:h-auto
        max-h-12 max-w-12
        align-middle"
      />
    </div>
    <div id="away-team-info">
      <h3 class="text-xs lg:text-base text-center sixtyfour {away_team_style}">
        {summary.away_team_city}
      </h3>
      <h1 class="text-xl lg:text-3xl text-center jersey-20-regular {away_team_style}">
        {summary.away_team_name}
      </h1>
      <h3 class="text-xl lg:text-4xl text-center jersey-20-regular {away_team_style}">
        {away_team_score}
      </h3>
    </div>

    <div class="text-2xl lg:text-6xl jersey-20-regular text-center self-center">
      @
    </div>

    <div id="home-team-info">
      <h3 class="text-xs lg:text-base text-center sixtyfour {home_team_style}">
        {summary.home_team_city}
      </h3>
      <h1 class="text-xl lg:text-3xl text-center jersey-20-regular {home_team_style}">
        {summary.home_team_name}
      </h1>
      <h3 class="text-xl lg:text-4xl text-center jersey-20-regular {home_team_style}">
        {home_team_score}
      </h3>
    </div>
    <div id="home-team-logo">
      <img
        src="/logos/{summary.home_team_name}.png"
        alt="{summary.home_team_city} {summary.home_team_name} logo"
        class="float-left
        lg:max-h-24 lg:h-auto lg:max-w-24 lg:w-auto
        max-h-12 h-auto max-w-12 w-auto
        align-middle"
      />
    </div>
  </div>

  <Boxscore boxscore={summary.boxscore} />

</div>
