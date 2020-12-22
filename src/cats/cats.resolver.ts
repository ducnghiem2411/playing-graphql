import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CatsService } from './cats.service';
import { CatType } from './dto/create-cat.dto';
import { CatInput, EditCatInput } from './inputs/cat.input';
import { async } from 'rxjs/internal/scheduler/async';

@Resolver()
export class CatsResolver {
  constructor(private readonly catsService: CatsService) {}

  @Query(() => [CatType])
  async cats(
    @Args({ name: 'page', type: () => Number, defaultValue: 0 }) page: number,
    @Args({ name: 'limit', type: () => Number, defaultValue: 0 }) limit: number
    ) {
    return this.catsService.findAll(page, limit);
  }

  @Query(() => CatType)
  async cat(@Args('id') id: string) {
    return this.catsService.findById(id)
  }

  @Mutation(() => CatType)
  async createCat(@Args('input') input: CatInput) {
    return this.catsService.create(input);
  }

  @Mutation(() => CatType)
  async editCat(
    @Args('input') input: EditCatInput,
    @Args('id') id: string
  ) {
    return this.catsService.edit(id, input)
  }

  @Mutation(() => CatType)
  async deleteCat(@Args('id') id: string) {
    return this.catsService.delete(id)
  }
}
