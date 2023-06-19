import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'child-feature1',
    loadChildren: () => import('./child-feature1/child-feature1.module').then(m => m.ChildFeature1Module)
  },
  {
    path: 'child-feature2',
    loadChildren: () => import('./child-feature2/child-feature2.module').then(m => m.ChildFeature2Module)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
