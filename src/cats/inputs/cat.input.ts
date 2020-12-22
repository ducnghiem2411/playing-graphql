import { InputType, Field, Int } from 'type-graphql';

@InputType()
export class CatInput {
  @Field()
  readonly name: string;
  @Field(() => Int)
  readonly age: number;
  @Field()
  readonly breed: string;

}

@InputType()
export class EditCatInput {
  @Field({ nullable: true })
  readonly name: string;
  @Field({ nullable: true })
  readonly age: number;
  @Field({ nullable: true })
  readonly breed: string;

}
