import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/services/employees.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { CreateUserComponent } from 'src/app/shared/modal/create-user/create-user.component';

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

  openCreateEmployee() {
    const modalRef = this.modalService.open(CreateUserComponent);
    //modalRef.componentInstance.src = link;
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
