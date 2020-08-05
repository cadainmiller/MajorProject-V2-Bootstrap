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
    { headerName: 'Make', field: 'make', sortable: true, filter: true },
    { headerName: 'Model', field: 'model', sortable: true, filter: true },
    { headerName: 'Price', field: 'price', sortable: true, filter: true },
  ];
  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 },
  ];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  onRowClicked(event: any) {
    $('#imagemodal').modal('show');
  }
}
