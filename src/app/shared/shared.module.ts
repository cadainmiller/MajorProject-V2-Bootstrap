import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CreateUserComponent } from './modal/create-user/create-user.component';
import { EditCustomerComponent } from './modal/edit-customer/edit-customer.component';
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    CreateUserComponent,
    EditCustomerComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, FooterComponent, SidebarComponent],
  entryComponents: [CreateUserComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
