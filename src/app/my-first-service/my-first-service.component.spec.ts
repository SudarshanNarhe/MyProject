import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFirstServiceComponent } from './my-first-service.component';

describe('MyFirstServiceComponent', () => {
  let component: MyFirstServiceComponent;
  let fixture: ComponentFixture<MyFirstServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyFirstServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyFirstServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
