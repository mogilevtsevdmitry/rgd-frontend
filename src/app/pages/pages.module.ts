import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { AutsorcerComponent } from './autsorcer/autsorcer.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule } from '@angular/forms'


@NgModule({
  declarations: [
    MainLayoutComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent,
    AutsorcerComponent,
    AdminComponent,
  ],
  exports: [
    LoginComponent,
    MainLayoutComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
  ],
})
export class PagesModule { }
