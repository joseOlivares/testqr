import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReaderComponent } from './components/reader/reader.component';
import { CodigoqrComponent } from './components/codigoqr/codigoqr.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'codigoqr',component:CodigoqrComponent},
  {path:'reader',component:ReaderComponent},
  {path:'**',component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
