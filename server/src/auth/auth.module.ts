import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';

import { UsersService } from 'src/users/users.service';
import { JwtStrategy } from './jwt.strategy';
export const secret = "sfectoria"
@Module({
  imports : [
    PassportModule,
    JwtModule.register({
      secret : secret,
      signOptions : {expiresIn : "60000000000s"}
    })
  ],
  controllers: [AuthController],
  providers: [AuthService,PrismaService,JwtStrategy,UsersService],
})
export class AuthModule {}
