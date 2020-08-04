import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layout/default/default.component';
import { MainComponent } from './pages/main/main.component';
import { EmployeesListComponent } from './pages/employees-list/employees-list.component';
import { EmployeesSearchComponent } from './pages/employees-search/employees-search.component';
import { TestComponent } from './pages/test/test.component';


const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: '',
        component: MainComponent,
      },
      {
        path: 'elist',
        component: EmployeesListComponent,
      },
      {
        path: 'esearch',
        component: EmployeesSearchComponent,
      },
    ],
  },
  {
    path: 'test',
    component: TestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
