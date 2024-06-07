import { ApiProperty } from "@nestjs/swagger";
import { Role } from "@prisma/client";
import { IsEmail, IsString } from "class-validator";

export class CreateUserDto {
    @ApiProperty()
    @IsString()
    userName: string;
    @ApiProperty()
    @IsEmail()
    email: string;
    @ApiProperty()
    @IsString()
    password: string;
    @ApiProperty()
    @IsString()
    role?: Role;
    @ApiProperty()
    @IsString()
    imageUrl: string;
}
