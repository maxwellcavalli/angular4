import { Component, ViewChild, TemplateRef, ChangeDetectorRef, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MxDialogComponent } from './modules/dialog/dialog.component';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { MxCustomPage } from 'mx-core';
import { MxTreeViewComponent } from './modules/tree-view/tree-view.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,

})
export class AppComponent {

  @ViewChild('dialog') dialog: MxDialogComponent;
  @ViewChild('cellCheckboxButton') cellCheckboxButton: TemplateRef<any>;
  @ViewChild('tree') tree: MxTreeViewComponent;

  title = 'app';

  form: FormGroup;

  menu: any = [
    {
      label: 'MENU 0',
      url: '#menu0',
      badge: 10
    },
    {
      label: 'MENU 1',
      children: [
        {
          label: 'MENU 1.1',
          url: '#menu11'
        },
        {
          label: 'MENU 1.2',
          url: '#menu12'
        },
        {
          label: 'MENU 1.3',
          url: '#menu13'
        },
        {
          label: 'MENU 1.4',
          children: [
            {
              label: 'MENU 1.4.1',
              url: '#menu141'
            },
            {
              label: 'MENU 1.4.2',
              url: '#menu142'
            },
            {
              label: 'MENU 1.4.3',
              url: '#menu143'
            },
            {
              label: 'MENU 1.4.4',
              children: [
                {
                  label: 'MENU 1.4.4.1',
                  url: '#menu1441'
                },
                {
                  label: 'MENU 1.4.4.2',
                  url: '#menu1442'
                },
                {
                  label: 'MENU 1.4.4.3',
                  children: [
                    {
                      label: 'MENU 1.4.4.3.1',
                      url: '#menu14431'
                    }
                  ]
                },
              ]
            }
          ]
        },

        {
          label: 'MENU 1.5',
          children: [
            {
              label: 'MENU 1.5.1',
              url: '#menu151'
            },
          ]
        }

      ]
    },

    {
      label: 'MENU 2',
      children: [
        {
          label: 'MENU 2.2',
          url: '#menu21'
        }
      ]
    }
  ]

  myFilter: any = {
    name: ''
  }

  myObject: any = {
    code: 0,
    name: 'Name',
    surename: 'Surename',
    hora: '',
    data: new Date(),
    data2: new Date(),
    cpf: '',
    telefone: ''
  }

