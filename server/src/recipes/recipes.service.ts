import { Injectable } from '@nestjs/common';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RecipesService {
  constructor(private readonly prisma:PrismaService){}
 async  create(createRecipeDto: CreateRecipeDto) {
    return await this.prisma.recipes.create({
      data : createRecipeDto
    })
  }

async   findAll() {
    return await this.prisma.recipes.findMany({
      include : {
        User : true 
      }
    })
  }

 async  findOne(id: number) {
    return await this.prisma.recipes.findUnique({
      where : {id},include:{User:true}
    })
  }

  update(id: number, updateRecipeDto: UpdateRecipeDto) {
    return `This action updates a #${id} recipe`;
  }

  remove(id: number) {
    return `This action removes a #${id} recipe`;
  }
}
