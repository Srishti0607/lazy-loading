import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingFeature2Component } from './landing-feature2/landing-feature2.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    component: LandingFeature2Component
  }
];


@NgModule({
  declarations: [
    LandingFeature2Component
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)],
  ]
})
export class ChildFeature2Module { }
