<script lang="ts">
  export let boxscore;
</script>

<div class="overflow-x-auto">
  <table
    class="m-auto text-xs lg:text-base xl:text-xl text-center mt-4 font-mono"
  >
    <thead>
      <tr>
        <th></th>
        {#each boxscore.header as cell}
          <th class="min-w-5 lg:min-w-7"> {cell} </th>
        {/each}
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>
          <span class="hidden lg:block xl:text-2xl jersey-20-regular">
            {boxscore.away[0]}
          </span>
        </td>
        {#each boxscore.away.slice(1) as cell}
          <td> {cell} </td>
        {/each}
      </tr>

      <tr>
        <td>
          <span class="hidden lg:block xl:text-2xl jersey-20-regular">
            {boxscore.home[0]}
          </span>
        </td>
        {#each boxscore.home.slice(1) as cell}
          <td> {cell} </td>
        {/each}
      </tr></tbody
    >
  </table>
</div>
