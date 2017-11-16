import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { MxGalleryImageContent } from './gallery-image-content';


@Component({
  selector: 'mx-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class MxGalleryComponent {

  @Input() maxItens: number = 5;


  private selected_index = 0;
  private ignoreButtonValidation: boolean = false;
  private _internal_images: any;

  public galleryImageContent: MxGalleryImageContent = undefined;

  public showImagePreview: boolean = false;
  public showNext: boolean = false;
  public showPrior: boolean = false;

  get showButtons(){
    if (this._internal_images){
      return this._internal_images.length > 0; 
    } else {
      return false;
    }
  }


  @Input('images')
  set images(value: any | null) {
    this._internal_images = value;

    this.galleryImageContent = undefined;
    if (this._internal_images) {
      this.init();
    } 
  }

  get images() {
    return this._internal_images;
  }

  constructor(private cdf: ChangeDetectorRef) {
  }

  private init() {
    this.galleryImageContent = undefined;
    this.showPrior = false;
    this.showNext = undefined;

    if (!this.ignoreButtonValidation) {
      let _count = 0;
      this._internal_images.forEach(item => {
        item.display_on_gallery = _count < this.maxItens;

        if (this.galleryImageContent === undefined) {
          this.galleryImageContent = item;
          this.showImagePreview = true;
        }
        _count++;
      });

      this.showNext = _count > this.maxItens;
    }
  }

  public nextImage() {

    if (this.showNext) {
      this.ignoreButtonValidation = true;

      this._internal_images[this.selected_index].display_on_gallery = false;
      this._internal_images[this.maxItens + this.selected_index].display_on_gallery = true;
      this.showPrior = true;

      if (((this.selected_index + 1) + this.maxItens) < this._internal_images.length) {
        this.selected_index++;
      } else {
        this.showNext = false;
      }
    }
  }

  public priorImage() {
    if (this.showPrior) {
      
      this._internal_images[this.maxItens + this.selected_index].display_on_gallery = false;
      this._internal_images[this.selected_index].display_on_gallery = true;

      this.showNext = true;

      if (this.selected_index > 0) {
        this.selected_index--;
      } else {
        this.showPrior = false;
      }
    }
  }

  public changeImage(galleryImageContent: MxGalleryImageContent) {
    this.galleryImageContent = galleryImageContent;
  }
}
