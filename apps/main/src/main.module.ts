import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MainController } from './main.controller';
import { MainService } from './main.service';
import { CommonModule } from '@app/common';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    CommonModule.registerAsync({
      useFactory: (configService: ConfigService) => ({
        url: configService.getOrThrow('URL_MAIN'),
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [MainController],
  providers: [MainService],
})
export class MainModule {}
