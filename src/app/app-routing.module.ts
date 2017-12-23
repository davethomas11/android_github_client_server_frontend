import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GithubLoginComponent } from './github-login/github-login.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: GithubLoginComponent }
]
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
