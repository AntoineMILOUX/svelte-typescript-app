import type { Character } from "../character/Character";

// ceate class for rpg game map
export class Board {
    map: Array<Array<Tile>>;
    constructor() {
       
        this.map = this.draw();
    }    
    draw(): Tile[][] {
        for (let i = 0; i < map.length; i++) {
            let row = "";
            for (let j = 0; j < map[i].length; j++) {
                map[i][j].id = i.toString()+"|"+j.toString();
                row += map[i][j] + " ";
            }
        }
        return map;
    }
    // get the map
    getMap() {
        return this.map;
    }
    // set the map
    setMap(map) {
        this.map = map;
    }
    addCharacter(character: Character) {
        let tile = this.getTileById(character.tileId);
        if(tile){
        console.log('tile', tile)
        tile.occupedBy = character;
        }
    }
    removeCharacter(character: Character) {
        let tile = this.getTileById(character.tileId);
        if(tile){
        tile.occupedBy = null;
        }
    }
    getTileById(tileId: string) : Tile {
        for (let i = 0; i < this.map.length; i++) {
            for (let j = 0; j < this.map[i].length; j++) {
                if (this.map[i][j].id == tileId) {
                    console.log(this.map[i][j].id, tileId)
                    return this.map[i][j];
                }
            }
        }
    }
    getCloserCharacter(character: Character) : Character {
        let tile = this.getTileById(character.tileId);
        let x = parseInt(tile.id.split('|')[0]);
        let y = parseInt(tile.id.split('|')[1]);
        let tileUp = this.getTileById((x-1) + '|' + y);
        let tileDown = this.getTileById((x+1) + '|' + y);
        let tileLeft = this.getTileById(x + '|' + (y-1));
        let tileRight = this.getTileById(x + '|' + (y+1));
        let closerCharacter = null;
        if(tileUp.occupedBy){
            closerCharacter = tileUp.occupedBy;
        }
        if(tileDown.occupedBy){
            closerCharacter = tileDown.occupedBy;
        }
        if(tileLeft.occupedBy){
            closerCharacter = tileLeft.occupedBy;
        }
        if(tileRight.occupedBy){
            closerCharacter = tileRight.occupedBy;
        }
        return closerCharacter;
    }
}




// create a tile  object for game rpg map

export class Tile {
    id :string; 
    color: string;
    backgroundImage : string | null;
    occupedBy : Character | null;


    constructor(color: string) {
      
        this.color = color;
    }
}

//













let map: Array<Array<Tile>> = [
    [new Tile("black"), new Tile("black"), new Tile("black"), new Tile("black"), new Tile("black"), new Tile("black"), new Tile("black"), new Tile("black"), new Tile("black"), new Tile("black"), new Tile("black"), new Tile("black"), new Tile("black"), new Tile("black"), new Tile("black"), new Tile("black"), new Tile("black"), new Tile("black"), new Tile("black"), new Tile("black"), new Tile("black"), new Tile("black"), new Tile("black"), new Tile("black"), new Tile("black"), new Tile("black"), new Tile("black"), new Tile("black")],
    [new Tile("black"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"),  new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"),  new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("black")],
    [new Tile("black"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"),  new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"),  new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("black")],
    [new Tile("black"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"),  new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"),  new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("black")],
    [new Tile("black"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"),  new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"),  new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("black")],
    [new Tile("black"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"),  new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"),  new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("black")],
    [new Tile("black"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"),  new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"),  new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("black")],
    [new Tile("black"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"),  new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"),  new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("black")],
    [new Tile("black"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"),  new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"),  new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("black")],
    [new Tile("black"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"),  new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"),  new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("black")],
    [new Tile("black"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"),  new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"),  new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("black")],
    [new Tile("black"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"),  new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"),  new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("black")],
    [new Tile("black"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"),  new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"),  new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("black")],
    [new Tile("black"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"),  new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"),  new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("black")],
    [new Tile("black"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"),  new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"),  new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("black")],
    [new Tile("black"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"),  new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"),  new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("black")],
    [new Tile("black"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"),  new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"),  new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("black")],
    [new Tile("black"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"),  new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"),  new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("black")],
    [new Tile("black"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"),  new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"),  new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("black")],
    [new Tile("black"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"),  new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"),  new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("green"), new Tile("black")],
    [new Tile("black"), new Tile("black"), new Tile("black"), new Tile("black"), new Tile("black"), new Tile("black"), new Tile("black"), new Tile("black"), new Tile("black"), new Tile("black"), new Tile("black"), new Tile("black"), new Tile("black"), new Tile("black"), new Tile("black"), new Tile("black"), new Tile("black"), new Tile("black"), new Tile("black"), new Tile("black"), new Tile("black"), new Tile("black"), new Tile("black"), new Tile("black"), new Tile("black"), new Tile("black"), new Tile("black"), new Tile("black")],

]