import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/services/employees.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Customer } from 'src/app/model/customer.model';
import { CreateUserComponent } from 'src/app/shared/modal/create-user/create-user.component';
import { EditCustomerComponent } from 'src/app/shared/modal/edit-customer/edit-customer.component';
import { from } from 'rxjs';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss'],
})
export class EmployeesListComponent implements OnInit {
  constructor(
    private employeeService: EmployeesService,
    public modalService: NgbModal
  ) {}

  employees = [];

  public employee = [];

  openCreateEmployee() {
    const modalRef = this.modalService.open(CreateUserComponent);
    //modalRef.componentInstance.src = link;
  }

  openEditEmployee(index) {
    console.log(index);
    if (index > -1) {
      this.employee = this.employees[index];
      const modalRef = this.modalService.open(EditCustomerComponent);
      modalRef.componentInstance.employee = this.employee;
    }
  }

  ngOnInit(): void {
    this.employeeService
      .sendGetRequest()
      .pipe()
      .subscribe((results) => {
        this.employees = results;
        console.log(results);
      });
  }
}
