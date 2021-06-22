import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { TableComponent } from './page/table/table.component';
import { UserComponent } from './page/user/user.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'table', component: TableComponent},
  {path: 'user', component: UserComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
