import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { environment } from '../environments/environment';
export const firebaseConfig = environment.firebase;

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HomeModule} from './home/home.module';
import {ChirpModule} from './chirp/chirp.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {AddChirpComponent} from './chirp/add-chirp/add-chirp.component';
import {ChirpService} from './chirp/chirp.service';
import {AuthModule} from './auth/auth.module';
import {RemoveChirpComponent} from './chirp/remove-chirp/remove-chirp.component';
import {EditChirpComponent} from './chirp/edit-chirp/edit-chirp.component';
import { HttpClientModule } from '@angular/common/http';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AddPhraseComponent} from './chirp/add-phrase/add-phrase.component';
import {SharedModule} from './shared/shared.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ChirpModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    AuthModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    SharedModule,
  ],
  providers: [ChirpService],
  bootstrap: [AppComponent],
  entryComponents: [AddChirpComponent, RemoveChirpComponent, EditChirpComponent, AddPhraseComponent],
})
export class AppModule { }
