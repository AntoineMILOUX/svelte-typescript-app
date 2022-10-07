<script lang="ts">
    import { Client } from "boardgame.io/client";
    import { onMount } from "svelte";
    import { Game } from "./game";
    

  import { Character, Monster } from "./services/character/Character";
  import type { Item } from "./services/character/Item";
  let Ennemies: Array<Monster> = [
    new Monster("Loup", 2, 5, 4, 3, 7, []),
    new Monster("Loup", 2, 5, 4, 3, 7, []),
  ];
  const PlayerChar = new Character("Thanaën", 6, 9, 7, 8, 9, []);
 
</script>

<main>
  {PlayerChar.nom}
  <br />
  <ul class="flex space-between">
    <li>Adresse : {PlayerChar.adresse}</li>
    <li>Puissance : {PlayerChar.puissance}</li>
    <li>Trempe : {PlayerChar.trempe}</li>
    <li>Clairvoyance : {PlayerChar.clairvoyance}</li>
    <li>Présence : {PlayerChar.presence}</li>
  </ul>

  <ul class="flex space-between">
    <li>
      Arme équipée : {PlayerChar.armeEquipee ? PlayerChar.armeEquipee : "N/A"}
    </li>
  </ul>

  {#each Ennemies as Ennemy, i (i)}
    {#key Ennemy}
      <div class="divider" />
      {Ennemy.nom}
      <br />
      <ul class="flex space-between">
        <li>Pv : {Ennemy.pv}/{Ennemy.maxPv}</li>
      </ul>
      <br />
      <ul class="flex space-between">
        <li>Adresse : {Ennemy.adresse}</li>
        <li>Puissance : {Ennemy.puissance}</li>
        <li>Trempe : {Ennemy.trempe}</li>
        <li>Clairvoyance : {Ennemy.clairvoyance}</li>
        <li>Présence : {Ennemy.presence}</li>
      </ul>
      <ul class=" flex space-between">
        <li>
          Arme équipée : {Ennemy.armeEquipee ? Ennemy.armeEquipee : "N/A"}
        </li>
      </ul>
      <ul class=" flex space-between">
        <li>
          <button
            on:click={function () {
              PlayerChar.attack(Ennemy);
              Ennemy = Ennemy;
            }}
          >
            Attaquer
          </button>
        </li>
      </ul>
    {/key}
  {/each}
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
  .flex {
    display: flex;
    flex-direction: row;
  }
  .space-around {
    justify-content: space-around;
  }
  .space-between {
    justify-content: space-between;
  }
  ul {
    border: solid 1px;
  }
  ul li {
    list-style: none;
  }
  ul li:last-child {
    border-right: none;
  }
  .divider {
    border-bottom: solid 4px;
  }
</style>
