import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-remove-chirp',
  templateUrl: './remove-chirp.component.html',
  styleUrls: ['./remove-chirp.component.sass']
})
export class RemoveChirpComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<RemoveChirpComponent>) { }

  ngOnInit() {
  }

  remove() {
    this.dialogRef.close('true');
  }

}
