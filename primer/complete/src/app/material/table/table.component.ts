import { Component, ViewChild, OnInit } from '@angular/core';

import { PeopleDatabase, UserData } from './people-database';
import { PersonDataSource } from './person-data-source';
import { MatPaginator, MatSort } from '@angular/material';

export type UserProperties = 'userId' | 'userName' | 'progress' | 'color' | undefined;
export type TrackByStrategy = 'id' | 'reference' | 'index';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  menu;
  dataSource: PersonDataSource | null;
  displayedColumns: UserProperties[] = [];
  trackByStrategy: TrackByStrategy = 'reference';
  changeReferences = false;
  highlights = new Set<string>();

  @ViewChild(MatPaginator) _paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;

  constructor(public _peopleDatabase: PeopleDatabase) { }

  ngOnInit() {
    this.connect();
  }

  connect() {
    this.displayedColumns = ['userId', 'userName', 'progress', 'color'];
    this.dataSource = new PersonDataSource(this._peopleDatabase,
        this._paginator, this.sort);
    this._peopleDatabase.initialize();
  }

  disconnect() {
    this.dataSource = null;
    this.displayedColumns = [];
  }

  getOpacity(progress: number) {
    const distanceFromMiddle = Math.abs(50 - progress);
    return distanceFromMiddle / 50 + .3;
  }

  userTrackBy = (index: number, item: UserData) => {
    switch (this.trackByStrategy) {
      case 'id': return item.id;
      case 'reference': return item;
      case 'index': return index;
    }
  }

  toggleColorColumn() {
    const colorColumnIndex = this.displayedColumns.indexOf('color');
    if (colorColumnIndex === -1) {
      this.displayedColumns.push('color');
    } else {
      this.displayedColumns.splice(colorColumnIndex, 1);
    }
  }

  toggleHighlight(property: string, enable: boolean) {
    enable ? this.highlights.add(property) : this.highlights.delete(property);
  }

}
