import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingFeature1Component } from './landing-feature1/landing-feature1.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    component: LandingFeature1Component
  }
];


@NgModule({
  declarations: [
    LandingFeature1Component
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)],
  ]
})
export class ChildFeature1Module { }
