import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { GameService } from './game.service';
import { Game } from './game.interface';
import { CreateGameDto } from './create-game.interface';
import { JoinGameDto } from './join-game-interface';

@Controller('game')
export class GameController {

    constructor(private readonly gameService: GameService) {
    }

    @Get(':id')
    getGame(@Param('id') id: string): Game {
        return this.gameService.getGame(id);
    }

    @Post()
    createGame(@Body() body: CreateGameDto): Game {
        return this.gameService.createGame(body);
    }

    @Post(':id/players')
    joinGame(@Param('id') id: string, @Body() body: JoinGameDto): Game {
        return this.gameService.addPlayerToGame(id, body.playerName)
    }
}
