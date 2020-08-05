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
    { headerName: 'Name', field: 'name', sortable: true, filter: true },
    {
      headerName: 'Username',
      field: 'username',
      sortable: true,
      filter: true,
      editable: true,
      suppressSorting: true,
    },
    {
      headerName: 'Phone Number',
      field: 'phone',
      sortable: true,
      filter: true,
      
    },
    {
      headerName: 'Street',
      field: 'address.street',
      sortable: true,
      filter: true,
    },
    { headerName: 'City', field: 'address.city', sortable: true, filter: true },
    {
      headerName: 'Zip',
      field: 'address.zipcode',
      sortable: true,
      filter: true,
      
    },
  ];

  
  rowData = [];

  constructor(
    private http: HttpClient,
    private employeeService: EmployeesService
  ) {}

  ngOnInit() {
    this.employeeService.sendGetRequest().subscribe((results) => {
      this.rowData = results;
      console.log(results);
    });
  }

  onRowClicked(event: any) {
    $('#imagemodal').modal('show');
  }
}
