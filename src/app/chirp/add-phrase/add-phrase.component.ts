import {Component, Inject, OnInit} from '@angular/core';
import {Phrase} from '../../models/Phrase';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {ChirpService} from '../chirp.service';
export interface TranslationRef {
  data: {
    translations: Array<{
      translatedText: string;
    }>
  };
}
@Component({
  selector: 'app-add-phrase',
  templateUrl: './add-phrase.component.html',
  styleUrls: ['./add-phrase.component.sass']
})

export class AddPhraseComponent implements OnInit {
  phrase: Phrase = {
    original: '',
    translated: ''
  }
  toLang = '';
  constructor(public dialog: MatDialogRef<AddPhraseComponent>, @Inject(MAT_DIALOG_DATA) data, private chirpService: ChirpService) {
    this.toLang = data.language;
    console.log(data);
  }

  ngOnInit() {
  }
  translate(origPhrase: string) {
    console.log(this.phrase);
    console.log(this.toLang);
    if (origPhrase !== null) {
      this.chirpService.translate(origPhrase, this.toLang).subscribe(res => {
        console.log(res);
        this.phrase.original = origPhrase;
        // @ts-ignore
        this.phrase.translated = res.data.translations[0].translatedText;
        this.dialog.close(this.phrase);
      });
    }
  }

}
