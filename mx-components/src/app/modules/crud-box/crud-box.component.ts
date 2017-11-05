import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'mx-crud-box',
  templateUrl: './crud-box.component.html',
  styleUrls: ['./crud-box.component.css']
})
export class MxCrudBoxComponent implements OnInit {

  @Input() title: String;
  @Input() form: FormGroup;

  @Input() backButtonUrl: string;

  @Input() showBackButton: boolean = true;
  @Input() showSaveButton: boolean = true;

  @Input() backButtonLabel: string = 'Back';
  @Input() submitButtonLabel: string = 'Submit';

  constructor() {
    
   }

  ngOnInit() {
  }

}
