import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppClientesComponent } from './app-clientes/app-clientes.component';
import { AppCriaComponent } from './app-cria/app-cria.component';

const routes: Routes = [
  { path: 'clientes', component: AppClientesComponent },
  { path: 'cria', component: AppCriaComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
