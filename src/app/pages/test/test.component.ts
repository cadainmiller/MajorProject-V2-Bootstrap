import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

var $: any;

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})


export class TestComponent implements OnInit {
  constructor(private http: HttpClient) {}

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
  onRowClicked(event: any) {
    $('#imagemodal').modal('show');
  }

  ngOnInit() {}
}
