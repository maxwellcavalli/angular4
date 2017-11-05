import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import moment from 'moment/src/moment'
import { MxBaseEntity } from '../entity/base-entity';
import { MxPageFilter } from '../entity/data-table/page-filter';
import { MxResponseEntity } from '../entity/response-entity';

export abstract class MxBaseService<T extends MxBaseEntity> {

    protected abstract getUrl(): string;
    protected abstract getToken(): String;

    protected options: RequestOptions;

    constructor(public http: Http) {        
    }

    ngOnInit(){        
        this.options = this.createHeaderOptions();
    }

    protected createHeaderOptions(): RequestOptions {
        let token = 'Bearer ' + this.getToken();
        let headers = new Headers(
            { 'Content-Type': 'application/json', 'authorization': token });

        return new RequestOptions({ headers: headers });
    }

    public search(pageFilter: MxPageFilter): Observable<MxResponseEntity> {
        let filter = JSON.stringify(pageFilter);
        this.options = this.createHeaderOptions();

        let ret = this.http.post(this.getUrl() + "/search", filter, this.options)
            .map(res => res.json());
        return ret;
    }

    public get(id: Number): Observable<MxResponseEntity> {
        this.options = this.createHeaderOptions();
        return this.http.get(this.getBaseUrl(id), this.options)
            .map(res => res.json());
    }

    public insert(object: T): Observable<MxResponseEntity> {
        object = this.parseObjectToSend(object);
        this.options = this.createHeaderOptions();
        return this.http.post(this.getUrl(), JSON.stringify(object), this.options)
            .map(res => res.json());
    }

    public update(id: Number, object: T): Observable<MxResponseEntity> {
        object = this.parseObjectToSend(object);

        this.options = this.createHeaderOptions();
        return this.http.put(this.getBaseUrl(id), JSON.stringify(object), this.options)
            .map(res => res.json());
    }

    protected parseObjectToSend(object: T): T {
        var _aux = Object.assign({}, object);

        Object.keys(_aux).forEach(key => {
            if (_aux[key] instanceof Date) {
                _aux[key] = moment(_aux[key]).format('YYYY-MM-DDTHH:mm');
            }
        });

        return _aux;
    }

    public delete(id: Number) {
        this.options = this.createHeaderOptions();
        return this.http.delete(this.getBaseUrl(id), this.options)
            .map(res => res.json());
    }

    protected getBaseUrl(id: Number) {
        return this.getUrl() + "/" + id;
    }

    protected getCustomBaseUrl(id: Number) {
        return this.getUrl() + "/custom/" + id;
    }


    public create(): Observable<any> {
        this.options = this.createHeaderOptions();
        return this.http.get(this.getUrl() + "/novo", this.options)
            .map(res => res.json());
    }
}