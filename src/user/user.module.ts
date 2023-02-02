import { Module } from '@nestjs/common';
import { User } from 'src/Entities/User.entity';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController]
  
})
export class UserModule {}
