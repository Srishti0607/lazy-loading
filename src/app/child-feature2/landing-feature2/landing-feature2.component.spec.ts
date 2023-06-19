import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingFeature2Component } from './landing-feature2.component';

describe('LandingFeature2Component', () => {
  let component: LandingFeature2Component;
  let fixture: ComponentFixture<LandingFeature2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandingFeature2Component]
    });
    fixture = TestBed.createComponent(LandingFeature2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
