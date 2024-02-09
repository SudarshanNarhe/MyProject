import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyHttpUseComponent } from './my-http-use.component';

describe('MyHttpUseComponent', () => {
  let component: MyHttpUseComponent;
  let fixture: ComponentFixture<MyHttpUseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyHttpUseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyHttpUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
