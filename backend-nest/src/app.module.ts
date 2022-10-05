import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GamesController } from './games/games.controller';
import { Game } from './models/game.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: process.env.TTASTATS_DB_URI,
      database: process.env.TTASTATS_NS,
      entities: [ Game ],
      ssl: true,
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }),
    TypeOrmModule.forFeature([Game]),
  ],
  controllers: [AppController, GamesController],
  providers: [AppService],
})
export class AppModule {}
