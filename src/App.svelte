<script lang="ts">
  import { onMount } from "svelte";
  import { clear_loops } from "svelte/internal";
  import { Board } from "./services/board/Board";
  import { Character, Monster, Wolf } from "./services/character/Character";
  import type { Item } from "./services/character/Item";

	function onKeyDown(e) {
		 switch(e.keyCode) {
			 case 38:
				 PlayerChar.moveUp(board);
				 break;
			 case 40:
				 PlayerChar.moveDown(board);
				 break;
			 case 37:
				 PlayerChar.moveLeft(board);
				 break;
			 case 39:
				 PlayerChar.moveRight(board);
				 break;
		 }
    console.log("ClloserChar =>", board.getCloserCharacter(PlayerChar)?.nom);

     PlayerChar=PlayerChar;
     board = board;
	}

  let Ennemies: Array<Monster> = [
    new Wolf(2,5, 4, 3, 7, [], "https://i.pinimg.com/564x/c8/e3/ef/c8e3efd9b774fa98bbada4d606bec70c.jpg", "6|5"),
    new Wolf(2,5, 4, 3, 7, [], "https://i.pinimg.com/564x/c8/e3/ef/c8e3efd9b774fa98bbada4d606bec70c.jpg", "12|6"),
    new Wolf(2,5, 4, 3, 7, [], "https://i.pinimg.com/564x/c8/e3/ef/c8e3efd9b774fa98bbada4d606bec70c.jpg", "13|6"),
  ];
  let PlayerChar = new Character("Thanaën", 6, 9, 7, 8, 9, [], "https://i.pinimg.com/564x/50/b5/07/50b50786086ccd0b202424b36163a545.jpg", "5|3");
  let board = new Board();
    
  onMount(() => {
    board.addCharacter(PlayerChar);
    board.addCharacter(Ennemies[0]);
    board.addCharacter(Ennemies[1]);
    board= board;
  });
</script>

<main style="background-color:black">
  <!-- drawn html of board  -->
  <div class="board">
    {#each board.map as row, i (i)}
      <div class="row">
        {#each row as cell, j (j)}
          <div class="cell">
            {#if cell.color === "black"}
              <div class="wall" >
                {#if cell.occupedBy}
                  <div class="character left">
                    <img style="z-index" src="{cell.occupedBy.skinImgUrl}" alt="">
                    <br>
                    {cell.occupedBy.nom}
                  </div>
                {/if}
              </div>
            {:else if cell.color === "green"}
              <div class="floor" style="color:white;">
                
                {#if cell.occupedBy != null}
                
                  <div class="character">
                    <img style="z-index:0000" src="{cell.occupedBy.skinImgUrl}" alt="">
                    <br>
                    {cell.occupedBy.nom}
                  </div>
                  
                {/if}
                  
              </div>
            {/if}
          </div>
        {/each}
      </div>
    {/each}
  </div>

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
      <div class="divider">
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
      </div>
    {/key}
  {/each}

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
        <li>
          <button
            on:click={function () {
              Ennemy.heal(PlayerChar.clairvoyance);
              Ennemy = Ennemy;
            }}
          >
              Soigner
          </button>
        </li>
      </ul>
    {/key}
  {/each}
</main>
<svelte:window on:keydown|preventDefault={onKeyDown} />
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
  .row {
    display: flex;
    flex-direction: row;
    width: 100%;
  }
  .column {
    display: flex;
    flex-direction: column;
  }
  .cell {
    position: relative;
  }
  .character  {
    position: relative;
  }
  .character img {
    height:100%;
    width:100%;
    position: relative;
  }
  .wall {
    width: 50px;
    height: 50px;
    background-image: url("data:image/jpeg;base64,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");
  }
  .floor {
    width: 50px;
    height: 50px;
    background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlj1eH-zSugKDYxdQ-_5xiXPxycr21JJZYgpe5Ybf6wQrjfKJ3WaNtMfU9jTzTdbfhsCk&usqp=CAU");
    background-size: cover;
  }
  /* create css game map  */
  #map {
    width: 500px;
    height: 500px;
    border: 1px solid #000;
    margin: 0 auto;
  }

  .character.top {
    rotate: 180;
  }
  .character.right {
    rotate: 90;
  }
  .character .left {
    rotate: -90;
  }
  .character.bottom{
    rotate: 0;
  }
</style>
