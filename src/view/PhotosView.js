  export default class PhotosView {
    constructor() {
      this._$el = this.initView();
    }
  
    initView() {
      return $('<div id="photos"></div>');
    }
  
    renderPhotos(list) {
      this._$el.html(list.map((photo) => this.getPhotoHtml(photo)).join("\n"));
    }
  
    getPhotoHtml(list) {
      return `<img class="photo__item" src="${list.thumbnailUrl}" alt="${list.title}"/>`;
    }
  }