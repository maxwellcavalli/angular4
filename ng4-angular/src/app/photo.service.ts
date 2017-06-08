import { Injectable } from '@angular/core';
import { Photo } from './photo'

@Injectable()
export class PhotoService {

  photos: Photo[] = [];

  constructor() { }

  getAllPhotos(): Photo[] {
    for (var i = 0; i < 5; i++) {
      var f = new Photo();
      f.id = i;
      f.title = 'Title ' + i.toString();
      f.url = 'https://hp.imguol.com.br/c/home/2c/2017/06/06/reconstrucao-recente-joga-mais-lenha-no-debate-da-imigracao-para-a-america-1496768556497_300x300.jpg';

      this.photos.push(f);
    }

    return this.photos;
  }

}
