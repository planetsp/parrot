import {Component, OnInit} from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatDialog, MatDialogRef } from '@angular/material';
import { MatExpansionModule } from '@angular/material';
import {AddChirpComponent, LanguagesRef} from '../../chirp/add-chirp/add-chirp.component';
import { EditChirpComponent } from '../../chirp/edit-chirp/edit-chirp.component';
import { RemoveChirpComponent } from '../../chirp/remove-chirp/remove-chirp.component';
import {ChirpService} from '../../chirp/chirp.service';
import {Chirp} from '../../models/Chirp';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../auth/user.service';
import {FormGroup} from '@angular/forms';
@Component({
  selector: 'app-chirp-view',
  templateUrl: './chirp-view.component.html',
  styleUrls: ['./chirp-view.component.css']
})
export class ChirpViewComponent implements OnInit {
  addChirpDialogRef: MatDialogRef<AddChirpComponent>;
  editChirpDialogRef: MatDialogRef<EditChirpComponent>;
  removeChirpDialogRef: MatDialogRef<RemoveChirpComponent>;
  currentChirps: Array<Chirp>;
  filteredChirps: Array<Chirp>;
  typeFilter: Set<string> = new Set<string>();
  languages: Array<string> = [];
  toLanguageFilter: string;
  fromLanguageFilter: string;
  book: boolean
  article: boolean;
  document: boolean;
  song: boolean;
  show: boolean;


  filters: any = {};
  /** Based on the screen size, switch from standard to one column per row */
  ngOnInit() {
    this.getLanguages()
  }
  constructor(private userService: UserService, private breakpointObserver: BreakpointObserver, private dialog: MatDialog, private chirpService: ChirpService, private route: ActivatedRoute) {
    this.userService.user.subscribe(user => {
      this.userService.getChirps(user).subscribe(res => {
        // @ts-ignore
        this.currentChirps = res;
        // @ts-ignore
        this.filteredChirps = res;
      });
    });
  }

  openAddChirpDialog() {
    this.addChirpDialogRef = this.dialog.open(AddChirpComponent);
    this.addChirpDialogRef.afterClosed().subscribe(res => {
      // console.log(res);
      // this.chirpService.addChirp(res);
    });
  }
  openEditChirpDialog() {
    this.editChirpDialogRef = this.dialog.open(EditChirpComponent);
    this.editChirpDialogRef.afterClosed().subscribe(res => {
      // this.chirpService.updateChirp(res);
    });
  }
  openRemoveChirpDialog(chirpId) {
    this.removeChirpDialogRef = this.dialog.open(RemoveChirpComponent);
    this.removeChirpDialogRef.afterClosed().subscribe(res => {
      if (res === 'true') {
        this.userService.user.subscribe(user => {
          this.userService.removeChirp(chirpId, user);
        });
      }
    });
  }
  check() {
    if(!this.book){
      this.typeFilter.delete('Book')
    }else {
      this.typeFilter.add('Book')
    }
    if(!this.show){
      this.typeFilter.delete('Show')
    }else {
      this.typeFilter.add('Show')
    }
    if(!this.document){
      this.typeFilter.delete('Document')
    }else {
      this.typeFilter.add('Document')
    }
    if(!this.song){
      this.typeFilter.delete('Song')
    }else {
      this.typeFilter.add('Song')
    }
    if(!this.article){
      this.typeFilter.delete('Article')
    }else {
      this.typeFilter.add('Article')
    }

  }
  applyFilters() {
    this.check()
    this.filteredChirps = this.currentChirps.filter(chirp => {
      if (this.toLanguageFilter && chirp.toLanguage !== this.toLanguageFilter){
        return false;
      }
      if (this.fromLanguageFilter && chirp.fromLanguage !== this.fromLanguageFilter){
        return false;
      }
      if (this.typeFilter.size > 0 && !this.typeFilter.has(chirp.type)){
        return false;
      }
      return true;
    })
  }
  clear() {
    this.filteredChirps = this.currentChirps;
    this.fromLanguageFilter = null;
    this.toLanguageFilter = null;
    this.typeFilter.clear();
    this.article = false
    this.book = false;
    this.song = false;
    this.show = false;
    this.document = false;
  }
  getLanguages() {
    this.chirpService.getLanguages().subscribe((data: LanguagesRef) => {
      data.data.languages.map(x => this.languages.push(x.language));
    });
  }
  getLanguageName(name) {
    return this.chirpService.getLanguage(name)
  }
  onDialogClose() {

  }
}
