import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeejsonUseComponent } from './employeejson-use.component';

describe('EmployeejsonUseComponent', () => {
  let component: EmployeejsonUseComponent;
  let fixture: ComponentFixture<EmployeejsonUseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeejsonUseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeejsonUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
