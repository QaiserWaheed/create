import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/Entities/User.entity';
 
import { UserModule } from './src/user/user.module';
 
const DB = TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'LoginSystem',
  entities: [User],
  synchronize: true,
})




@Module({
  imports: [UserModule, DB],
  
controllers: [],
  providers: [],
})
export class AppModule {}
