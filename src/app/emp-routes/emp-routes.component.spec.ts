import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpRoutesComponent } from './emp-routes.component';

describe('EmpRoutesComponent', () => {
  let component: EmpRoutesComponent;
  let fixture: ComponentFixture<EmpRoutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpRoutesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmpRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
