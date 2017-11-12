import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SuiModule } from 'ng2-semantic-ui';
import { SidebarModule } from 'ng-sidebar';
import { SimpleNotificationsModule } from 'angular2-notifications';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';

import { AuthGuard } from './_guards/auth.guard';
import { AuthenticationService } from './_services/authentication.service';
import { UserService } from './_services/user.service';
import { ManualService } from './_services/manual.service';
import { TranslateService } from './_translations';
import { TRANSLATION_PROVIDERS, TranslatePipe } from './_translations';

import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './_components/header/header.component';
import { RegisterComponent } from './pages/register/register.component';
import { ManualDetailsComponent } from './pages/manual-details/manual-details.component';

import { OrderPipe } from './_pipes/order-by.pipe';
import { SearchComponent } from './_components/search/search.component';
import { ToolbarComponent } from './_components/toolbar/toolbar.component';
import { SidebarComponent } from './_components/sidebar/sidebar.component';
import {NotificationService} from './_services/notification.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    SuiModule,
    SidebarModule.forRoot(),
    SimpleNotificationsModule.forRoot()
  ],
  declarations: [
    AppComponent,
    TranslatePipe,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    RegisterComponent,
    ManualDetailsComponent,
    OrderPipe,
    SearchComponent,
    ToolbarComponent,
    SidebarComponent,
    ProfileComponent,
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    UserService,

    TRANSLATION_PROVIDERS,
    TranslateService,

    ManualService,
    NotificationService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
