import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'mx-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class MxUploadComponent implements OnInit {

  @Input() index: Number = 0;
  @Input() tipo: String = 'icon';
  @Input() filterTypes: String = '*';
  @Input() labelButton: String = 'Upload'

  @Output() onStartFileUpload = new EventEmitter<any>();
  @Output() onFinishUpload = new EventEmitter<any>();

  @ViewChild('upload') inputFile: ElementRef;

  files = new Array<any>();

  constructor() {
    this.tipo = "icon";
    this.filterTypes = "*";
  }

  ngOnInit() {

  }

  public openFileUpload(index) {
    this.files = new Array<any>();

    if (this.onStartFileUpload) {
      this.onStartFileUpload.emit(index);
    }

    this.inputFile.nativeElement.click();
  }

  getImagem(readerEvt) {
    let files = readerEvt.target.files;
    this.setup_reader(files, 0);
  }

  private setup_reader(files, i) {
    var file = files[i];
    var name = file.name;
    var reader = new FileReader();
    reader.onload = (e) => {
      this.readerLoaded(e, files, i, name);
    };
    
    reader.readAsBinaryString(file);
  }

  private readerLoaded(e, files, i, name) {
    var bin = e.target.result;
    let obj = {
      name: name,
      content: btoa(bin)
    }

    this.files.push(obj);

    if (i < files.length - 1) {
      this.setup_reader(files, i + 1);
    } else {
      if (this.onFinishUpload) {
        this.onFinishUpload.emit(this.files);
      }
    }
  }

}