  myNodes: any = [
    {
      id: 1, name: 'Node 1', object: null, checked: false, indeterminate: false,
      children: [
        { id: 2, name: 'Node 1.1', object: null, checked: true, indeterminate: false },
        { id: 3, name: 'Node 1.2', object: null, checked: true, indeterminate: false },
        { id: 4, name: 'Node 1.3', object: null, checked: true, indeterminate: false },
        { id: 5, name: 'Node 1.4', object: null, checked: true, indeterminate: false },
      ]
    },
    {
      id: 6, name: 'Node 2', object: null, checked: false, indeterminate: false,
      children: [
        { id: 7, name: 'Node 2.1', object: null, checked: false, indeterminate: false },
        { id: 8, name: 'Node 2.2', object: null, checked: false, indeterminate: false },
        { id: 9, name: 'Node 2.3', object: null, checked: false, indeterminate: false },
        {
          id: 10, name: 'Node 2.4', object: null, checked: false, indeterminate: false,
          children: [
            {
              id: 11, name: 'Node 2.4.1', object: null, checked: false, indeterminate: false,
              children: [
                {
                  id: 12, name: 'Node 2.4.1.1', object: null, checked: false, indeterminate: false,
                  children: [
                    { id: 13, name: 'Node 2.4.1.1.1', object: null, checked: true, indeterminate: false },
                    { id: 14, name: 'Node 2.4.1.1.2', object: null, checked: false, indeterminate: false }

                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    { id: 15, name: 'Node 3', object: null, checked: false, indeterminate: false }
  ]

  _rows: Array<any> = [
    { selected: false, code: 1, name: 'Maxwell', surename: 'Cavalli' },
    { selected: true, code: 2, name: 'Marcel', surename: 'Stange' },
    { selected: false, code: 3, name: 'Luiz', surename: 'Arcie' },
    { selected: false, code: 4, name: 'Alyson', surename: 'Isidro' },
    { selected: false, code: 5, name: 'Alexandre', surename: 'Fagundes' },
    { selected: false, code: 6, name: 'Maria', surename: 'Aparecida' },
    { selected: false, code: 7, name: 'José', surename: 'Silva' },
    { selected: false, code: 8, name: 'Hugo', surename: 'Luiz' },
    { selected: false, code: 9, name: 'Celestina', surename: 'Oda' },
    { selected: false, code: 10, name: 'Tereza', surename: 'Xuxu' },
    { selected: false, code: 11, name: 'Claudia', surename: 'Jhonny Hendrix' },
    { selected: false, code: 12, name: 'Jessica', surename: 'Medeiros' },
  ];

  rows: BehaviorSubject<Array<any>> = new BehaviorSubject<Array<any>>(null);
  cols: any;

  images: any;
  page: MxCustomPage = new MxCustomPage();

  public disabled: boolean = false;

  constructor(formBuilder: FormBuilder,
    private cdf: ChangeDetectorRef) {

    this.form = formBuilder.group({
      // code: [{ value: null, disabled: this.disabled }, Validators.required],
      // name: [{ value: null, disabled: this.disabled }, [Validators.required, Validators.minLength(5)]],
      // surename: [{ value: null, disabled: this.disabled }, [Validators.required, Validators.minLength(5)]],
      hora: [{ value: null, disabled: this.disabled }, []],
      data: [{ value: null, disabled: this.disabled }, []],
      data2: [{ value: null, disabled: this.disabled }, []],
      cpf: [{ value: null, disabled: this.disabled }, []],
      telefone: [{ value: null, disabled: this.disabled }, Validators.required],
    });

    let index = 0;
    this._rows.forEach(el => {
      el.$$index = index++;
    });

    let _tmp = this._rows.slice(0, 5);
    this.rows.next(_tmp);

    this.page.recordCount = this._rows.length; 
    this.page.pageSize = 5;
    this.page.pageIndex = 0;
  }

  public getTreeViewSelected() {
    let _ret = this.tree.getAllSelected(false);
  }


  public onPage(event: MxCustomPage) {

    let _init = event.pageIndex * event.pageSize;
    let _end = _init + event.pageSize;
    if (_end > this._rows.length) {
      _end = this._rows.length;
    }

    let _tmp = this._rows.slice(_init, _end);
    this.rows.next(_tmp);
  }

  ngOnInit() {
    this.cols = [
      { prop: 'selected', title: 'Selected', maxWidth: 50, cellTemplate: this.cellCheckboxButton },
      { prop: 'code', title: 'Code', maxWidth: 50 },
      { prop: 'name', title: 'Name' },
      { prop: 'surename', title: 'Surename' }
    ];

    //this.myObject.data = '2017-12-01T00:00';
    //this.myObject.hora = '09:55';

    //this.form.controls['hora'].markAsPristine({ onlySelf: true });
  }

  getData(row) {
    return row.selected;
  }

  public selection(row: any, event: any, checked: boolean): void {
    let _end = this.rows.getValue();
    let idx = row.$$index;

    let index = _end.findIndex(_el => (_el as any).$$index === idx);
    if (index > -1) {
      _end.forEach(_el => _el.selected = false);
      _end[index].selected = checked;
      this.rows.next(_end);
    }
  }

  public disable() {
    this.disabled = !this.disabled;

    Object.keys(this.form.controls).forEach(key => {
      if (this.disabled) {
        this.form.controls[key].disable({ onlySelf: true })
      } else {
        this.form.controls[key].enable({ onlySelf: true })
      }
    });
  }

  public submit() {
    alert('submit');
  }

  public back() {
    alert('Back');
  }

  public openDialog() {
    this.myFilter.name = 'Maxwell';

    this.dialog.openDialog();
  }

  public onFinishUpload(event) {
  }

  public onFinishUploadGallery(event) {
    this.images = event;
  }

  public clearGallery() {
    this.images = undefined;
  }

  public addRow() {
    let data = this.rows.value;
    data.push({ selected: false, code: 999, name: 'TESTE', surename: 'TESTE' })

    this.rows.next(data);
  }




}


