import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from "rxjs/Rx";
import { TranslateService } from '@ngx-translate/core';

export abstract class MxBaseController {

  protected oldValue: Object;

  protected onUpdateFilterValue(value: any): void { }
  protected onGetFilterKey(): string { return "" };
  protected onGetFilterValue(): any { return ""; }
  protected onPopulateTable(dados: Array<any>) { }
  protected reloadFilter(key: string, onLoad: Function) { }
  protected afterGet(object: any): void { }

  constructor(public translate: TranslateService) { }

  get maskCpf(): Array<any> {
    let pattern: String = '999.999.999-99';
    return this.mask(pattern);
  }

  get maskCnpj(): Array<any> {
    let pattern: String = '99.999.999/9999-99';
    return this.mask(pattern);
  }

  public getEnumDescription(value: any) {
    for (var key in Object.keys(value)) {
      var t = Object.keys(value)[key];
      return value[t];
    }
  }

  public getEnumValue(value: any) {
    for (var key in Object.keys(value)) {
      var t = Object.keys(value)[key];

      return t;
    }
  }

  protected validateValueChanged(newValue: Object, oldValue: Object): boolean {
    let changed = false;

    if (typeof newValue === 'object') {

      if (oldValue !== undefined && oldValue !== null &&
        newValue !== undefined && newValue !== null) {

        let keys = Object.keys(newValue);
        for (let x = 0; x < keys.length; x++) {
          let key = keys[x];

          let _vN = newValue[key];
          let _vO = oldValue[key];

          if (typeof _vN === 'object') {
            changed = this.validateValueChanged(_vN, _vO);

            if (changed === true) {
              return changed;
            }
          } else {
            if (_vN !== _vO) {
              return true;
            }
          }
        };
      } else {
        if (newValue !== oldValue) {
          return true;
        }
      }
    } else {
      if (this.oldValue) {
        if (newValue !== oldValue) {
          return true;
        }
      } else {
        return true;
      }
    }

    return false;
  }

  protected isFilterUpdatedP(): boolean {
    let _newValue = this.onGetFilterValue();
    let _oldValue = this.oldValue;
    let changed = false;

    changed = this.validateValueChanged(_newValue, _oldValue);
    if (changed) {
      this.oldValue = JSON.parse(JSON.stringify(_newValue));
    }

    return changed;
  }

  protected afterResponse(response: any) {
    if (response.status == 504) {
      alert(this.translate.instant("GEN.CONNECTION.ERROR"))
    } else if (response.status == 417 || response.status == 500) {
      let object: any;
      object = JSON.parse(response._body);
      alert(object.errorMessage);
    }
  }

  protected defaultSaveMessage() {
    alert('Record Added');
  }

  protected defaultDeleteMessage() {
    alert('Record Deleted');
  }

  protected defaultUpdateMessage() {
    alert('Record Updated');
  }

  protected responseEntityToArray(arr: any, value: any) {
    let _responseEntity: any = value;
    let temp = _responseEntity.object.content;
    for (var x in temp) {
      arr.push(temp[x]);
    }
  }

  protected mask(pattern: String): Array<any> {
    let ar = new Array<any>();

    for (let i = 0; i < pattern.length; i++) {
      if (pattern.charAt(i) == '9') {
        ar.push(/\d/);
      } else {
        ar.push(pattern.charAt(i));
      }
    }
    return ar;
  }

  protected download(data: any, filename: string) {
    var saveData = (function () {
      var a = document.createElement('a');
      document.body.appendChild(a);
      a.setAttribute('style', 'display: none');
      return function (data, filename) {
        a.href = data;
        a.download = filename;
        a.click();

        document.body.removeChild(a);
      }
    })();

    saveData(data, filename);
  }

}