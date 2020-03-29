import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Game, GameMap } from './game.interface';
import { CreateGameDto } from './create-game.interface';

@Injectable()
export class GameService {
    games: GameMap = {};

    getGame(gameId: string): Game {
        return this.games[gameId];
    }

    createGame(createGameDto: CreateGameDto) {
        const gameId = generateId();
        const host = {
            id: generateId(),
            name: createGameDto.hostName
        };
        const game = {id: gameId, name: createGameDto.gameName, players: [host]};
        this.games[gameId] = game;
        return game;
    }

    addPlayerToGame(gameId: string, playerName: string) {
        if (!this.games[gameId]) {
            console.log("uh oh");
            throw new Error('Game does not exist');
        }

        const player = {
            id: generateId(),
            name: playerName
        };
        const game = this.games[gameId];
        const players = [...game.players, player];
        this.games[gameId] = {...game, players};
        return this.games[gameId];
    }
}

const generateId = (): string => {
    return uuidv4().split('-')[0];
};
