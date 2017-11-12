import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

import { AuthGuard } from './_guards/auth.guard';
import {ManualDetailsComponent} from './pages/manual-details/manual-details.component';
import {ProfileComponent} from './pages/profile/profile.component';
import {ManualCreateComponent} from "./pages/manual-create/manual-create.component";
import {ManualLibraryComponent} from "./pages/manual-library/manual-library.component";
import {ManualAwardsComponent} from "./pages/manual-awards/manual-awards.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";

const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'awards', component: ManualAwardsComponent, canActivate: [AuthGuard] },
  { path: 'manual', component: ManualLibraryComponent, canActivate: [AuthGuard] },
  { path: 'manual/create', component: ManualCreateComponent, canActivate: [AuthGuard] },
  { path: 'manual/:id', component: ManualDetailsComponent},
  { path: '', component: HomeComponent },
  { path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
