import { Query, Resolver } from '@nestjs/graphql';
import { BoardsService } from './boards.service';

//@Controller()
@Resolver('/boards')
export class BoardsResolver {
  constructor(
    private readonly boardService: BoardsService, //
  ) {}

  //  @Get() ->Query // need to download graphql
  // yarn add @nestjs/graphql @nestjs/apollo @apollo/server graphql
  @Query()
  getHello(): string {
    return this.boardService.getHello();
  }
}
