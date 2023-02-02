import { ApiProperty } from '@nestjs/swagger';

export class Singup {
  @ApiProperty()
  UserName: String;
  @ApiProperty()
  Email: String;
  @ApiProperty()
  Password: String;
}

export class Login {
  @ApiProperty()
  Email: String;
  @ApiProperty()
  Password: String;
}

export class ForgetPassword {
  @ApiProperty()
  Email: String;
  @ApiProperty()
  Newpassword: String;
  @ApiProperty()
  ConfirmPassword: String;
}

export class ResetPassword {
  @ApiProperty()
  LastPassword: String;
  @ApiProperty()
  Newpassword: String;
  @ApiProperty()
  ConfirmPassword: String;
}
