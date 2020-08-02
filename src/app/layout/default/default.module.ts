import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { DefaultComponent } from './default.component';
import { MainComponent } from '../../pages/main/main.component';
import { EmployeesListComponent } from 'src/app/pages/employees-list/employees-list.component';

@NgModule({
  declarations: [DefaultComponent, MainComponent, EmployeesListComponent],
  imports: [CommonModule, RouterModule, SharedModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DefaultModule {}
