<script lang="ts">
  export let summary;
  const away_team_score = summary.boxscore[1][summary.boxscore[1].length - 3];
  const home_team_score = summary.boxscore[2][summary.boxscore[2].length - 3];
  const home_team_weight = home_team_score > away_team_score ? "font-extrabold" : "font-normal";
  const away_team_weight = away_team_score > home_team_score ? "font-extrabold" : "font-normal";
</script>

<div class="pl-8 pr-8 mb-4 flex-col">
  <div class="flex justify-evenly">
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
      <h3 class="lg:text-md text-sm text-center {away_team_weight}">
        {summary.away_team_city}
      </h3>
      <h1 class="lg:text-2xl text-lg text-center {away_team_weight}">
        {summary.away_team_name}
      </h1>
      <h3 class="lg:text-xl text-md text-center {away_team_weight}">
        {away_team_score}
      </h3>
    </div>

    <div id="home-team-info">
      <h3 class="lg:text-md text-sm text-center {home_team_weight}">
        {summary.home_team_city}
      </h3>
      <h1 class="lg:text-2xl text-lg text-center {home_team_weight}">
        {summary.home_team_name}
      </h1>
      <h3 class="lg:text-xl text-md text-center {home_team_weight}">
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

  <div class="overflow-x-auto">
  <table class="m-auto text-xs lg:text-base text-center mt-4">
    <thead>
      <tr>
        <th></th>
        {#each summary.boxscore[0].slice(1) as cell}
          <th class="min-w-5 lg:min-w-7"> {cell} </th>
        {/each}
      </tr>
    </thead>

    <tbody>
      <tr>
          <td> 
            <span class="hidden lg:block">
              {summary.boxscore[1][0]} 
            </span>
          </td>
        {#each summary.boxscore[1].slice(1) as cell}
          <td> {cell} </td>
        {/each}
      </tr>

      <tr>
          <td>
            <span class="hidden lg:block">
              {summary.boxscore[2][0]} 
            </span>
          </td>
        {#each summary.boxscore[2].slice(1) as cell}
          <td> {cell} </td>
        {/each}
      </tr></tbody
    >
  </table>
    </div>
</div>
