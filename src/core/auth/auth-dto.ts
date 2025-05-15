import { IsNotEmpty, IsString } from "@nestjs/class-validator"
import { Expose } from "class-transformer"


export class AuthDto {

   @Expose()
   @IsNotEmpty({message: 'harus diisi'})
   @IsString({message: 'harus berupa string'})
   username: string 

   @Expose()
   @IsNotEmpty({message: 'harus diisi'})
   @IsString({message: 'harus berupa string'})
   password: string 
}
