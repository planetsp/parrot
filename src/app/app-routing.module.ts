import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecondaryNavComponent } from './home/secondary-nav/secondary-nav.component';
import {ViewChirpComponent} from './chirp/view-chirp/view-chirp.component';
import {AddChirpComponent} from './chirp/add-chirp/add-chirp.component';
import {SignUpComponent} from './auth/sign-up/sign-up.component';
import {LoginComponent} from './auth/login/login.component';
import {HomepageComponent} from './home/homepage/homepage.component';
import {ChirpViewComponent} from './home/chirp-view/chirp-view.component';
import {AccountDetailsComponent} from './home/account-details/account-details.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'dashboard', component: ChirpViewComponent},
  { path: 'chirp/:id', component: ViewChirpComponent},
  { path: 'add', component: AddChirpComponent},
  { path: 'account', component: AccountDetailsComponent},
  { path: 'signup', component: SignUpComponent },
  { path: 'login', component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
