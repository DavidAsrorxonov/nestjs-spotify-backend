import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
  private readonly songs = [];

  create(song) {
    // @ts-ignore
    this.songs.push(song);
    return this.songs;
  }
  findAll() {
    return this.songs;
  }
}
