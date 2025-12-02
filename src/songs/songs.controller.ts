import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('songs')
export class SongsController {
  @Post()
  create() {
    return 'New song is created';
  }

  @Get()
  findAll() {
    return 'All songs fetched';
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
