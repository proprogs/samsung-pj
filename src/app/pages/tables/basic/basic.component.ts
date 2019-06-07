import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';
import { TablesService, Element } from '../tables.service';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html'
})
export class BasicComponent {
  public displayedColumns = ['position', 'name', 'weight', 'symbol'];
  public dataSource1: any;
  public dataSource_temp: any;
  public settings: Settings;
  constructor(public appSettings:AppSettings, private tablesService:TablesService) {
    this.settings = this.appSettings.settings;
    this.dataSource1 = new MatTableDataSource<Element>(this.tablesService.getData());

    console.log(this.dataSource1);
    console.log("@@");
/*
    this.dataSource_temp =this.dataSource1;
    let templist = [];

    for(let i=0; i <this.dataSource_temp.filteredData.length; i++){

      if(this.dataSource_temp.filteredData[i].position < 5){
        let map = {
          position : this.dataSource1.filteredData[i].position,
          name : this.dataSource1.filteredData[i].name,
          weight : this.dataSource1.filteredData[i].weight,
          symbol : this.dataSource1.filteredData[i].symbol
        }
        templist.push(map);
      }
    }

    this.dataSource1.filteredData = templist;
    this.dataSource1._data._value = templist;
    this.dataSource1._renderData._value = templist;
    console.log(this.dataSource1);
    */
  }

  btnClick(private tablesService:TablesService){
    this.dataSource1 = new MatTableDataSource<Element>(this.tablesService.getData());
    console.log(this.dataSource1);

    let templist = this.dataSource1._renderData._value;

    let map = {
      position : this.dataSource1._renderData._value.length +1,
      name : "test"+ this.dataSource1._renderData._value.length,
      weight : 111 + this.dataSource1._renderData._value.length,
      symbol : "abc" +this.dataSource1._renderData._value.length
    }
    templist.push(map);

    this.dataSource1.filteredData = templist;
    this.dataSource1._data._value = templist;
    this.dataSource1._renderData._value = templist;
    console.log("click Test");
  }

}
