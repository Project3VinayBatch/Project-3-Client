import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { NewInitiativeFormComponent } from './new-initiative-form/new-initiative-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AllInitiativeComponent } from './all-initiative/all-initiative.component';
import { LinksComponent } from './links/links.component';
import { HeaderComponent } from './header/header.component';
import { Test3Component } from './test3/test3.component';
import { MatCardModule } from '@angular/material/card';
import { SignInComponent } from './sign-in/sign-in.component';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CallbackComponent } from './callback/callback.component';
import { AuthHeaderInterceptor } from './auth-header.interceptor';
import { MatDialogModule } from '@angular/material/dialog';
import {generate} from 'swagger-angular-generator';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewInitiativeFormComponent,
    NavBarComponent,
    AllInitiativeComponent,
    LinksComponent,
    Test3Component,
    SignInComponent,
    CallbackComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FlexLayoutModule,
    MatDialogModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHeaderInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule {}
