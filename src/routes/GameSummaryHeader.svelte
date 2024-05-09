<script lang="ts">
  export let summaryHeader;
</script>

<div class="pl-8 pr-8 mb-4 flex-col">
  <div class="flex justify-evenly">
    <div>
      <!-- <img src="./src/lib/nyy_logo.jpg" alt="Team logo" width=60 class="m-auto" /> -->
      {#await summaryHeader}
      {:then header}
      <h1 class="text-2xl text-left"> 
	{header.away_team}
      </h1>
      <h3 class="text-xl font-bold text-center"> 
	{header.box_score[1][header.box_score[1].length - 3]}
     </h3>
    {/await}
    </div>

    <div>
      <!-- <img src="./src/lib/nyy_logo.jpg" alt="Team logo" width=60 class="m-auto" /> -->
      {#await summaryHeader}
      {:then header}
      <h1 class="text-2xl text-right">
	{header.home_team}
      </h1>
      <h3 class="text-xl font-bold text-center"> 
	  {header.box_score[2][header.box_score[2].length - 3]}
      </h3>
      {/await}
    </div>
  </div>

  {#await summaryHeader}
  {:then header}
  <table class="m-auto text-center mt-4">
    <thead>
      <tr>
	  <th></th>
	{#each header.box_score[0].slice(1) as cell}
	  <th class="min-w-7"> {cell} </th>
	{/each}
      </tr>
    </thead>

    <tbody>
      <tr>
	{#each header.box_score[1] as cell}
	  <td> {cell} </td>
	{/each}
      </tr>

      <tr>
	{#each header.box_score[2] as cell}
	  <td> {cell} </td>
	{/each}
    </tbody>
  </table>
  {/await}

</div>
