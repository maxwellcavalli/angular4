# MxComponents
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.6.

Suite of visual components based on Angular Material


# Important
Add configurations in .angular-cli.json

```json
    "styles": [
        ...
        "../node_modules/mx-components/src/assets/style/jquery-clockpicker.min.css"
      ]

     "scripts": [
         ...
        "../node_modules/jquery/dist/jquery.min.js",
        "../node_modules/mx-components/src/assets/script/jquery-clockpicker.min.js"
      ]

```

# 1. Components

## 1.1 mx-accordion
### Input
```typescript
    @Input() itens: MxAccordtionItem[]
```
### Output
```
none
```
### Template
```
None
```
### Example
```html
    <mx-accordion [itens]="menu"></mx-accordion>
```
```typescript
menu: any = [
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

```


## 1.2 mx-card

### Input
```typescript
    @Input() title: String;
    @Input() headerClass: String;
    @Input() defaultMargin: boolean = true;
```
### Output
```
none
```
### Template
```typescript
    @ContentChild('titleTpl') titleTpl: TemplateRef<any>;
```

### Example
```html
 <mx-card title="CARD COMPONENT">
    <span>
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque
        ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
        enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
        dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
        dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore
        et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
        ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum
        iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui
        dolorem eum fugiat quo voluptas nulla pariatur?"
    </span>

</mx-card>
```




## 1.3 mx-date

### Input
```typescript
    @Input() formControl: any;
    @Input() formControlName: string;
    @Input() required: boolean;
    @Input() placeholder: string;
    @Input() disabled: boolean;
```

### Output
```
none
```

### Template
```
None
```

### Example
```html
    <mx-date placeholder="Date" [(ngModel)]="myObject.data" [formControl]="form.controls['data']"></mx-date>
```

# 1.4 mx-clock-picker
### Input
```typescript
    @Input() formControl: any;
    @Input() formControlName: string;
    @Input() required: boolean;
    @Input() placeholder: string;
    @Input() disabled: boolean;
```
### Output
```
none
```
### Template
```
None
```

### Example
```html
    <mx-clock-picker placeholder="Time" [(ngModel)]="myObject.hora" [formControl]="form.controls['hora']"></mx-clock-picker>
```

# 1.5 mx-input-cnpj-cpf
### Input
```typescript
    @Input() formControl: any;
    @Input() formControlName: string;
    @Input() required: boolean;
    @Input() placeholder: string;
    @Input() disabled: boolean;
```
### Output
```
none
```

### Template
```
None
```

### Example
```html
    <mx-input-cnpj-cpf placeholder="CNPJ/CPF" [(ngModel)]="myObject.cpf" [formControl]="form.controls['cpf']">
    </mx-input-cnpj-cpf>
```

# 1.6 mx-input-telefone
### Input
```typescript
    @Input() formControl: any;
    @Input() formControlName: string;
    @Input() required: boolean;
    @Input() placeholder: string;
    @Input() disabled: boolean;
```
### Output
```
none
```
### Template
```
None
```
### Example
```html
    <mx-input-telefone placeholder="Telephone" [(ngModel)]="myObject.telefone" [formControl]="form.controls['telefone']">
    </mx-input-telefone>
```

# 1.7 mx-upload
### Input
```typescript
   @Input() index: Number = 0;
   @Input() tipo: String = 'icon';
   * icon
   * button
   @Input() filterTypes: String = '*';
   @Input() labelButton: String = 'Upload'
```
### Output
```typescript
   @Output() onStartFileUpload = new EventEmitter<any>();
   @Output() onFinishUpload = new EventEmitter<any>();
```

### Template
```
None
```

### Example
```html
    <mx-upload (onFinishUpload)="onFinishUpload($event)"></mx-upload>
```
```typescript
    public onFinishUpload(event) {
        console.log(event);
    }
```    

# 1.8 mx-gallery
### Input
```typescript
    @Input('images') images: any;
```
### Output
```
none
```
### Template
```
None
```
### Example
```html
  <mx-gallery [images]="images"> </mx-gallery>
```

# 1.9 mx-data-table
### Input
```typescript
    @Input() page: MxCustomPage;
    @Input() showPaginator: boolean;
    @Input() containerStyleClass: String;
    @Input() emptyMessage: String;

```
### Output
```
    @Output() onPage = new EventEmitter<MxCustomPage>();
    @Output() onSort = new EventEmitter<MxCustomSort>();
    @Output() onEdit = new EventEmitter<any>();
    @Output() onDelete = new EventEmitter<any>();
```
### Template
```
    @ViewChild('cellNormal') cellNormal: TemplateRef<any>;
    @ViewChild('cellEdit') cellEdit: TemplateRef<any>;
    @ViewChild('cellDeleteButton') cellDeleteButton: TemplateRef<any>;
    @ViewChild('cellCheckbox') cellCheckbox: TemplateRef<any>;
    @ViewChild('cellTplDate') cellTplDate: TemplateRef<any>;
```
### Example
```html
    <mx-data-table [rows]="rows | async" [cols]="cols" [page]="page" (onPage)="onPage($event)">
    </mx-data-table>
```

