import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompopipeComponent } from './compopipe.component';

describe('CompopipeComponent', () => {
  let component: CompopipeComponent;
  let fixture: ComponentFixture<CompopipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompopipeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompopipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
