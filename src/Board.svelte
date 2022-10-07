<script>
    export let G;
    export let ctx;
    export let moves;
  
    let winner;
    $: {
      if (!ctx.gameover) {
        winner = "";
      } else if (ctx.gameover.draw) {
        winner = "Draw";
      } else if (ctx.gameover.winner) {
        winner = `Player ${ctx.gameover.winner} wins!`;
      }
    }
  </script>
  
  <style>
    .grid {
      display: grid;
      grid-template-columns: repeat(3, 3rem);
      grid-template-rows: repeat(3, 3rem);
      grid-gap: 0.3rem;
    }
    button {
      font-size: 1rem;
      font-family: monospace;
    }
  </style>
  
  <div class="board">
    <div class="grid">
    {#each G.cells as cell, index}
      <button
        on:click={() => moves.clickCell(index)}
        disabled={cell !== null}
      >
        { cell || '' }
      </button>
    {/each}
    </div>
    {#if winner}
      <p>{winner}</p>
    {/if}
  </div>