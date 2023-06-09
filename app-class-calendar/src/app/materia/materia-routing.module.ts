import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MateriaPage } from '../materia/materia.page';

const routes: Routes = [
  {
    path: '',
    component: MateriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MateriaPageRoutingModule {}
