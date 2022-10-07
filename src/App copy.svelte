<script>
  import { Client } from "boardgame.io/client";
  import { onMount } from "svelte";
  import { Game } from "./Game";
  import Board from "./Board.svelte";

  let client, state;
  $: {
    client = client || Client({ game: Game });
    state = $client; // subscribe to client state
  }

  onMount(() => {
    client.start();
    return () => client.stop();
  });
</script>

<style></style>

<main>
  {#if state}
	  <Board G={state.G} ctx={state.ctx} moves={client.moves} />
  {:else}
    <p>loading...</p>
  {/if}
</main>