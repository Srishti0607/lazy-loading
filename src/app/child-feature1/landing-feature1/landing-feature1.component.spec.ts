import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingFeature1Component } from './landing-feature1.component';

describe('LamdingFeature1Component', () => {
  let component: LandingFeature1Component;
  let fixture: ComponentFixture<LandingFeature1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandingFeature1Component]
    });
    fixture = TestBed.createComponent(LandingFeature1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
