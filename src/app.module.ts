import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


/// Nest.jsがしてくれる
// new AppModule();
// const appService = new AppService();
// new AppController(appService);