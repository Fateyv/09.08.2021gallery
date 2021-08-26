import Collection from '../model/Collection.js';
import AlbumsView from '../view/AlbumsView';
import PhotosView from '../view/PhotosView';

export default class Controller {
  constructor($el) {
    this.$container = $el;
    this.initView();
    this.initCollection();
    this.init();
  }
  initView() {
    this.albumsView = new AlbumsView({
      onItemClick: this.changePhotos.bind(this),
    });
    this.photosView = new PhotosView();
    this.$container.append(this.albumsView._$album).append(this.photosView._$el);
  }
  initCollection() {
    this.collection = new Collection();
  }

  init() {
    this.collection.fetchAlbum().then(() => {
      this.albumsView.renderAlbums(this.collection.list);
      this.getAlbumPhotos(this.collection.list[0].id);
    });
  }
  getAlbumPhotos(albumId) {
    this.collection.fetchPhotos(albumId).then(() => {
      this.photosView.renderPhotos(this.collection.list);
    });
  }
  changePhotos(id) {
    return this.getAlbumPhotos(id);
  }
}