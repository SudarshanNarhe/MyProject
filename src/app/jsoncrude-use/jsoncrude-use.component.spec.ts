import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsoncrudeUseComponent } from './jsoncrude-use.component';

describe('JsoncrudeUseComponent', () => {
  let component: JsoncrudeUseComponent;
  let fixture: ComponentFixture<JsoncrudeUseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JsoncrudeUseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JsoncrudeUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
