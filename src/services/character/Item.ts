export class Item {
    name: string;
    description: string;
    constructor(name: string, description: string) {
        this.name = name;
        this.description = description;
    }
}

export class Weapon extends Item {
    degats: number;
    defense : number

    constructor(name: string, description: string, degats: number, defense: number) {
        super(name, description);
        this.degats = degats;
        this.defense = defense;
    }
}

