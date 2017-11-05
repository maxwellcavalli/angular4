import { Component, OnInit, Input, ContentChild, TemplateRef, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'mx-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class MxCardComponent {

  @Input() title: String;
  @Input() headerClass: String;
  @Input() defaultMargin: boolean = true;

  @ContentChild('titleTpl') titleTpl: TemplateRef<any>;
  @ViewChild('header') header: ElementRef;

  public style: string;
  public hasTitleTmpl: boolean = false;

  constructor(private _cdf: ChangeDetectorRef) { }

  ngAfterViewInit() {
    if (!this.headerClass) {
      this.header.nativeElement.classList.add('default-header');
    } else {
      this.header.nativeElement.classList.add(this.headerClass);
    }

    if (this.defaultMargin) {
      this.style = "card-container";
    } else {
      this.style = "card-container-no-margin";
    }

    this.hasTitleTmpl = this.titleTpl !== null && this.titleTpl !== undefined;

    this._cdf.detectChanges();
  }

}
