<script lang="ts">
export let summary;
</script>

<div class="pl-8 pr-8 mb-4 flex-col">
  <div class="flex justify-evenly">
    <div>
      <!-- <img src="./src/lib/nyy_logo.jpg" alt="Team logo" width=60 class="m-auto" /> -->
      <h1 class="text-2xl text-left"> 
	{summary.away_team_city}
	{summary.away_team_name}
      </h1>
      <h3 class="text-xl font-bold text-center"> 
	{summary.boxscore[1][summary.boxscore[1].length - 3]}
      </h3>
    </div>

    <div>
      <!-- <img src="./src/lib/nyy_logo.jpg" alt="Team logo" width=60 class="m-auto" /> -->
      <h1 class="text-2xl text-right">
	{summary.home_team_city}
	{summary.home_team_name}
      </h1>
      <h3 class="text-xl font-bold text-center"> 
	{summary.boxscore[2][summary.boxscore[2].length - 3]}
      </h3>
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
    </tbody>
  </table>

</div>
