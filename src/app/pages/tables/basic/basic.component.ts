import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';
import { TablesService, Element } from '../tables.service';
//import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html'
})
export class BasicComponent {
  public displayedColumns = ['position', 'name', 'weight', 'symbol'];
  public dataSource1: any;
  public dataSource_temp: any;
  public settings: Settings;

  public name: string;
  public weight: string;
  public symbol: string;

  constructor(public appSettings:AppSettings, private tablesService:TablesService) {
    this.settings = this.appSettings.settings;
    this.dataSource1 = new MatTableDataSource<Element>(this.tablesService.getData());

    console.log(this.dataSource1);
    console.log("@@");
  }

  btnClick(){
    this.dataSource1 = new MatTableDataSource<Element>(this.tablesService.getData());
    console.log(this.dataSource1);

    let templist = this.dataSource1._renderData._value;

    let map = {
      position : this.dataSource1._renderData._value.length +1,
      name : this.name,
      weight : this.weight,
      symbol : this.symbol
    }
    templist.push(map);

    this.dataSource1.filteredData = templist;
    this.dataSource1._data._value = templist;
    this.dataSource1._renderData._value = templist;
    console.log("click Test");
  }

}
