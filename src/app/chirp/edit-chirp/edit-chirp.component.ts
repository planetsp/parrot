import { Component, OnInit } from '@angular/core';
import {Phrase} from '../../models/Phrase';
import {Chirp} from '../../models/Chirp';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-edit-chirp',
  templateUrl: './edit-chirp.component.html',
  styleUrls: ['./edit-chirp.component.sass']
})
export class EditChirpComponent implements OnInit {
  currentPhrase: Phrase = {
    original: '',
    translated: ''
  }
  chirp: Chirp = {
    title: '',
    type: 'Document',
    phrases: new Array(),
    date: new Date().toDateString(),
    fromLanguage: null,
    toLanguage: null,
  }
  languages: Array<string> = ['english', 'spanish'];

  chirpForm: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
