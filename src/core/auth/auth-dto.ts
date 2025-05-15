import { IsNotEmpty, IsString } from "@nestjs/class-validator"
import { ApiProperty } from "@nestjs/swagger"
import { Expose } from "class-transformer"


export class AuthDto {

   @Expose()
   @IsNotEmpty({message: 'harus diisi'})
   @IsString({message: 'harus berupa string'})
   @ApiProperty({default: 'admin'})
   username: string 

   @Expose()
   @IsNotEmpty({message: 'harus diisi'})
   @IsString({message: 'harus berupa string'})
   @ApiProperty({default: 'admin'})
   password: string 
}
