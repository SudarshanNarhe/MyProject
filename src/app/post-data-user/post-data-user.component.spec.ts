import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDataUserComponent } from './post-data-user.component';

describe('PostDataUserComponent', () => {
  let component: PostDataUserComponent;
  let fixture: ComponentFixture<PostDataUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostDataUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostDataUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
