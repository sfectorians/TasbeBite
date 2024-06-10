import { JwtService } from '@nestjs/jwt';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private  jwt : JwtService
  
  ) {}
  async login(dto: CreateAuthDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });
    if (!user) {
      throw new HttpException('email not found', HttpStatus.BAD_REQUEST);
    }
    const validePassword = await bcrypt.compare(dto.password, user.password);
    if (!validePassword) {
      throw new HttpException('wrong password', HttpStatus.BAD_REQUEST);
    }
    const {password,...rest} = user
    const token = this.jwt.signAsync(rest)
    return token 
  }

  findAll() {
    return `This action returns all auth`;
  }



  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
