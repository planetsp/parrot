import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { SecondaryNavComponent } from './secondary-nav/secondary-nav.component';
import { ChirpViewComponent } from './chirp-view/chirp-view.component';
import { SharedModule } from '../shared/shared.module';
import {MatCheckboxModule, MatDatepickerModule, MatExpansionModule, MatNativeDateModule, MatSelectModule} from '@angular/material';
import { AccountDetailsComponent } from './account-details/account-details.component';

@NgModule({
  declarations: [HomepageComponent, MainNavComponent, SecondaryNavComponent, ChirpViewComponent, AccountDetailsComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
  ],
  exports: [HomepageComponent, MainNavComponent, AccountDetailsComponent]
})
export class HomeModule { }
