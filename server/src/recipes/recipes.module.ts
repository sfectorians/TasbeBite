import { Module } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { RecipesController } from './recipes.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [RecipesController],
  providers: [RecipesService],
})
export class RecipesModule {}
