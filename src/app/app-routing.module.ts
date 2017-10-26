import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

import { AuthGuard } from './_guards/auth.guard';
import {ManualDetailsComponent} from './pages/manual-details/manual-details.component';

const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'manual/:id', component: ManualDetailsComponent},
  { path: '', component: HomeComponent, /* canActivate: [AuthGuard] */ },
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
