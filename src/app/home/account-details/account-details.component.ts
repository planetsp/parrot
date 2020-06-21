import { Component, OnInit } from '@angular/core';
import {User} from '../../models/User';
import {UserService} from '../../auth/user.service';
import * as CanvasJS from './canvasjs.min';
import {Chirp} from '../../models/Chirp';
// const CanvasJS = require('./canvasjs.min');
@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.sass']
})
export class AccountDetailsComponent implements OnInit {
  currUser: User;
  currChirps: Array<Chirp>;
  toLanguageData: any = {};
  fromLanguageData: any = {};
  typeData: any = {};
  typeDataPoints: any = {};
  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.user.subscribe(usr => {
      this.currUser = usr;
      this.userService.getChirps(usr).subscribe(res => {
        // @ts-ignore
        this.currChirps = res;

        this.currChirps.forEach(chirp => {
          console.log(chirp)
          if(this.toLanguageData && this.toLanguageData[chirp.toLanguage]) {
            this.toLanguageData[chirp.toLanguage] += 1 ;
          } else {
            this.toLanguageData[chirp.toLanguage] = 1 ;
          }
          if(this.fromLanguageData && this.fromLanguageData[chirp.fromLanguage]){
            this.fromLanguageData[chirp.fromLanguage] += 1 ;
          } else {
            this.fromLanguageData[chirp.fromLanguage] = 1 ;
          }
          if(this.typeData && this.typeData[chirp.type]){
            this.typeData[chirp.type] += 1 ;
          } else{
            this.typeData[chirp.type] = 1;
          }
        });
        // console.log(this.typeData)
        this.typeDataPoints = Object.keys(this.typeData).map(key => {
          return { y : this.typeData[key],
            label: key };
        });
        console.log(this.typeDataPoints);
      });
    });




    // const chart = new CanvasJS.Chart('chartContainer', {
    //   animationEnabled: true,
    //   exportEnabled: true,
    //   title: {
    //     text: 'Languages translated to'
    //   },
    //   data: [{
    //     type: 'pie',
    //     dataPoints: this.typeDataPoints,
    //   }]
    // });
    //
    // chart.render();
  }

}
