import { Component, OnInit } from '@angular/core';
import {Chirp} from '../../models/Chirp';
import {Phrase} from '../../models/Phrase';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {ChirpService} from '../chirp.service';
import {MatDialogRef} from '@angular/material';
import {UserService} from '../../auth/user.service';
export interface LanguagesRef {
  data: {
    languages: Array<{
      language: string;
    }>;
  };
}
export interface TranslationRef {
  data: {
    translations: Array<{
      translatedText: string;
    }>
  };
}
@Component({
  selector: 'app-add-chirp',
  templateUrl: './add-chirp.component.html',
  styleUrls: ['./add-chirp.component.sass']
})
export class AddChirpComponent implements OnInit {
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
  languages: Array<string> = [];

  chirpForm: FormGroup;
  constructor(private userService: UserService, public formBuilder: FormBuilder, private chirpService: ChirpService, private dialogRef: MatDialogRef<AddChirpComponent>) { } // Dependency injection
  ngOnInit() {
   this.initChirpForm();
   this.onChanges();
   console.log();
  }
  onChanges() {
    // this.chirpForm.get('chirpOriginLanguage').valueChanges
    //   .subscribe(selectedOriginLanguage => {
    //     if (selectedOriginLanguage !== '') {
    //       this.chirpForm.get('chirpTerminalLanguage').enable();
    //     }
    //   });
    this.chirpForm.get('chirpTerminalLanguage').valueChanges
      .subscribe(selectedTerminalLanguage => {
        if (selectedTerminalLanguage !== '') {
          this.chirpForm.get('chirpPhrase').enable();
        }
      });
    this.chirpForm.get('chirpPhrase').valueChanges
      .subscribe(chirpPhrase => {
        if (chirpPhrase === '') { // Very weird... wanna check this out later
          this.chirpForm.get('translateButton').enable();
        } else {
          this.chirpForm.get('translateButton').disable();
        }
      });
  }
  initChirpForm() {
    this.getLanguages();
    this.chirpForm = this.formBuilder.group({
      chirpTitle: [''],
      // chirpOriginLanguage: [''],
      chirpTerminalLanguage: [''],
      chirpPhrase: ['', Validators.required],
      translateButton: ['', Validators.required],
    });
    this.chirpForm.get('chirpPhrase').disable();
    this.chirpForm.get('translateButton').disable();
  }
  addPhrase(originalString) {
    // don't do anything if originalstring is empty
    if (originalString === '') {
      return;
    }
    // add to chirp
    this.translate(originalString);
    this.currentPhrase.original = '';

  }
  translate(phrase: string) {
    this.chirpService.translate(phrase, this.chirp.toLanguage).subscribe((res: TranslationRef) => {
      // @ts-ignore
      this.chirp.fromLanguage = res.data.translations[0].detectedSourceLanguage;
      this.chirp.phrases.push({
        original: phrase,
        translated: res.data.translations[0].translatedText,
      });
    });
  }
  removePhrase(id) {
    this.chirp.phrases.splice(id, 1);
  }
  addChirp() {
    if (this.chirp.phrases.length > 0 || this.chirp.title !== '') {
      this.dialogRef.close(this.chirp);
      this.userService.user.subscribe(res => {
        this.userService.addChirp(this.chirp, res);
      });

    } else {
      console.log('will make this an error later');
    }
  }
  cancel() {

  }
  getLanguages() {
    this.chirpService.getLanguages().subscribe((data: LanguagesRef) => {
     data.data.languages.map(x => this.languages.push(x.language));
    });
  }

}
