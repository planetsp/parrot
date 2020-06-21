import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatToolbarModule, MatButtonModule, MatSidenavModule,
  MatIconModule, MatListModule, MatGridListModule,
  MatCardModule, MatMenuModule, MatInputModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {LayoutModule} from '@angular/cdk/layout';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatInputModule,
  ], exports: [
    MatButtonModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    FormsModule,
    LayoutModule,
    MatInputModule,

  ]
})
export class SharedModule { }
