import { Body, Controller, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/Entities/User.entity';
import { Login, Singup } from 'src/Services/Signup';
import { Repository } from 'typeorm';
import { brotliDecompressSync } from 'zlib';

@Controller('user')
export class UserController {


constructor(@InjectRepository(User) private userepo : Repository<User>){
    
}

@Post('Signup')

Signup(@Body() signup : Singup){
    
const user = this.userepo.save(signup);
return signup


}

@Post('Login')
Login(@Body() login : Login, singup: Singup){


if (login.Email == singup.Email && login.Password == singup.Password){


    console.log("Successfull!!")
}

}

}
 


 

