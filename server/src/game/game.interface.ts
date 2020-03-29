import { Player } from './player.interface';

export interface Game {
    id: string;
    name: string;
    players: Player[];
}

export interface GameMap {
    [id: string]: Game;
}
