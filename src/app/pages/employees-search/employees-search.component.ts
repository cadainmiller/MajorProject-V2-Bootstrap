import { Component, OnInit, PipeTransform } from '@angular/core';
import { ColDef, GridApi, ColumnApi } from 'ag-grid-community';
import { EmployeesService } from 'src/app/services/employees.service';
import { HttpClient } from '@angular/common/http';

var $: any;

@Component({
  selector: 'app-employees-search',
  templateUrl: './employees-search.component.html',
  styleUrls: ['./employees-search.component.scss'],
})
export class EmployeesSearchComponent implements OnInit {
  columnDefs = [
    {headerName: 'Make', field: 'make', sortable: true, filter: true},
    {headerName: 'Model', field: 'model', sortable: true, filter: true},
    {headerName: 'Price', field: 'price', sortable: true, filter: true}
];

rowData: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {this.rowData = this.http.get('https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/sample-data/smallRowData.json');}

  onRowClicked(event: any) {
    $('#imagemodal').modal('show');
  }
}
