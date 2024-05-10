<script lang="ts">
  import Boxscore from "./Boxscore.svelte";
  import TeamLogo from "./TeamLogo.svelte";

  export let summary;

  const away_team_score = summary.boxscore[1][summary.boxscore[1].length - 3];
  const home_team_score = summary.boxscore[2][summary.boxscore[2].length - 3];

  const home_team_style =
    home_team_score > away_team_score ? "" : "text-zinc-500 dark:text-zinc-400";
  const away_team_style =
    away_team_score > home_team_score ? "" : "text-zinc-500 dark:text-zinc-400";
</script>

<div class="mb-4 flex-col">
  <div class="lg:hidden flex justify-between mx-6">
    <div id="away-team-logo">
      <TeamLogo city={summary.away_team_city} name={summary.away_team_name} />
    </div>

    <div id="home-team-logo">
      <TeamLogo city={summary.home_team_city} name={summary.home_team_name} />
    </div>
  </div>

  <div class="flex justify-between">
    <div id="away-team-logo" class="hidden lg:block">
      <TeamLogo city={summary.away_team_city} name={summary.away_team_name} />
    </div>

    <div id="away-team-info">
      <h3
        class="text-xs lg:text-base xl:text-xl text-center sixtyfour {away_team_style}"
      >
        {summary.away_team_city}
      </h3>
      <h1
        class="text-xl lg:text-3xl xl:text-5xl text-center jersey-20-regular {away_team_style}"
      >
        {summary.away_team_name}
      </h1>
      <h3
        class="text-xl lg:text-4xl xl:text-5xl text-center jersey-20-regular {away_team_style}"
      >
        {away_team_score}
      </h3>
    </div>

    <div class="text-2xl lg:text-6xl jersey-20-regular text-center self-center">
      @
    </div>

    <div id="home-team-info">
      <h3
        class="text-xs lg:text-base xl:text-xl text-center sixtyfour {home_team_style}"
      >
        {summary.home_team_city}
      </h3>
      <h1
        class="text-xl lg:text-3xl xl:text-5xl text-center jersey-20-regular {home_team_style}"
      >
        {summary.home_team_name}
      </h1>
      <h3
        class="text-xl lg:text-4xl xl:text-5xl text-center jersey-20-regular {home_team_style}"
      >
        {home_team_score}
      </h3>
    </div>

    <div id="home-team-logo" class="hidden lg:block">
      <TeamLogo city={summary.home_team_city} name={summary.home_team_name} />
    </div>
  </div>

  <Boxscore boxscore={summary.boxscore} />
</div>
