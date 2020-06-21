import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewChirpComponent } from './view-chirp/view-chirp.component';
import {SharedModule} from '../shared/shared.module';
import { AddChirpComponent } from './add-chirp/add-chirp.component';
import {MatDialogModule, MatFormFieldModule, MatInputModule, MatSelectModule} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { EditChirpComponent } from './edit-chirp/edit-chirp.component';
import { RemoveChirpComponent } from './remove-chirp/remove-chirp.component';
import { AddPhraseComponent } from './add-phrase/add-phrase.component';

@NgModule({
  declarations: [ViewChirpComponent, AddChirpComponent, EditChirpComponent, RemoveChirpComponent, AddPhraseComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatDialogModule,
  ]
})
export class ChirpModule { }
