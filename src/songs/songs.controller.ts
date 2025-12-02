import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
  constructor(private songsService: SongsService) {}
  @Post()
  create() {
    return this.songsService.create('Tom - Imagine Dragons');
  }

  @Get()
  findAll() {
    return this.songsService.findAll();
  }
  @Get(':id')
  findOne() {
    return `One song is fetched`;
  }
  @Put(':id')
  updateOne() {
    return `One song is updated`;
  }
  @Delete(':id')
  deleteOne() {
    return `One song is deleted`;
  }
}
