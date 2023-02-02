import { Column, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
export class User{
    
@PrimaryGeneratedColumn()
id : number
@ApiProperty()
@Column()
UserName : String
@ApiProperty()
@Column()
Email : String
@ApiProperty()
@Column()
Password : String

}




 
 