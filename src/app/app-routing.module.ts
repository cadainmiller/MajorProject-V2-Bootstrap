import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layout/default/default.component';
import { MainComponent } from './pages/main/main.component';
import { EmployeesListComponent } from './pages/employees-list/employees-list.component';
import { EmployeesSearchComponent } from './pages/employees-search/employees-search.component';
import { TestComponent } from './pages/test/test.component';
import { UserComponentComponent } from './pages/user-component/user-component.component';
import { LoginComponent } from './pages/login/login.component';

import { AuthGuard } from './auth/auth.guard';

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
      {
        path: 'user',
        component: UserComponentComponent,
      },
    ],
    canActivate: [AuthGuard],
  },
  {
    path: 'test',
    component: TestComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
