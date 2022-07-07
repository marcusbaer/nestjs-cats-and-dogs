import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { DogsModule } from './dogs/dogs.module';
import { PetsModule } from './pets/pets.module';
import { SomebodyModule } from './somebody/somebody.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: './src/graphql.ts',
        outputAs: 'class',
        emitTypenameField: true,
      },
      // debug: false,
      // playground: false,
    }),
    CatsModule,
    DogsModule,
    PetsModule,
    SomebodyModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
