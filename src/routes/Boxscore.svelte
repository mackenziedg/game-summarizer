<script lang="ts">
  export let boxscore;
</script>

<div class="overflow-x-auto">
  <table class="m-auto text-xs lg:text-base text-center mt-4 font-mono">
    <thead>
      <tr>
        <th></th>
        {#each boxscore[0].slice(1) as cell}
          <th class="min-w-5 lg:min-w-7"> {cell} </th>
        {/each}
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>
          <span class="hidden lg:block xl:text-lg jersey-20-regular">
            {boxscore[1][0]}
          </span>
        </td>
        {#each boxscore[1].slice(1) as cell}
          <td> {cell} </td>
        {/each}
      </tr>

      <tr>
        <td>
          <span class="hidden lg:block xl:text-lg jersey-20-regular">
            {boxscore[2][0]}
          </span>
        </td>
        {#each boxscore[2].slice(1) as cell}
          <td> {cell} </td>
        {/each}
      </tr></tbody
    >
  </table>
</div>
