import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [
    CatsModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      playground: true
    }),
    MongooseModule.forRoot(
      'mongodb+srv://nghiemld-gql:01wasdwasd@cluster0.txwil.mongodb.net/nest-gql?retryWrites=true&w=majority'
    )
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
