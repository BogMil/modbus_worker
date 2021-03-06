import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ModbusService } from './modbus.service';
import {
  HttpLoggerService,
  ModbusTask,
  PlcServer,
  ScadaReader,
} from './modbus.task';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ScheduleModule.forRoot(),
    HttpModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    ModbusTask,
    ModbusService,
    PlcServer,
    ScadaReader,
    HttpLoggerService,
  ],
})
export class AppModule {}
