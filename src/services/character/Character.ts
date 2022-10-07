import type { Item, Weapon } from "./Item";
import {d10} from "../dices/Dices"
import type { Board } from "../board/Board";
export class Character {
    nom: string;
    // attributes 
    adresse : number = 10;
    puissance: number = 10;
    clairvoyance : number = 10;
    presence : number = 10;
    trempe : number = 10;

    pv: number;
    maxPv: number; 
    defenseBase : number; 
    defense     : number;

    // skills
    // inventory
    inventory: Array<Item> = []; 

    armeEquipee : Weapon | null = null; 
    
    mort : Boolean;
    skinImgUrl : string;
    tileId : string;
    // equipment
    // spells
    constructor(nom: string, adresse: number, puissance: number, clairvoyance: number, presence: number, trempe: number, inventory: Array<Item>, skinImgUrl: string = null, tileId: string = null) {
        this.nom = nom;
        this.adresse = adresse;
        this.puissance = puissance;
        this.clairvoyance = clairvoyance;
        this.presence = presence;
        this.trempe = trempe;

        this.maxPv = (puissance + trempe) * 2 + 5;
        this.pv = this.maxPv;
        this.defenseBase = this.trempe + 5;
        this.defense = this.defenseBase;
        
        this.inventory = inventory;
        this.skinImgUrl = skinImgUrl;
        this.tileId = tileId;
    }
    addItem(item: Item) : void {
        this.inventory.push(item);
    }
    removeItem(item: Item) :void {
        this.inventory = this.inventory.filter((i) => i !== item);
    }
    equipWeapon(weapon: Weapon) :void {
        this.armeEquipee = weapon;
    }
    unequipWeapon() :void {
        this.armeEquipee = null;
    }
    attack (target: Character) :void {
        let degats= 0; 
        let d = d10(); 
        if (this.armeEquipee) {
             degats = this.armeEquipee.degats + this.puissance+d;
        } 
        else {
             degats = this.puissance +3+  d;
        }
        console.log(this.nom + " attaque " + target.nom +" en faisant " + degats + "("+this.armeEquipee+"+"+this.puissance+"+"+d+") points de dégats");
        target.takeDamage(degats);
    }
    takeDamage(degats: number) :void {
        console.log(this.nom + " perds : ", degats + " points de vie. Il a maintenant " + this.pv + " points de vie");
        this.pv = this.pv- degats;
        if(this.pv <= 0) {
            this.pv = 0;
            this.mort = true;
        }
    }
    heal(healAmount: number) :void {
        this.pv = this.pv + healAmount;
        if(this.pv > this.maxPv) {
            this.pv = this.maxPv;
        }
    },
    moveUp(board : Board){
        board.removeCharacter(this);
        let Positions:string[] =  this.tileId.split('|');
        let x = parseInt(Positions[0]);
        let y = parseInt(Positions[1]);
        this.tileId = (x-1) + '|' + y;
        board.addCharacter(this);
    }
    moveDown(board: Board){
        board.removeCharacter(this);
        let Positions:string[] =  this.tileId.split('|');
        let x = parseInt(Positions[0]);
        let y = parseInt(Positions[1]);
        this.tileId = (x+1) + '|' + y;
        board.addCharacter(this);

    }
    moveLeft(board: Board){
        board.removeCharacter(this);
        let Positions:string[] =  this.tileId.split('|');
        let x = parseInt(Positions[0]);
        let y = parseInt(Positions[1]);
        this.tileId = x + '|' + (y-1);
        board.addCharacter(this);

    }
    moveRight(board: Board){
        board.removeCharacter(this);
        let Positions:string[] =  this.tileId.split('|');
        let x = parseInt(Positions[0]);
        let y = parseInt(Positions[1]);
        this.tileId = x + '|' + (y+1);
        board.addCharacter(this);
        
    }
}

export class Player extends Character {
    constructor(nom: string, adresse: number, puissance: number, clairvoyance: number, presence: number, trempe: number, inventory: Array<Item>) {
        super(nom, adresse, puissance, clairvoyance, presence, trempe, inventory);
    }
}

export class Monster extends Character {
    constructor(nom: string, adresse: number, puissance: number, clairvoyance: number, presence: number, trempe: number, inventory: Array<Item>, skinImgUrl: string = null, tileId: string = null) {
        super(nom, adresse, puissance, clairvoyance, presence, trempe, inventory, skinImgUrl, tileId);
    }
}

export class NPC extends Character {
    constructor(nom: string, adresse: number, puissance: number, clairvoyance: number, presence: number, trempe: number, inventory: Array<Item>) {
        super(nom, adresse, puissance, clairvoyance, presence, trempe, inventory);
    }
}

export class Wolf extends Monster{
    constructor(adresse: number, puissance: number, clairvoyance: number, presence: number, trempe: number, inventory: Array<Item>, skinImgUrl: string = null, tileId: string = null) {
        super("Loup", adresse, puissance, clairvoyance, presence, trempe, inventory, skinImgUrl, tileId);
    }
}

