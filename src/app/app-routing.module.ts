import { ContactusComponent } from './contactus/contactus.component';
import { ServicesComponent } from './services/services.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'about-us',component:AboutusComponent},
  {path:'profile',component:ProfileComponent},
  {path:'team',component:OurTeamComponent},
  {path:'services',component:ServicesComponent},
  {path:'contactus',component:ContactusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
