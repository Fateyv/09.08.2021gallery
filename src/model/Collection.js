import { ALBUMS_URL, PHOTOS_URL } from "../config";
  
export default class Collection {
  constructor() {
    this._albumsUrl = ALBUMS_URL;
    this._photosUrl = PHOTOS_URL;
    this.list = [];
  }
  fetchAlbum() {
    return fetch(this._albumsUrl).then((resp) =>
      resp.json().then((data) => (this.list = data))
    );
  }

  fetchPhotos(id) {
    return fetch(this._photosUrl.replace('{{ID}}', id))
      .then((resp) => resp.json())
      .then((data) => (this.list = data));
  }
}