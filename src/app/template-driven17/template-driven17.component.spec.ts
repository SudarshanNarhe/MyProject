import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDriven17Component } from './template-driven17.component';

describe('TemplateDriven17Component', () => {
  let component: TemplateDriven17Component;
  let fixture: ComponentFixture<TemplateDriven17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateDriven17Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TemplateDriven17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
