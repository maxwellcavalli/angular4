import { MatDialog, MatDialogRef } from '@angular/material';
import { trigger, transition, style, animate } from '@angular/animations';
import { DOCUMENT } from '@angular/platform-browser';
import { Directive, TemplateRef, ViewContainerRef, Component, Input, ContentChild, ChangeDetectorRef, ViewChild } from '@angular/core';

@Directive({
  selector: '[mx-dialog-content]'
})
export class MxDialogContentComponent {
  constructor(
    public templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef,
    private cdRef: ChangeDetectorRef) { }

  ngAfterViewInit() {
    setTimeout(() => {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }, 1000);
  }
}

@Directive({
  selector: '[mx-dialog-action]'
})
export class MxDialogActionComponent {
  constructor(
    public templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef,
    private cdRef: ChangeDetectorRef
  ) { }

  ngAfterViewInit() {
    setTimeout(() => {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }, 1000);
  }
}

@Component({
  selector: 'mx-dialog',
  styleUrls: ['./dialog.component.scss'],
  template: ` `
})
export class MxDialogComponent {

  @ContentChild('titleTpl') titleTpl: TemplateRef<any>;
  
  @Input() title: string;
  @Input() width: number = 400;
  @Input() height: number = 350;

  @ContentChild(MxDialogContentComponent) content: MxDialogContentComponent;
  @ContentChild(MxDialogActionComponent) action: MxDialogActionComponent;

  private dialogRef: MatDialogRef<any>;

  constructor(public dialog: MatDialog) { }

  ngAfterViewInit() {

    console.log(this.titleTpl);
    

  }

  closeDialog() {
    this.dialogRef.close();
  }

  openDialog() {

    this.dialogRef = this.dialog.open(MxDialogContentHtmlCompoment, {
      height: this.height + 'px',
      width: this.width + 'px',
    });

    if (this.content) {
      this.dialogRef.componentInstance.templateContent = this.content.templateRef;
    }

    if (this.action) {
      this.dialogRef.componentInstance.templateAction = this.action.templateRef;
    }

    this.dialogRef.componentInstance.title = this.title;
    this.dialogRef.componentInstance.titleTpl = this.titleTpl;

    this.dialogRef.afterClosed().subscribe(result => {
      
    });
  }
}

@Component({
  selector: 'mx-dialog-content-html',
  styleUrls: ['./dialog.component.scss'],
  templateUrl: './dialog.component.html',
})
export class MxDialogContentHtmlCompoment {

  @ViewChild('titleTpl') titleTpl: TemplateRef<any>;
  public title: string = 'Dialog';
  public templateContent: TemplateRef<any>;
  public templateAction: TemplateRef<any>;

  ngAfterViewInit() {

  }

  get hasTitleTmpl(){
    let _b = this.titleTpl !== null && this.titleTpl !== undefined; 
    return _b;
  }

}