```typescript
    cols: any = [
        { prop: 'code', title: 'Code', maxWidth: 50 },
        { prop: 'name', title: 'Name' },
        { prop: 'surename', title: 'Surename' }
    ]

    _rows: Array<any> = [
        { code: 1, name: 'Maxwell', surename: 'Cavalli' }
    ]

    rows: BehaviorSubject<Array<any>> = new BehaviorSubject<Array<any>>(null);

    page: MxCustomPage = new MxCustomPage();

    constructor(...) {
        let _tmp = this._rows.slice(0, 5);
        this.rows.next(_tmp);

        this.page.recordCount = this._rows.length;
        this.page.pageSize = 5;
        this.page.pageIndex = 0;
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
```

# 1.10 mx-treeview-checkbox
### Input
```typescript
    @Input() nodes: any;
```
### Output
```
none
```
### Template
```
None
```
### Example
```html
    <mx-treeview-checkbox [nodes]="myNodes">
    </mx-treeview-checkbox>
```

```typescript
    myNodes: any = [
        {
            id: 1, name: 'Node 1', object: null, checked: false, indeterminate: false,
            children: [
                { id: 2, name: 'Node 1.1', object: null, checked: false, indeterminate: false },
                { id: 3, name: 'Node 1.2', object: null, checked: false, indeterminate: false },
                { id: 4, name: 'Node 1.3', object: null, checked: false, indeterminate: false },
                { id: 5, name: 'Node 1.4', object: null, checked: true, indeterminate: false },
            ]
        },
        {
            id: 6, name: 'Node 2', object: null, checked: false, indeterminate: false,
            children: [
                { id: 7, name: 'Node 2.1', object: null, checked: false, indeterminate: false },
                { id: 8, name: 'Node 2.2', object: null, checked: false, indeterminate: false },
                { id: 9, name: 'Node 2.3', object: null, checked: false, indeterminate: false },
                { id: 10, name: 'Node 2.4', object: null, checked: false, indeterminate: false,
                    children: [
                        { id: 11, name: 'Node 2.4.1', object: null, checked: true, indeterminate: false },
                    ]
                },
            ]
        }
    ]
```

# 1.11 mx-crud-box
### Input
```typescript
    @Input() title: String;
    @Input() form: FormGroup;

    @Input() backButtonUrl: string;

    @Input() showBackButton: boolean;
    @Input() showSaveButton: boolean;

    @Input() backButtonLabel: string;
    @Input() submitButtonLabel: string;
```
### Output
```
none
```
### Template
```
None
```
### Example
```html
    <form [formGroup]="form" (ngSubmit)="submit()">
        <mx-crud-box title="CRUD BOX COMPONENT" [form]="form">
            .
            .
            .
        </mx-crud-box>
    </form>
```

```typescript
    public submit() {
        console.log('submit');
    }
```


# 1.12 mx-dialog
### Input
```typescript
    @Input() title: string;
    @Input() width: number;
    @Input() height: number;
```
### Output
```
none
```
### Template
```
None
```
### Example
```html
    <mx-dialog #dialog title="TESTE DIALOG" [width]="600" [height]="400">
        <div *mx-dialog-content>
            <div style="text-align: justify">
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
            </div>
        </div>

        <div *mx-dialog-action>
            <button mat-raised-button (click)="dialog.closeDialog()">Close</button>
        </div>

    </mx-dialog>

    <button type="button" mat-raised-button (click)="openDialog()">OPEN</button>

```
```typescript
    @ViewChild('dialog') dialog: MxDialogComponent;

    public openDialog() {
        this.dialog.openDialog();
    }

```



# 1.13 mx-search-box
### Input
```typescript
    @Input() header: string;
    @Input() addUrl: string;
    @Input() searchLabel: string;
    @Input() resetLabel: string;
    @Input() searchButtonType: string;
```
### Output
```
    @Output() onSearch = new EventEmitter<any>();
    @Output() onReset = new EventEmitter<any>();
```
### Template
```
None
```
### Example
```html
    <mx-search-box  header="SEARCH BOX">
        <mat-form-field class="min-width-100">
            <input matInput type="text" [(ngModel)]="myFilter.name" placeholder="Filter" [ngModelOptions]="{standalone:true}">
        </mat-form-field>        
    </mx-search-box>

```
```typescript
None
```




