import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { TableComponent } from './page/table/table.component';
import { UsersComponent } from './page/user/users/users.component';
import { DetailsComponent } from './page/user/details/details.component';
import { UserPostsComponent } from './page/user/userposts/userposts.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'table', component: TableComponent},
  {path: 'users', component: UsersComponent},
  {path: 'details/:id', component: DetailsComponent},
  {path: 'userposts/:id', component: UserPostsComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
