import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from "rxjs/Rx";
import { TranslateService } from '@ngx-translate/core';

import { MxBaseController } from "./base-controller";
import { MxBaseEntity } from '../entity/base-entity';
import { MxResponseEntity } from '../entity/response-entity';
import { MxPageFilter } from '../entity/data-table/page-filter';
import { MxCustomPage } from '../components/data-table/mx-custom-page';
import { MxBaseService } from '../service/base-service';
import { MxCustomSort } from '../components/data-table/mx-custom-sort';


export abstract class MxBaseCrudController<T extends MxBaseEntity> extends MxBaseController {

  public responseEntity = new MxResponseEntity();
  public pageFilter = new MxPageFilter();

  pageFilterN: BehaviorSubject<MxPageFilter> = new BehaviorSubject<MxPageFilter>(new MxPageFilter());
  page: MxCustomPage = new MxCustomPage();


  public editing: boolean = false;
  protected searchFunction: Function;

  protected beforeDelete(object: T): boolean { return true; }
  protected reloadFilter(key: string, onLoad: Function) { }
  protected afterGet(object: any): void { }

  protected recreatePageFilter() {
    this.pageFilterN = new BehaviorSubject<MxPageFilter>(new MxPageFilter());
  }

  public ngOnInit() {
    var id = this.route.params.subscribe(params => {
      var id = params['id'];
      this.editing = false;

      if (!id)
        return;

      this.editing = true;
      this.getDomain(id);
    });
  }

  constructor(
    protected _service: MxBaseService<T>,
    public translate: TranslateService,
    protected router: Router,
    protected route: ActivatedRoute,
    protected createServerObject: boolean) {

    super(translate);
    this.initPageFilter();

    this.route.params.subscribe(params => {
      var id = params['id'];
      this.editing = false;

      if (!id) {
        if (createServerObject) {
          this._service.create().subscribe(d => {
            this.afterGet(d)
          });
        }
      } else {
        this.editing = true;
      }
    });
  }

  searchEvent(event) {
    if (this.isFilterUpdatedP()) {
      let _p = this.pageFilterN.value;
      _p.filterValue = this.onGetFilterValue();

      this.pageFilterN.next(_p);
    }
  }
 

  protected getDomain(id): void {
    this._service.get(id)
      .subscribe(
      data => this.afterGet(data),
      response => {
        if (response.status == 404) {
          this.router.navigate(['NotFound']);
        } else {
          this.afterResponse(response);
        }
      });
  }

  protected createDefaultSearchListener() {
    this.pageFilterN.subscribe(_filter => {
      this.isFilterUpdatedP();

      _filter.filterValue = this.onGetFilterValue();
      this.onSaveFilter();

      this._service.search(_filter).subscribe(
        _ret => {
          this.afterSearch(_ret);
          let _dados = (_ret.object as any).content;

          this.onPopulateTable(_dados as Array<any>)
        },
        response => {
          this.afterResponse(response);
        });
    });
  }

  public delete(object): void {
    let id = object.value;
    let obj = object.row;

    try {
      if (this.beforeDelete(obj) == true) {
        if (confirm(this.translate.instant("GEN.DELETE.MESSAGE"))) {
          this._service.delete(id).subscribe(
            data => this.afterDelete(),
            response => {
              this.afterResponse(response);
            });
        }
      }
    } catch (e) {
      alert(e);
    }
  }

  onPage(event: MxCustomPage) {
    let _p = this.pageFilterN.value;

    _p.page.pageNumber = event.pageIndex;
    _p.page.size = event.pageSize;

    this.pageFilterN.next(_p);
  }

  onSort(event: MxCustomSort) {
    let _p = this.pageFilterN.value;

    _p.sort.propertyName = event.field;
    _p.sort.orderType = event.direction;

    this.pageFilterN.next(_p);
  }

  /*private methods */
  public onSaveFilter(): void {
    if (this.isFilterUpdatedP) {
      let _o = this.pageFilterN.value;
      _o.filterValue = this.onGetFilterValue();

      localStorage.setItem(this.onGetFilterKey(), JSON.stringify(_o));
    }
  }

  protected reloadFilterL(onLoad: Function) {
    let filter = localStorage.getItem(this.onGetFilterKey());
    if (filter !== undefined && filter !== null) {
      let filterAux = JSON.parse(filter);

      if (onLoad != undefined) {
        onLoad.apply(this, [filterAux]);
      } else {
        this.onUpdateFilterValue(filterAux.filterValue);

        this.page.pageIndex = filterAux.page.pageNumber;
        this.page.pageSize = filterAux.page.size;

        this.pageFilterN.next(filterAux);
      }
    }
  }

  protected saveOrUpdate(id: Number, object: T) {
    var result;

    if (id) {
      result = this._service.update(id, object);
      result.subscribe(
        data => this.afterUpdate(data),
        response => {
          this.afterResponse(response);
        });
    } else {
      result = this._service.insert(object);
      result.subscribe(
        data => {
          this.afterSave(data)
          return data.object;
        },
        response => {
          this.afterResponse(response);
        });
    }
  }

  protected afterSave(responseEntity: any) {
    super.defaultSaveMessage();
  }

  protected afterDelete(): void {
    super.defaultDeleteMessage();

    let _p = this.pageFilterN.value;
    this.pageFilterN.next(_p);
  }

  protected afterUpdate(data) {
    super.defaultUpdateMessage();
  }

  protected afterSearch(data: any): void {
    this.responseEntity = data;
    this.page.recordCount = data.object.totalElements;

    this.pageFilter.page.totalElements = data.object.totalElements;
    this.pageFilter.page.totalPages = data.object.totalPages;
  }

  protected initPageFilter() {
    this.pageFilter.filterValue = "%%";
    this.pageFilter.page.pageNumber = 0;
    this.pageFilter.page.size = 10;
  }
}