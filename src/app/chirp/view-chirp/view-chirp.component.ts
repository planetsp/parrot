import { Component, OnInit } from '@angular/core';
import {ChirpService} from '../chirp.service';
import {Chirp} from '../../models/Chirp';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../auth/user.service';
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material';
import {AddPhraseComponent} from '../add-phrase/add-phrase.component';
import {RemoveChirpComponent} from '../remove-chirp/remove-chirp.component';

@Component({
  selector: 'app-view-chirp',
  templateUrl: './view-chirp.component.html',
  styleUrls: ['./view-chirp.component.sass']
})
export class ViewChirpComponent implements OnInit {
  addPhraseDialogRef: MatDialogRef<AddPhraseComponent>;
  removeChirpDialogRef: MatDialogRef<RemoveChirpComponent>;
  chirp: Chirp = {
    date: undefined,
    fromLanguage: '',
    phrases: undefined,
    title: '',
    toLanguage: '',
    type: '',

  };
  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute, private dialog: MatDialog, private chirpServe: ChirpService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.userService.user.subscribe(user => {
        this.userService.getChirp(user, params.get('id')).subscribe(res => {
          // @ts-ignore
          this.chirp = res;
        });
      });
    })
    console.log(this.chirp.type);
  }

  openDialog() {
    console.log('hello world');
  }
  updateChirp() {
    this.userService.user.subscribe(user => {
      this.userService.editChirp(this.chirp, user);
    });
    this.router.navigateByUrl('/dashboard');
  }
  removeChirp() {
    this.removeChirpDialogRef = this.dialog.open(RemoveChirpComponent);
    this.removeChirpDialogRef.afterClosed().subscribe(res => {
      if (res === 'true') {
        this.userService.user.subscribe(user => {
          this.userService.removeChirp(this.chirp.id, user);
          this.router.navigateByUrl('/dashboard');
        });
      }
    });
  }
  addPhrase() {
    const dialogData = new MatDialogConfig();
    dialogData.data = {
      language: this.chirp.toLanguage,
    };
    this.addPhraseDialogRef = this.dialog.open(AddPhraseComponent, dialogData);
    this.addPhraseDialogRef.afterClosed().subscribe(res => {
      if (res !== null) {
        this.chirp.phrases.push(res);
      }
    });
  }
  removePhrase(index) {
    this.chirp.phrases.splice(index, 1);
  }
}
