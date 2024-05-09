<script lang="ts">
  export let summary;
</script>

<div class="pl-8 pr-8 mb-4 flex-col">
  <div class="flex justify-evenly">
    <div id="away-team-logo">
      <img
        src="/logos/{summary.away_team_name}.png"
        alt="{summary.away_team_city} {summary.away_team_name} logo"
        class="float-left max-h-24 h-auto max-w-24 w-auto align-middle"
      />
    </div>
    <div id="away-team-info">
      <h3 class="text-md text-center">
        {summary.away_team_city}
      </h3>
      <h1 class="text-2xl text-center">
        {summary.away_team_name}
      </h1>
      <h3 class="text-xl font-bold text-center">
        {summary.boxscore[1][summary.boxscore[1].length - 3]}
      </h3>
    </div>

    <div id="home-team-info">
      <h3 class="text-md text-center">
        {summary.home_team_city}
      </h3>
      <h1 class="text-2xl text-center">
        {summary.home_team_name}
      </h1>
      <h3 class="text-xl font-bold text-center">
        {summary.boxscore[2][summary.boxscore[2].length - 3]}
      </h3>
    </div>
    <div id="home-team-logo">
      <img
        src="/logos/{summary.home_team_name}.png"
        alt="{summary.home_team_city} {summary.home_team_name} logo"
        class="float-left max-h-24 h-auto max-w-24 w-auto align-middle"
      />
    </div>
  </div>

  <table class="m-auto text-center mt-4">
    <thead>
      <tr>
        <th></th>
        {#each summary.boxscore[0].slice(1) as cell}
          <th class="min-w-7"> {cell} </th>
        {/each}
      </tr>
    </thead>

    <tbody>
      <tr>
        {#each summary.boxscore[1] as cell}
          <td> {cell} </td>
        {/each}
      </tr>

      <tr>
        {#each summary.boxscore[2] as cell}
          <td> {cell} </td>
        {/each}
      </tr></tbody
    >
  </table>
</div>
